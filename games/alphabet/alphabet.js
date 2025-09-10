const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let currentIndex = 0;
let startTime, timerInterval;

const currentLetter = document.getElementById("current-letter");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const bestTimeDisplay = document.getElementById("best-time");
const resetBtn = document.getElementById("reset");

let bestTime = localStorage.getItem("bestAlphabetTime") || "--";
bestTimeDisplay.textContent = bestTime;

function startGame() {
  currentIndex = 0;
  currentLetter.textContent = letters[currentIndex];
  input.value = "";
  timeDisplay.textContent = "0.00";
  clearInterval(timerInterval);
  startTime = null;
}

input.addEventListener("input", () => {
  const value = input.value.toUpperCase();

  if (!startTime) {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
      timeDisplay.textContent = elapsed;
    }, 10);
  }

  if (value === letters[currentIndex]) {
    currentIndex++;
    input.value = "";

    if (currentIndex < letters.length) {
      currentLetter.textContent = letters[currentIndex];
    } else {
      clearInterval(timerInterval);
      const finalTime = parseFloat(((Date.now() - startTime) / 1000).toFixed(2));
      timeDisplay.textContent = finalTime;

      // Save best score
      if (bestTime === "--" || finalTime < parseFloat(bestTime)) {
        bestTime = finalTime;
        localStorage.setItem("bestAlphabetTime", bestTime);
        bestTimeDisplay.textContent = bestTime;
      }

      currentLetter.textContent = "✅ Done!";
    }
  }
});

resetBtn.addEventListener("click", startGame);

// Start on load
startGame();

