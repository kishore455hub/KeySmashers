// ========== DOM ==========
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const input = document.getElementById("wordInput");

const mainMenu = document.getElementById("mainMenu");
const modeMenu = document.getElementById("modeMenu");
const gameContainer = document.getElementById("gameContainer");
const gameOverScreen = document.getElementById("gameOverScreen");
const playBtn = document.getElementById("playBtn");
const exitBtn = document.getElementById("exitBtn");
const play3WavesBtn = document.getElementById("play3WavesBtn");
const playInfinityBtn = document.getElementById("playInfinityBtn");
const backToMenuBtn = document.getElementById("backToMenuBtn");
const retryBtn = document.getElementById("retryBtn");
const menuBtn = document.getElementById("menuBtn");
const countdownEl = document.getElementById("countdown");
const scoreBoard = document.getElementById("scoreBoard");
const scoreEl = document.getElementById("score");

// ========= JUMPSCARE =========
let jumpscarePlaying = false;

/**
 * Trigger a full-screen jumpscare:
 * - display scary image (assets/scary.jpg)
 * - try to play assets/sounds/jumpscare.mp3 once (if present)
 * - fallback to a short WebAudio effect if audio file is missing or blocked
 * - after 2 seconds, hide the overlay and call optional callback (e.g. endGame)
 */
function triggerJumpscare(callback) {
  if (jumpscarePlaying) return;
  jumpscarePlaying = true;
  const overlay = document.getElementById("jumpscareScreen");
  const audioEl = document.getElementById("jumpscareAudio");

  if (overlay) {
    overlay.classList.remove("hidden");
  }

  let played = false;
  if (audioEl) {
    try {
      audioEl.currentTime = 0;
      audioEl.play().then(() => {
        played = true;
      }).catch(() => {
        // playback might be blocked — we'll fallback
      });
    } catch (e) {}
  }

  // fallback synth if audio didn't play
  setTimeout(() => {
    if (!played && typeof window.AudioContext !== "undefined") {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "sawtooth";
        o.frequency.setValueAtTime(180, ctx.currentTime);
        g.gain.setValueAtTime(0.001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.6, ctx.currentTime + 0.02);
        o.connect(g); g.connect(ctx.destination);
        o.start();
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.0);
        o.stop(ctx.currentTime + 1.0);
      } catch(e) {}
    }
  }, 150);

  // hide overlay after 2 seconds and call callback (game over)
  setTimeout(() => {
    if (overlay) overlay.classList.add("hidden");
    jumpscarePlaying = false;
    if (typeof callback === "function") callback();
  }, 2000);
}


// ========== Assets ==========
const playerImg = new Image();
playerImg.src = "assets/player.png";

const bulletImg = new Image();
bulletImg.src = "assets/bullet.png";

const bgImg = new Image();
bgImg.src = "assets/buildings.png";

const countdownSound = new Audio("assets/sounds/countdown.mp3");
const bulletSound = new Audio("assets/sounds/bullet.mp3");
const bgMusic = new Audio("assets/sounds/background.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.2;
// Unlock audio on first user click
window.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
});

// ========== Sprites ==========
const zombieWalkFrames = [];
const zombieDeadFrames = [];
const zombieHurtFrames = [];

for (let i = 0; i <= 9; i++) {
  const img = new Image();
  img.src = `assets/zombies/walk/__Zombie01_Walk_00${i}.png`;
  zombieWalkFrames.push(img);
}
for (let i = 0; i <= 7; i++) {
  const img = new Image();
  img.src = `assets/zombies/dead/__Zombie01_Dead_00${i}.png`;
  zombieDeadFrames.push(img);
}
for (let i = 0; i <= 7; i++) {
  const img = new Image();
  img.src = `assets/zombies/hurt/__Zombie01_Hurt_00${i}.png`;
  zombieHurtFrames.push(img);
}

// ========== State ==========
let gameMode = "3waves"; // '3waves' or 'infinity'
let gameRunning = false;

let zombies = [];
let bullets = [];
let usedWords = [];

let animationFrame = 0;
let currentWordTarget = null;
let currentTyped = "";

let currentWave = 1;
let zombiesPerWave = 7;
let zombiesSpawned = 0;
let zombiesKilled = 0;
let waveCooldown = false;
let lastSpawnTime = 0;
let spawnInterval = 2800; // ms

let speedScale = 1; // Infinity scaling
let score = 0;

// Words
const wave1Words = ["run", "mad", "fear", "dead", "trap", "doom", "bite"];
const wave2Words = ["toxic", "panic", "zombie", "infect", "mutant", "strike", "crawl", "brain"];
const wave3Words = ["apocalypse", "contagion", "resistance", "nightmare", "outbreak", "quarantine", "darkness", "survivor", "infected", "chaos"];

// ========== UI: Menu Buttons ==========
playBtn.onclick = () => {
  mainMenu.classList.add("hidden");
  modeMenu.classList.remove("hidden");
};

backToMenuBtn.onclick = () => {
  modeMenu.classList.add("hidden");
  mainMenu.classList.remove("hidden");
};

exitBtn.onclick = () => {
  window.close(); // might be blocked by browser
  // Fallback:
  window.location.href = "about:blank";
};

play3WavesBtn.onclick = () => {
  gameMode = "3waves";
  scoreBoard.classList.add("hidden");
  prepareAndStart();
};

playInfinityBtn.onclick = () => {
  gameMode = "infinity";
  score = 0;
  scoreEl.textContent = "0";
  scoreBoard.classList.remove("hidden");
  prepareAndStart();
};

retryBtn && (retryBtn.onclick = () => {
  // Restart with the same mode
  gameOverScreen.classList.add("hidden");
  scoreEl && (scoreEl.textContent = "0");
  scoreBoard && (gameMode === "infinity" ? scoreBoard.classList.remove("hidden") : scoreBoard.classList.add("hidden"));
  prepareAndStart();
});

menuBtn && (menuBtn.onclick = () => window.location.reload());

// Helper to hide menus, show game, run countdown
function prepareAndStart() {
  modeMenu.classList.add("hidden");
  mainMenu.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  input.value = "";
  input.focus();
  resetGameState();
  startCountdown(() => {
    startGame();
  });
}


// ========= VICTORY SYSTEM =========
let victoryPlaying = false;

function triggerVictory() {
  if (victoryPlaying) return;
  victoryPlaying = true;

  // show overlay
  const vs = document.getElementById("victoryScreen");
  const va = document.getElementById("victoryAudio");
  if (vs) vs.classList.remove("hidden");

  // try to play victory audio once
  let played = false;
  if (va) {
    try {
      va.currentTime = 0;
      va.play().then(() => { played = true; }).catch(()=>{});
    } catch(e){}
  }

  // fallback short pleasant chime if audio didn't play
  setTimeout(() => {
    if (!played && typeof window.AudioContext !== "undefined") {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        // simple chord
        const freqs = [440, 660, 880];
        const now = ctx.currentTime;
        freqs.forEach((f, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "sine";
          o.frequency.setValueAtTime(f, now + i*0.02);
          g.gain.setValueAtTime(0.0001, now);
          g.gain.exponentialRampToValueAtTime(0.2, now + 0.05 + i*0.02);
          o.connect(g); g.connect(ctx.destination);
          o.start(now + i*0.02);
          o.stop(now + 0.7 + i*0.02);
        });
      } catch(e){}
    }
  }, 150);

  // Wire buttons
  const replayBtn = document.getElementById("victoryReplayBtn");
  const menuBtnLocal = document.getElementById("victoryMenuBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      // hide overlay
      if (vs) vs.classList.add("hidden");
      // reset flags & start game again
      victoryPlaying = false;
      // prepare and start (use existing flow)
      resetGameState();
      gameContainer.classList.remove("hidden");
      gameOverScreen.classList.add("hidden");
      startCountdown(() => { startGame(); });
    };
  }
  if (menuBtnLocal) {
    menuBtnLocal.onclick = () => {
      if (vs) vs.classList.add("hidden");
      victoryPlaying = false;
      // show main menu
      mainMenu.classList.remove("hidden");
      modeMenu.classList.add("hidden");
      gameContainer.classList.add("hidden");
      gameOverScreen.classList.add("hidden");
    };
  }
}
// ========== Countdown ==========

function startCountdown(callback) {
  let count = 3;
  countdownEl.classList.remove("hidden");

  const interval = setInterval(() => {
    if (count > 0) {
      countdownEl.textContent = count;
      countdownSound.currentTime = 0;
      countdownSound.play().catch(() => {});
      count--;
    } else if (count === 0) {
      countdownEl.textContent = "GO!";
      countdownSound.currentTime = 0;
      countdownSound.play().catch(() => {});
      count--;
    } else {
      clearInterval(interval);
      countdownEl.classList.add("hidden");
      countdownEl.textContent = "";
      if (callback) callback();
    }
  }, 1000);
}

// ========== Game Config ==========
function computeWaveConfig() {
  if (gameMode === "3waves") {
    if (currentWave === 1) { zombiesPerWave = 1; spawnInterval = 2800; }
    else if (currentWave === 2) { zombiesPerWave = 1; spawnInterval = 1800; }
    else if (currentWave === 3) { zombiesPerWave = 1; spawnInterval = 1200; }
  } else {
    // Infinity mode: gentle scaling based on wave
    zombiesPerWave = Math.min(8 + (currentWave - 1) * 2, 40);
    spawnInterval = Math.max(700, 2400 - (currentWave - 1) * 120);
    speedScale = 1 + (currentWave - 1) * 0.08;
  }
}

function getZombieSpeed(wave) {
  let base = 1.0;
  if (wave === 1) base = 0.3;
  else if (wave === 2) base = 0.6;
  else base = 1.0;
  return (gameMode === "infinity") ? base * speedScale : base;
}

// ========== Spawning ==========
function spawnZombie() {
  if (waveCooldown || zombiesSpawned >= zombiesPerWave) return;
  const now = Date.now();
  if (now - lastSpawnTime < spawnInterval) return;
  lastSpawnTime = now;

  const spawnX = -80;
  const spawnY = 360 + Math.random() * 60;
  const speed = getZombieSpeed(currentWave);

  let availableWords;
  if (gameMode === "3waves") {
    if (currentWave === 1) availableWords = wave1Words;
    else if (currentWave === 2) availableWords = wave2Words;
    else if (currentWave === 3) availableWords = wave3Words;
    else availableWords = wave3Words;
  } else {
    availableWords = [...wave1Words, ...wave2Words, ...wave3Words];
  }

  const unusedWords = availableWords.filter(w => !usedWords.includes(w));
  if (unusedWords.length === 0) return; // no unique words left for this wave
  const word = unusedWords[Math.floor(Math.random() * unusedWords.length)];
  usedWords.push(word);

  zombies.push({
    x: spawnX,
    y: spawnY,
    word,
    speed,
    dead: false,
    deathFrame: 0,
    hurtUntil: 0,
    typedLength: 0,
  });

  zombiesSpawned++;
}

// ========== Bullets ==========
function shootLetter(zombie) {
  bullets.push({
    x: 940,
    y: 400,
    speed: 20,
    target: zombie,
    hit: false,
  });
  bulletSound.currentTime = 0;
  bulletSound.play().catch(() => {});
}

function updateBullets() {
  bullets = bullets.filter((b) => {
    if (b.hit) return false;
    b.x -= b.speed;
    if (b.x <= b.target.x + 20) {
      b.hit = true;
      b.target.hurtUntil = Date.now() + 1000;
      return false;
    }
    return b.x >= -50;
  });
}

// ========== Zombies ==========
function updateZombies() {
  const now = Date.now();
  for (const z of zombies) {
    if (z.dead) continue;
    if (z.hurtUntil > now) continue;
    z.x += z.speed;

    // Reached player => game over
    if (z.x > canvas.width - 100) {
      // show jumpscare once, then end the game
      triggerJumpscare(endGame);
      return;
    }
  }

  // keep dead zombies only until death anim ends
  zombies = zombies.filter(z => !z.dead || z.deathFrame < zombieDeadFrames.length);
}

// ========== Draw ==========
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // background
  if (bgImg.complete) {
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // player
  ctx.drawImage(playerImg, 900, 360, 80, 100);

  const now = Date.now();
  for (const z of zombies) {
    let frame;
    if (z.dead) {
      frame = zombieDeadFrames[z.deathFrame] || zombieDeadFrames[zombieDeadFrames.length - 1];
      z.deathFrame++;
    } else if (z.hurtUntil > now) {
      frame = zombieHurtFrames[Math.floor(animationFrame / 4) % zombieHurtFrames.length];
    } else {
      frame = zombieWalkFrames[Math.floor(animationFrame / 6) % zombieWalkFrames.length];
    }
    ctx.drawImage(frame, z.x, z.y, 60, 80);

    // Word (typed + remaining)
    const typed = z.word.substring(0, z.typedLength);
    const rest = z.word.substring(z.typedLength);
    ctx.font = "16px monospace";
    ctx.fillStyle = "lime";
    ctx.fillText(typed, z.x + 5, z.y - 5);
    ctx.fillStyle = "white";
    ctx.fillText(rest, z.x + 5 + ctx.measureText(typed).width, z.y - 5);
  }

  // bullets
  for (const b of bullets) {
    ctx.drawImage(bulletImg, b.x, b.y, 25, 10);
  }

  // Score HUD for Infinity
  if (gameMode === "infinity") {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 20, 30);
  }
}

// ========== Waves ==========
function startNextWave() {
  waveCooldown = true;

  setTimeout(() => {
    currentWave++;

    if (gameMode === "3waves") {
      if (currentWave > 3) {
        // Win -> show victory
        gameContainer.classList.add("hidden");
        triggerVictory();
        return;
      }
    }

    // Recompute settings for new wave
    computeWaveConfig();

    // reset per-wave counters
    zombiesKilled = 0;
    zombiesSpawned = 0;
    usedWords = [];
    waveCooldown = false;
    showWaveBanner();
  }, 2000);
}

function showWaveBanner() {
  const banner = document.createElement("div");
  banner.textContent = `Wave ${currentWave}`;
  banner.style.position = "absolute";
  banner.style.top = "40%";
  banner.style.left = "50%";
  banner.style.transform = "translate(-50%, -50%)";
  banner.style.fontSize = "48px";
  banner.style.color = "white";
  banner.style.fontWeight = "bold";
  banner.style.textShadow = "2px 2px black";
  banner.style.zIndex = "50";
  document.body.appendChild(banner);
  setTimeout(() => document.body.removeChild(banner), 1600);
}

// ========== Loop & Lifecycle ==========
function gameLoop() {
  if (!gameRunning) return;

  if (!waveCooldown) spawnZombie();
  updateZombies();
  updateBullets();
  draw();

  animationFrame++;
  requestAnimationFrame(gameLoop);
}

function resetGameState() {
  zombies = [];
  bullets = [];
  usedWords = [];
  currentWordTarget = null;
  currentTyped = "";
  animationFrame = 0;

  currentWave = 1;
  zombiesKilled = 0;
  zombiesSpawned = 0;
  waveCooldown = false;
  lastSpawnTime = 0;

  // base config
  computeWaveConfig();

  // Infinity extras
  if (gameMode === "infinity") {
    score = 0;
    speedScale = 1;
    scoreEl && (scoreEl.textContent = "0");
  }
}

function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  showWaveBanner();
  gameLoop();
}

function endGame() {
  gameRunning = false;
  gameContainer.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
}

// ========== Typing Handler ==========
input.addEventListener("input", () => {
  const typed = input.value.trim().toLowerCase();

  if (!currentWordTarget) {
    // lock onto a zombie whose first letter matches
    const match = zombies.find(z => !z.dead && typed.startsWith(z.word[0]));
    if (match) {
      currentWordTarget = match;
      currentTyped = "";
    } else {
      input.value = "";
      return;
    }
  }

  const z = currentWordTarget;
  const expected = z.word;
  const nextChar = expected[z.typedLength];
  const typedChar = typed[z.typedLength];

  if (typedChar === nextChar) {
    z.typedLength++;
    currentTyped += typedChar;
    shootLetter(z);

    if (z.typedLength === expected.length) {
      z.dead = true;
      zombiesKilled++;

      if (gameMode === "infinity") {
        score++;
        scoreEl && (scoreEl.textContent = String(score));
      }

      currentWordTarget = null;
      currentTyped = "";
      input.value = "";

      if (zombiesKilled >= zombiesPerWave) {
        startNextWave();
      }
    }
  } else {
    // prevent typing wrong key
    input.value = currentTyped;
  }
});
