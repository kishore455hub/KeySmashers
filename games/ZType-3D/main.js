const a0_0x3c41ac = a0_0x5505;
(function(_0x544d49, _0x28dea0) {
    const _0x293f65 = a0_0x5505,
        _0x49de10 = _0x544d49();
    while (!![]) {
        try {
            const _0x385e11 = -parseInt(_0x293f65(0x13c)) / 0x1 * (parseInt(_0x293f65(0x10c)) / 0x2) + parseInt(_0x293f65(0x13e)) / 0x3 + -parseInt(_0x293f65(0x153)) / 0x4 + -parseInt(_0x293f65(0x13d)) / 0x5 * (parseInt(_0x293f65(0x130)) / 0x6) + parseInt(_0x293f65(0x169)) / 0x7 * (-parseInt(_0x293f65(0x191)) / 0x8) + parseInt(_0x293f65(0xcb)) / 0x9 + -parseInt(_0x293f65(0x107)) / 0xa * (-parseInt(_0x293f65(0xca)) / 0xb);
            if (_0x385e11 === _0x28dea0) break;
            else _0x49de10['push'](_0x49de10['shift']());
        } catch (_0x16f751) {
            _0x49de10['push'](_0x49de10['shift']());
        }
    }
}(a0_0x31ec, 0x81741));
const gameState = {
    'screen': a0_0x3c41ac(0x171),
    'score': 0x0,
    'phase': 0x1,
    'accuracy': 0x0,
    'wpm': 0x0,
    'lastWpmUpdate': 0x0,
    'characterCount': 0x0,
    'streak': 0x0,
    'longestStreak': 0x0,
    'totalTyped': 0x0,
    'correctTyped': 0x0,
    'lives': 0x3,
    'whiteFragmentHitCount': 0x0,
    'missedWords': [],
    'words': [],
    'activeWordIndex': -0x1,
    'currentInput': '',
    'settings': {
        'caseSensitive': !0x1,
        'punctuationEnabled': !0x1,
        'numbersEnabled': !0x1,
        'soundVolume': 0x4b,
        'musicVolume': 0x4b,
        'customText': '',
        'testingMode': !0x1,
        'showForemostTriangle': !0x0
    },
    'timeLastWordAdded': 0x0,
    'frameCount': 0x0,
    'paused': !0x1,
    'pauseStartTime': 0x0,
    'totalPausedTime': 0x0,
    'phaseTransitionStartTime': 0x0,
    'phaseTransitionTotalTime': 0x0,
    'gameOver': !0x1,
    'startTime': 0x0,
    'endTime': 0x0,
    'wordsDestroyed': 0x0,
    'missedWord': '',
    'gameOverReason': '',
    'phaseStartTime': 0x0,
    'asteroidsSpawned': 0x0,
    'pendingAsteroids': 0x0,
    'phaseTransitioning': !0x1,
    'gameOverEffects': {
        'particles': [],
        'animationFrame': null,
        'canvas': null,
        'ctx': null,
        'active': !0x1
    },
    'titleScene': null,
    'titleCamera': null,
    'titleRenderer': null,
    'titleStarField': [],
    'wpmAnimationInProgress': !0x1,
    'spawnTimeouts': [],
    'eventListeners': [],
    'currentMenuIndex': 0x0,
    'menuButtons': [],
    'gameOverMenuIndex': 0x0,
    'showBottomCenterWord': !0x0,
    'wpmActiveTime': 0x0,
    'wpmActiveStart': 0x0,
    'wpmStarted': !0x1,
    'debugMode': !0x1,
    'autobot': {
        'enabled': !0x1,
        'speed': 0x64,
        'timer': null
    },
    'updateActiveWordInterval': null,
    'enterDestroyCount': 0x3,
    'enterAbilityUsed': !0x1,
    'pendingPhaseStart': !0x1,
    'feedbackTextareaFocused': !0x1
};
let scene, camera, renderer, wordObjects = [],
    starField = [],
    particles = [],
    lastFrameTime = Date[a0_0x3c41ac(0x132)](),
    lastWordTime = 0x0,
    lastWPMUpdateTime = 0x0;
const baseWordSpawnInterval = 0x3e8;
let wordSpawnInterval = 0x3e8,
    lastMobileFrameTime = 0x0;

function debounce(_0x2e5441, _0x2058fa) {
    let _0x55304a;
    return function(..._0x3ca8a4) {
        clearTimeout(_0x55304a), _0x55304a = setTimeout(() => {
            clearTimeout(_0x55304a), _0x2e5441(..._0x3ca8a4);
        }, _0x2058fa);
    };
}
window[a0_0x3c41ac(0x184)] = gameState, window[a0_0x3c41ac(0xd7)] = wordObjects, window[a0_0x3c41ac(0x17f)] = scene, window[a0_0x3c41ac(0xd6)] = camera, window[a0_0x3c41ac(0x135)] = renderer;
const EventManager = {
    'listeners': [],
    'add': function(_0x524894, _0x3a8dba, _0x14011, _0x30d9f1) {
        const _0x344c91 = a0_0x3c41ac;
        if (!_0x524894) return null;
        _0x524894[_0x344c91(0x16e)](_0x3a8dba, _0x14011, _0x30d9f1);
        const _0x368a7f = {
            'element': _0x524894,
            'type': _0x3a8dba,
            'listener': _0x14011,
            'options': _0x30d9f1
        };
        return this[_0x344c91(0xd1)][_0x344c91(0xf3)](_0x368a7f), _0x368a7f;
    },
    'remove': function(_0x238dad) {
        const _0x5d1307 = a0_0x3c41ac;
        if (!_0x238dad || !_0x238dad[_0x5d1307(0x129)]) return;
        _0x238dad[_0x5d1307(0x129)][_0x5d1307(0x15b)](_0x238dad['type'], _0x238dad[_0x5d1307(0x160)], _0x238dad[_0x5d1307(0xf1)]);
        const _0x44a7c7 = this[_0x5d1307(0xd1)][_0x5d1307(0xc5)](_0x238dad); - 0x1 !== _0x44a7c7 && this['listeners'][_0x5d1307(0x190)](_0x44a7c7, 0x1);
    },
    'removeAll': function() {
        const _0x12a99c = a0_0x3c41ac;
        for (; this[_0x12a99c(0xd1)][_0x12a99c(0xec)] > 0x0;) this[_0x12a99c(0x116)](this[_0x12a99c(0xd1)][0x0]);
    },
    'removeByType': function(_0x4017fb) {
        const _0x3c8bd2 = a0_0x3c41ac;
        this[_0x3c8bd2(0xd1)][_0x3c8bd2(0x104)](_0x1664cd => _0x1664cd[_0x3c8bd2(0x18c)] === _0x4017fb)[_0x3c8bd2(0x141)](_0x40393b => this[_0x3c8bd2(0x116)](_0x40393b));
    }
};

function initTitleThreeJs() {
    const _0x393ad3 = a0_0x3c41ac;
    gameState['titleScene'] = new THREE[(_0x393ad3(0x18f))](), gameState['titleScene'][_0x393ad3(0xee)] = new THREE[(_0x393ad3(0x14f))](0x0, 0.001);
    const _0x4c0fa0 = window['innerWidth'] / window['innerHeight'];
    gameState[_0x393ad3(0x162)] = new THREE[(_0x393ad3(0xd2))](0x4b, _0x4c0fa0, 0.1, 0x3e8), gameState[_0x393ad3(0x162)][_0x393ad3(0xe6)]['z'] = 0x1e, gameState[_0x393ad3(0x168)] = new THREE['WebGLRenderer']({
        'canvas': document[_0x393ad3(0x111)](_0x393ad3(0x121)),
        'antialias': !0x0,
        'alpha': !0x0
    }), gameState['titleRenderer'][_0x393ad3(0x173)](window[_0x393ad3(0x143)]), gameState[_0x393ad3(0x168)][_0x393ad3(0xf6)](window[_0x393ad3(0x122)], window['innerHeight']), gameState['titleRenderer'][_0x393ad3(0xef)](0x0, 0x0), createTitleStarField(), window[_0x393ad3(0x16e)](_0x393ad3(0x10f), () => {
        const _0x2feb42 = _0x393ad3,
            _0x4cd6cc = window['innerWidth'],
            _0x29210f = window['innerHeight'];
        gameState[_0x2feb42(0x168)][_0x2feb42(0x173)](window[_0x2feb42(0x143)]), gameState[_0x2feb42(0x168)][_0x2feb42(0xf6)](_0x4cd6cc, _0x29210f), gameState['titleCamera']['aspect'] = _0x4cd6cc / _0x29210f, gameState[_0x2feb42(0x162)][_0x2feb42(0x11f)](), gameState[_0x2feb42(0x11c)] && gameState['titleStarField'][_0x2feb42(0xec)] > 0x0 && (gameState['titleStarField'][_0x2feb42(0x141)](_0x23d4d1 => {
            const _0x1939c0 = _0x2feb42;
            gameState[_0x1939c0(0x17b)] && gameState['titleScene'][_0x1939c0(0x116)](_0x23d4d1);
        }), gameState[_0x2feb42(0x11c)] = [], createTitleStarField());
    });
}

function createTitleStarField() {
    const _0x10e927 = a0_0x3c41ac,
        _0x104605 = window['innerWidth'],
        _0x4f4275 = window[_0x10e927(0x125)],
        _0x20b11b = gameState['titleRenderer'] && gameState[_0x10e927(0x168)][_0x10e927(0x13b)] ? gameState[_0x10e927(0x168)][_0x10e927(0x13b)]() : window[_0x10e927(0x143)],
        _0x9daf50 = Math['sqrt'](_0x104605 * _0x4f4275) * _0x20b11b / 0x3e8,
        _0x3d03dd = 0.25 * Math[_0x10e927(0x128)](0.5, Math['min'](1.5, _0x9daf50)),
        _0x310895 = new THREE['BufferGeometry'](),
        _0x55b234 = new THREE['PointsMaterial']({
            'color': 0xffffff,
            'size': _0x3d03dd,
            'transparent': !0x0,
            'opacity': 0x1
        }),
        _0x59604e = [];
    let _0xb9663a = 0x3e8;
    _0x10e927(0x170) == typeof isMobileOrTablet && isMobileOrTablet() && (_0xb9663a = 0x708);
    const _0x43a644 = Math['floor'](_0xb9663a * _0x20b11b * Math['max'](0.7, Math[_0x10e927(0xd5)](1.5, _0x9daf50))),
        _0x487cd0 = _0x104605 / _0x4f4275,
        _0x314d8f = 0x7d0 * Math[_0x10e927(0x128)](0x1, _0x487cd0),
        _0x985e40 = 0x7d0 * Math[_0x10e927(0x128)](0x1, 0x1 / _0x487cd0);
    let _0x35ab24 = 0x7d0;
    _0x10e927(0x170) == typeof isMobileOrTablet && isMobileOrTablet() && (_0x35ab24 = 0x320);
    for (let _0x152bcb = 0x0; _0x152bcb < _0x43a644; _0x152bcb++) {
        const _0x3f47cb = (Math[_0x10e927(0xcc)]() - 0.5) * _0x314d8f,
            _0x7bb3ea = (Math[_0x10e927(0xcc)]() - 0.5) * _0x985e40,
            _0x132338 = Math[_0x10e927(0xcc)]() * _0x35ab24 - _0x35ab24 / 0x2;
        _0x59604e['push'](_0x3f47cb, _0x7bb3ea, _0x132338);
    }
    _0x310895[_0x10e927(0x150)](_0x10e927(0xe6), new THREE[(_0x10e927(0x12d))](_0x59604e, 0x3));
    const _0x22468c = new THREE['Points'](_0x310895, _0x55b234);
    gameState[_0x10e927(0x17b)][_0x10e927(0x176)](_0x22468c), gameState[_0x10e927(0x11c)][_0x10e927(0xf3)](_0x22468c), _0x22468c[_0x10e927(0x17a)][_0x10e927(0x11d)] = {
        'width': _0x314d8f,
        'height': _0x985e40,
        'depth': _0x35ab24
    };
}

function animateTitleStarField() {
    const _0x2ccb63 = a0_0x3c41ac;
    gameState[_0x2ccb63(0x11c)][_0x2ccb63(0xec)] && gameState[_0x2ccb63(0x11c)][_0x2ccb63(0x141)](_0x2329a0 => {
        const _0xabfce = _0x2ccb63,
            _0x166f47 = _0x2329a0[_0xabfce(0xf2)][_0xabfce(0xff)]['position'][_0xabfce(0xed)],
            _0x2fcd2e = _0x2329a0[_0xabfce(0x17a)][_0xabfce(0x11d)] || {
                'width': 0x7d0,
                'height': 0x7d0,
                'depth': 0x7d0
            },
            _0x1ae573 = 0.3 * (_0x2fcd2e[_0xabfce(0xe7)] / 0x7d0);
        for (let _0xced2eb = 0x0; _0xced2eb < _0x166f47['length']; _0xced2eb += 0x3) _0x166f47[_0xced2eb + 0x2] += _0x1ae573, _0x166f47[_0xced2eb + 0x2] > 0x0 && (_0x166f47[_0xced2eb] = (Math[_0xabfce(0xcc)]() - 0.5) * _0x2fcd2e[_0xabfce(0x100)], _0x166f47[_0xced2eb + 0x1] = (Math[_0xabfce(0xcc)]() - 0.5) * _0x2fcd2e[_0xabfce(0x192)], _0x166f47[_0xced2eb + 0x2] = -_0x2fcd2e[_0xabfce(0xe7)] / 0x2);
        _0x2329a0[_0xabfce(0xf2)]['attributes']['position'][_0xabfce(0x140)] = !0x0;
    });
}

function preloadScreens() {
    const _0xaf0c45 = a0_0x3c41ac;
    document[_0xaf0c45(0xe3)](_0xaf0c45(0x152))[_0xaf0c45(0x141)](_0x404998 => {}), [{
        'id': _0xaf0c45(0x110),
        'name': _0xaf0c45(0x171)
    }, {
        'id': _0xaf0c45(0x101),
        'name': _0xaf0c45(0x164)
    }, {
        'id': _0xaf0c45(0x15f),
        'name': _0xaf0c45(0xf5)
    }, {
        'id': _0xaf0c45(0x154),
        'name': 'settings'
    }][_0xaf0c45(0x141)](_0x5e1d18 => {
        const _0x3073e9 = _0xaf0c45;
        document[_0x3073e9(0x111)](_0x5e1d18['id']) || _0x3073e9(0x171) !== _0x5e1d18[_0x3073e9(0x10a)] && _0x3073e9(0x164) !== _0x5e1d18[_0x3073e9(0x10a)] && 'gameOver' !== _0x5e1d18[_0x3073e9(0x10a)] || createMissingScreen(_0x5e1d18['id']);
    });
}

function createMissingScreen(_0x3bf87c) {
    const _0x82320c = a0_0x3c41ac,
        _0x453eee = document[_0x82320c(0x111)](_0x82320c(0xc4));
    if (!_0x453eee) return;
    let _0x1b4876;
    switch (_0x3bf87c) {
        case 'game-screen':
            _0x1b4876 = document[_0x82320c(0x161)](_0x82320c(0xe0)), _0x1b4876['id'] = 'game-screen', _0x1b4876[_0x82320c(0xdd)] = _0x82320c(0xc3), _0x1b4876[_0x82320c(0x198)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-ui\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22score-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>SCORE</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22score\x22\x20class=\x22stat-value\x22>000000</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>WAVE</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wave\x22\x20class=\x22stat-value\x22>001</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22typing-input-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22word-spaceship\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spaceship-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spaceship\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spaceship-body\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spaceship-wing\x20left-wing\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spaceship-wing\x20right-wing\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spaceship-thruster\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22current-word\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22stats-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>ACCURACY</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22accuracy\x22\x20class=\x22stat-value\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>STREAK</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22streak\x22\x20class=\x22stat-value\x22>0</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>WPM</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22wpm\x22\x20class=\x22stat-value\x22>0</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22pause-button\x22\x20class=\x22icon-button\x22>||</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-canvas-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22game-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            break;
        case _0x82320c(0x15f):
            _0x1b4876 = document[_0x82320c(0x161)](_0x82320c(0xe0)), _0x1b4876['id'] = 'game-over-screen', _0x1b4876[_0x82320c(0xdd)] = _0x82320c(0xc3), _0x1b4876[_0x82320c(0x198)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2>GAME\x20OVER</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-grade\x22\x20class=\x22grade-display\x22>A+</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stats-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>FINAL\x20SCORE</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22final-score\x22\x20class=\x22stat-value\x22>000000</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>YOU\x20REACHED</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22final-wave\x22\x20class=\x22stat-value\x22>WAVE\x20001</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>ACCURACY</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22final-accuracy\x22\x20class=\x22stat-value\x22>0%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>LONGEST\x20STREAK</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22final-streak\x22\x20class=\x22stat-value\x22>0</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>TYPING\x20SPEED</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22final-wpm\x22\x20class=\x22stat-value\x22>0\x20WPM</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>WORDS\x20TYPED</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22final-words-destroyed\x22\x20class=\x22stat-value\x22>0</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>TIME\x20SURVIVED</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22final-playtime\x22\x20class=\x22stat-value\x22>00:00</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22missed-word-container\x22\x20class=\x22stat-row\x20missed-word-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>MISSED\x20WORD</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22missed-word\x22\x20class=\x22stat-value\x20missed-word-value\x22>-</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22performance-message\x22\x20class=\x22performance-message\x22>IMPRESSIVE\x20TYPING\x20SKILLS!</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22button-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22play-again\x22\x20class=\x22glow-button\x22>play\x20again</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22back-to-title\x22\x20class=\x22glow-button\x22>back\x20to\x20title</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-over-canvas-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<canvas\x20id=\x22game-over-canvas\x22></canvas>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            break;
        default:
            return;
    }
    _0x1b4876 && (_0x453eee[_0x82320c(0xd8)](_0x1b4876), setupEventListeners());
}

function addTrackedEventListener(_0x5b467d, _0xd43ec4, _0x442322, _0x4879c5) {
    if (!_0x5b467d) return;
    const _0x364755 = function(..._0xf8f8da) {
        return _0x442322['apply'](this, _0xf8f8da);
    };
    return _0x5b467d['addEventListener'](_0xd43ec4, _0x364755, _0x4879c5), gameState['eventListeners']['push']({
        'element': _0x5b467d,
        'type': _0xd43ec4,
        'listener': _0x364755,
        'options': _0x4879c5
    }), _0x364755;
}

function removeAllTrackedEventListeners() {
    const _0x48d651 = a0_0x3c41ac;
    for (; gameState[_0x48d651(0x186)][_0x48d651(0xec)] > 0x0;) {
        const {
            element: _0xf700ed,
            type: _0x12c5ff,
            listener: _0xa3801f,
            options: _0xcceff0
        } = gameState[_0x48d651(0x186)][_0x48d651(0xc8)]();
        _0xf700ed && _0xf700ed[_0x48d651(0x15b)](_0x12c5ff, _0xa3801f, _0xcceff0);
    }
}

function setupEventListeners() {
    const _0xc25be8 = a0_0x3c41ac;
    EventManager[_0xc25be8(0xd4)](), EventManager[_0xc25be8(0x176)](document, _0xc25be8(0x108), handleKeydown);
    const _0x4fd6a6 = gameState['screen'];
    if ('title' === _0x4fd6a6) {
        const _0x5043d9 = document[_0xc25be8(0x111)](_0xc25be8(0x131));
        _0x5043d9 && EventManager[_0xc25be8(0x176)](_0x5043d9, 'click', function() {
            resetGame(), setTimeout(() => {
                startGame();
            }, 0x64);
        });
        const _0x16bfea = document['getElementById'](_0xc25be8(0x194));
        _0x16bfea && EventManager[_0xc25be8(0x176)](_0x16bfea, _0xc25be8(0x157), () => setScreen(_0xc25be8(0xc1)));
        const _0x5fd3bd = document[_0xc25be8(0x111)]('grade-info-title-button');
        _0x5fd3bd && EventManager['add'](_0x5fd3bd, _0xc25be8(0x157), () => setScreen('gradeInfo'));
        const _0x538da0 = document[_0xc25be8(0x111)]('info-button');
        _0x538da0 && EventManager['add'](_0x538da0, _0xc25be8(0x157), () => setScreen(_0xc25be8(0x178)));
    } else {
        if (_0xc25be8(0x164) === _0x4fd6a6) {
            const _0x4cad46 = document[_0xc25be8(0x111)](_0xc25be8(0x124));
            _0x4cad46 && EventManager[_0xc25be8(0x176)](_0x4cad46, _0xc25be8(0x157), togglePause);
        } else {
            if (_0xc25be8(0xf5) === _0x4fd6a6) {
                const _0x3fc0ac = document[_0xc25be8(0x111)](_0xc25be8(0x137));
                _0x3fc0ac && EventManager['add'](_0x3fc0ac, _0xc25be8(0x157), function() {
                    resetGame(), setTimeout(() => {
                        startGame();
                    }, 0x64);
                });
                const _0x339c1e = document[_0xc25be8(0x111)](_0xc25be8(0xde));
                _0x339c1e && EventManager['add'](_0x339c1e, _0xc25be8(0x157), function() {
                    resetGame(), setTimeout(() => {
                        const _0x16657a = a0_0x5505;
                        setScreen(_0x16657a(0x171));
                    }, 0x64);
                });
            } else {
                if ('settings' === _0x4fd6a6) {
                    const _0x5c72e1 = document[_0xc25be8(0x111)](_0xc25be8(0x12c));
                    _0x5c72e1 && EventManager[_0xc25be8(0x176)](_0x5c72e1, _0xc25be8(0x157), () => setScreen(_0xc25be8(0x171)));
                    const _0x35e878 = document['getElementById'](_0xc25be8(0x193));
                    _0x35e878 && EventManager[_0xc25be8(0x176)](_0x35e878, 'input', updateVolume);
                    const _0xc2c843 = document[_0xc25be8(0x111)](_0xc25be8(0x127));
                    _0xc2c843 && EventManager[_0xc25be8(0x176)](_0xc2c843, _0xc25be8(0x147), updateMusicVolume);
                    const _0x2c1f21 = document[_0xc25be8(0x111)](_0xc25be8(0x195));
                    _0x2c1f21 && EventManager[_0xc25be8(0x176)](_0x2c1f21, _0xc25be8(0x102), _0x4dbede => {
                        const _0x39022d = _0xc25be8;
                        gameState[_0x39022d(0xc1)]['caseSensitive'] = _0x4dbede[_0x39022d(0x117)][_0x39022d(0x139)];
                    });
                    const _0x5616fc = document[_0xc25be8(0x111)](_0xc25be8(0xfa));
                    _0x5616fc && EventManager[_0xc25be8(0x176)](_0x5616fc, _0xc25be8(0x102), _0x3d946f => {
                        const _0x2079a3 = _0xc25be8;
                        gameState[_0x2079a3(0xc1)][_0x2079a3(0xe5)] = _0x3d946f[_0x2079a3(0x117)][_0x2079a3(0x139)];
                    });
                    const _0x199abd = document[_0xc25be8(0x111)](_0xc25be8(0x181));
                    _0x199abd && EventManager['add'](_0x199abd, 'change', _0x2cb636 => {
                        const _0x5788e7 = _0xc25be8;
                        gameState[_0x5788e7(0xc1)][_0x5788e7(0x106)] = _0x2cb636['target'][_0x5788e7(0x139)];
                    });
                    const _0x587588 = document['getElementById'](_0xc25be8(0xe2));
                    _0x587588 && EventManager[_0xc25be8(0x176)](_0x587588, _0xc25be8(0x102), _0xbd3cb => {
                        const _0x48eeda = _0xc25be8;
                        gameState['settings'][_0x48eeda(0x182)] = _0xbd3cb[_0x48eeda(0x117)][_0x48eeda(0x139)];
                    }), setupBottomCenterWordSetting();
                } else {
                    if (_0xc25be8(0x188) === _0x4fd6a6) {
                        const _0x25c5cc = document['getElementById']('grade-info-back');
                        _0x25c5cc && EventManager['add'](_0x25c5cc, _0xc25be8(0x157), () => setScreen(_0xc25be8(0x171)));
                    } else {
                        if (_0xc25be8(0x178) === _0x4fd6a6) {
                            const _0x585bad = document[_0xc25be8(0x111)](_0xc25be8(0xda));
                            _0x585bad && EventManager[_0xc25be8(0x176)](_0x585bad, _0xc25be8(0x157), () => setScreen('title'));
                        } else {
                            if (_0xc25be8(0xbf) === _0x4fd6a6) {
                                const _0x40fae2 = document[_0xc25be8(0x111)](_0xc25be8(0xc0));
                                _0x40fae2 && EventManager[_0xc25be8(0x176)](_0x40fae2, _0xc25be8(0x157), () => {
                                    const _0x2ee3c7 = _0xc25be8;
                                    gameState[_0x2ee3c7(0x10e)] && togglePause();
                                });
                                const _0x336419 = document[_0xc25be8(0x111)](_0xc25be8(0x15d));
                                _0x336419 && EventManager[_0xc25be8(0x176)](_0x336419, _0xc25be8(0x157), () => {
                                    const _0x5de279 = _0xc25be8;
                                    gameState['paused'] && (gameState[_0x5de279(0x10e)] = !0x1), resetGame(), setTimeout(() => {
                                        const _0x8d3b04 = _0x5de279;
                                        setScreen(_0x8d3b04(0x171));
                                    }, 0x64);
                                });
                                const _0x3e8c28 = document[_0xc25be8(0x111)](_0xc25be8(0xd9));
                                _0x3e8c28 && EventManager['add'](_0x3e8c28, 'input', function() {
                                    const _0x2504d7 = _0xc25be8,
                                        _0x2333de = parseInt(_0x3e8c28[_0x2504d7(0x144)]);
                                    gameState[_0x2504d7(0xc1)]['soundVolume'] = _0x2333de;
                                    const _0x1cc90e = document['getElementById'](_0x2504d7(0x185));
                                    _0x1cc90e && (_0x1cc90e['textContent'] = _0x2333de + '%'), soundsManager[_0x2504d7(0x15e)](_0x2333de);
                                });
                                const _0x573f86 = document[_0xc25be8(0x111)](_0xc25be8(0x14a));
                                _0x573f86 && EventManager['add'](_0x573f86, 'input', function() {
                                    const _0x1863fa = _0xc25be8,
                                        _0x2f4885 = parseInt(_0x573f86[_0x1863fa(0x144)]);
                                    gameState[_0x1863fa(0xc1)][_0x1863fa(0x13f)] = _0x2f4885;
                                    const _0x30e451 = document['getElementById'](_0x1863fa(0x11e));
                                    _0x30e451 && (_0x30e451[_0x1863fa(0xe1)] = _0x2f4885 + '%'), soundsManager['updateMusicVolume'](_0x2f4885);
                                });
                            }
                        }
                    }
                }
            }
        }
    }
}

function a0_0x31ec() {
    const _0x352e9a = ['title-screen', 'getElementById', 'missedWords', 'lifetime', 'rotation', 'isSpecial', 'remove', 'target', 'touchend', 'multiplyScalar', 'none', 'missedWord', 'titleStarField', 'fieldDimensions', 'pause-music-value', 'updateProjectionMatrix', 'borderRadius', 'title-canvas', 'innerWidth', 'Loading\x20...\x20', 'pause-button', 'innerHeight', 'mousedown', 'music-volume', 'max', 'element', 'DOMContentLoaded', 'animationFrame', 'settings-back', 'Float32BufferAttribute', 'backgroundColor', 'blur', '480hIXMum', 'start-button', 'now', 'collision_to_ship', 'lives', 'renderer', '100', 'play-again', '0.8rem', 'checked', 'offsetLeft', 'getPixelRatio', '942411oKfqig', '24950cDQlIE', '1176246gPOUKq', 'musicVolume', 'needsUpdate', 'forEach', 'display', 'devicePixelRatio', 'value', 'WebGLRenderer', 'sqrt', 'input', 'copy', 'progress-bg', 'pause-music-volume', 'setScreen', 'mini', 'originalPosition', 'velocity', 'FogExp2', 'setAttribute', 'mesh', '.screen', '3252112RRfYZv', 'settings-screen', 'opacity', 'activeWordIndex', 'click', 'classList', 'PointsMaterial', 'size', 'removeEventListener', 'rotationSpeed', 'pause-back-to-title', 'updateSoundVolume', 'game-over-screen', 'listener', 'createElement', 'titleCamera', 'medium-large', 'game', 'special', 'auto', 'BufferGeometry', 'titleRenderer', '133CkbBnc', 'phaseTransitioning', 'textContainer', 'DirectionalLight', 'pow', 'addEventListener', 'querySelector', 'function', 'title', 'fade-out', 'setPixelRatio', 'absolute', 'small', 'add', 'totalPausedTime', 'info', 'padding', 'userData', 'titleScene', 'material', 'Points', 'left', 'scene', 'temp-dom', 'numbers-enabled', 'testingMode', 'Orbitron,\x20sans-serif', 'gameState', 'pause-volume-value', 'eventListeners', 'hard_special', 'gradeInfo', 'textSprite', '10px', 'zIndex', 'type', 'dispatchEvent', '5px\x2010px', 'Scene', 'splice', '336192hKFEXz', 'height', 'sound-volume', 'settings-button', 'case-sensitive', 'test', 'set', 'innerHTML', 'isFragment', 'clone', 'screen', 'color', 'pause', 'resume-button', 'settings', 'touchstart', 'screen\x20hidden', 'game-container', 'indexOf', 'game-canvas', 'words', 'pop', 'whiteFragmentHitCount', '916883etaKiA', '1565091OocgQx', 'random', 'isMiniAlphabet', 'loader-text', 'word', 'userAgent', 'listeners', 'PerspectiveCamera', 'scale', 'removeAll', 'min', 'camera', 'wordObjects', 'appendChild', 'pause-sound-volume', 'info-back', 'large', 'distanceTo', 'className', 'back-to-title', 'focus', 'div', 'textContent', 'testing-mode', 'querySelectorAll', 'dispose', 'punctuationEnabled', 'position', 'depth', 'soundVolume', 'preventDefault', 'top', 'gameOverReason', 'length', 'array', 'fog', 'setClearColor', 'phaseStartTime', 'options', 'geometry', 'push', 'round', 'gameOver', 'setSize', 'updateMusicVolume', 'testing-mode-indicator', 'hidden', 'punctuation-enabled', 'white', 'TESTING\x20MODE', 'loader-overlay', 'age', 'attributes', 'width', 'game-screen', 'change', 'style', 'filter', 'quaternion', 'numbersEnabled', '350ctNLSt', 'keydown', 'render', 'name', 'hit', '2YrgRcg', 'hitTime', 'paused', 'resize'];
    a0_0x31ec = function() {
        return _0x352e9a;
    };
    return a0_0x31ec();
}

function initThreeJs() {
    const _0x331176 = a0_0x3c41ac;
    scene = new THREE[(_0x331176(0x18f))](), scene['fog'] = new THREE[(_0x331176(0x14f))](0x0, 0.001);
    const _0x4e8914 = window[_0x331176(0x122)] / window[_0x331176(0x125)];
    camera = new THREE[(_0x331176(0xd2))](0x4b, _0x4e8914, 0.1, 0x3e8), camera[_0x331176(0xe6)]['z'] = 0x1e, renderer = new THREE[(_0x331176(0x145))]({
        'canvas': document[_0x331176(0x111)](_0x331176(0xc6)),
        'antialias': !0x0,
        'alpha': !0x0
    }), renderer[_0x331176(0x173)](window[_0x331176(0x143)]), renderer[_0x331176(0xf6)](window[_0x331176(0x122)], window['innerHeight']), renderer['setClearColor'](0x0, 0x0);
    const _0x4dd474 = new THREE['AmbientLight'](0x404040, 0.5);
    scene['add'](_0x4dd474);
    const _0x1685e9 = new THREE[(_0x331176(0x16c))](0x30ffea, 0x1);
    _0x1685e9[_0x331176(0xe6)][_0x331176(0x197)](0x0, 0x1, 0x1), scene[_0x331176(0x176)](_0x1685e9), createStarField(), window['addEventListener']('resize', () => {
        const _0xa9074f = _0x331176,
            _0x2e7c6e = window[_0xa9074f(0x122)],
            _0x5617b7 = window[_0xa9074f(0x125)];
        renderer[_0xa9074f(0x173)](window[_0xa9074f(0x143)]), renderer[_0xa9074f(0xf6)](_0x2e7c6e, _0x5617b7), camera['aspect'] = _0x2e7c6e / _0x5617b7, camera[_0xa9074f(0x11f)](), starField && starField['length'] > 0x0 && (starField[_0xa9074f(0x141)](_0x5df85c => {
            scene && scene['remove'](_0x5df85c);
        }), starField = [], createStarField());
    });
}

function createStarField() {
    const _0xab606 = a0_0x3c41ac,
        _0x5a5dde = window['innerWidth'],
        _0x43fd30 = window[_0xab606(0x125)],
        _0x23b924 = renderer && renderer['getPixelRatio'] ? renderer[_0xab606(0x13b)]() : window[_0xab606(0x143)],
        _0x4b576a = Math[_0xab606(0x146)](_0x5a5dde * _0x43fd30) * _0x23b924 / 0x3e8,
        _0x4c789e = 0.25 * Math[_0xab606(0x128)](0.5, Math[_0xab606(0xd5)](1.5, _0x4b576a)),
        _0x35e031 = new THREE[(_0xab606(0x167))](),
        _0x18322e = new THREE[(_0xab606(0x159))]({
            'color': 0xffffff,
            'size': _0x4c789e,
            'transparent': !0x0,
            'opacity': 0x1
        }),
        _0x5a844c = [];
    let _0x14da33 = 0x3e8;
    _0xab606(0x170) == typeof isMobileOrTablet && isMobileOrTablet() && (_0x14da33 = 0x708);
    const _0x2bd5f4 = Math['floor'](_0x14da33 * _0x23b924 * Math[_0xab606(0x128)](0.7, Math['min'](1.5, _0x4b576a))),
        _0x167782 = _0x5a5dde / _0x43fd30,
        _0x4e8251 = 0x7d0 * Math['max'](0x1, _0x167782),
        _0x42f70d = 0x7d0 * Math['max'](0x1, 0x1 / _0x167782);
    let _0x5f3a0e = 0x7d0;
    _0xab606(0x170) == typeof isMobileOrTablet && isMobileOrTablet() && (_0x5f3a0e = 0x320);
    for (let _0x169c22 = 0x0; _0x169c22 < _0x2bd5f4; _0x169c22++) {
        const _0x94fbe0 = (Math['random']() - 0.5) * _0x4e8251,
            _0x250355 = (Math[_0xab606(0xcc)]() - 0.5) * _0x42f70d,
            _0x4c483a = Math[_0xab606(0xcc)]() * _0x5f3a0e - _0x5f3a0e / 0x2;
        _0x5a844c['push'](_0x94fbe0, _0x250355, _0x4c483a);
    }
    _0x35e031[_0xab606(0x150)](_0xab606(0xe6), new THREE[(_0xab606(0x12d))](_0x5a844c, 0x3));
    const _0x30cb26 = new THREE[(_0xab606(0x17d))](_0x35e031, _0x18322e);
    scene[_0xab606(0x176)](_0x30cb26), starField[_0xab606(0xf3)](_0x30cb26), _0x30cb26[_0xab606(0x17a)][_0xab606(0x11d)] = {
        'width': _0x4e8251,
        'height': _0x42f70d,
        'depth': _0x5f3a0e
    };
}

function animate() {
    const _0x4546f3 = a0_0x3c41ac,
        _0xc67f1c = Date[_0x4546f3(0x132)](),
        _0x5cf005 = gameState[_0x4546f3(0x10e)] ? 0x0 : (_0xc67f1c - lastFrameTime) / 0x3e8;
    if (lastFrameTime = _0xc67f1c, _0x4546f3(0x171) === gameState['screen'] && gameState[_0x4546f3(0x17b)] && gameState[_0x4546f3(0x168)] && (animateTitleStarField(), gameState[_0x4546f3(0x168)][_0x4546f3(0x109)](gameState[_0x4546f3(0x17b)], gameState[_0x4546f3(0x162)])), _0x4546f3(0x164) === gameState[_0x4546f3(0xbd)]) {
        if (gameState[_0x4546f3(0xf5)]) return renderer[_0x4546f3(0x109)](scene, camera), void(gameState[_0x4546f3(0x12b)] = requestAnimationFrame(animate));
        const _0x37bb5b = document[_0x4546f3(0x111)](_0x4546f3(0xf8));
        if (gameState['settings'][_0x4546f3(0x182)]) {
            if (!_0x37bb5b) {
                const _0x4dfd7b = document['createElement'](_0x4546f3(0xe0));
                _0x4dfd7b['id'] = _0x4546f3(0xf8), _0x4dfd7b[_0x4546f3(0x158)][_0x4546f3(0x176)](_0x4546f3(0x180)), _0x4dfd7b['style'][_0x4546f3(0xe6)] = _0x4546f3(0x174), _0x4dfd7b['style'][_0x4546f3(0xea)] = _0x4546f3(0x18a), _0x4dfd7b[_0x4546f3(0x103)]['right'] = _0x4546f3(0x18a), _0x4dfd7b[_0x4546f3(0x103)][_0x4546f3(0x12e)] = 'rgba(255,\x20100,\x200,\x200.8)', _0x4dfd7b[_0x4546f3(0x103)][_0x4546f3(0xbe)] = _0x4546f3(0xfb), _0x4dfd7b[_0x4546f3(0x103)][_0x4546f3(0x179)] = _0x4546f3(0x18e), _0x4dfd7b[_0x4546f3(0x103)][_0x4546f3(0x120)] = '5px', _0x4dfd7b['style']['fontFamily'] = _0x4546f3(0x183), _0x4dfd7b[_0x4546f3(0x103)]['fontSize'] = _0x4546f3(0x138), _0x4dfd7b['style'][_0x4546f3(0x18b)] = _0x4546f3(0x136), _0x4dfd7b['style']['pointerEvents'] = _0x4546f3(0x11a), _0x4dfd7b[_0x4546f3(0xe1)] = _0x4546f3(0xfc), document['getElementById'](_0x4546f3(0xc4))[_0x4546f3(0xd8)](_0x4dfd7b);
            }
        } else _0x37bb5b && _0x37bb5b[_0x4546f3(0x116)]();
        !gameState[_0x4546f3(0x10e)] && (!gameState[_0x4546f3(0x16a)] && 0x0 === gameState[_0x4546f3(0xc7)][_0x4546f3(0xec)] && 0x0 === gameState['pendingAsteroids'] && (_0xc67f1c - gameState[_0x4546f3(0xf0)] - gameState[_0x4546f3(0x177)] > 0x1388 && checkForPhaseTransition()), updateGame(), updateParticles(_0x5cf005), animateWordObjects(), animateStarField()), renderer['render'](scene, camera);
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i [_0x4546f3(0x196)](navigator[_0x4546f3(0xd0)]) || window['innerWidth'] <= 0x384) {
        const _0x5d71df = 0x3e8 / 0x1e,
            _0x208b26 = Date['now'](),
            _0x50059e = _0x208b26 - lastMobileFrameTime;
        if (_0x50059e < _0x5d71df) return void setTimeout(() => {
            const _0x4e8d98 = _0x4546f3;
            gameState[_0x4e8d98(0x12b)] = requestAnimationFrame(animate);
        }, _0x5d71df - _0x50059e);
        lastMobileFrameTime = _0x208b26, gameState[_0x4546f3(0x12b)] = requestAnimationFrame(animate);
    } else gameState[_0x4546f3(0x12b)] = requestAnimationFrame(animate);
}

function updateParticles(_0x2ac0fe) {
    const _0x2930df = a0_0x3c41ac;
    if (gameState[_0x2930df(0x10e)]) return;
    const _0x454bc0 = Date[_0x2930df(0x132)]();
    for (let _0x284d8e = particles[_0x2930df(0xec)] - 0x1; _0x284d8e >= 0x0; _0x284d8e--) {
        const _0xfa9106 = particles[_0x284d8e];
        if (_0xfa9106[_0x2930df(0x17a)]['age'] += 0x3e8 * _0x2ac0fe, _0xfa9106[_0x2930df(0x17a)][_0x2930df(0xfe)] >= _0xfa9106[_0x2930df(0x17a)][_0x2930df(0x113)]) {
            scene[_0x2930df(0x116)](_0xfa9106), particles[_0x2930df(0x190)](_0x284d8e, 0x1);
            continue;
        }
        const _0x4c1096 = _0xfa9106[_0x2930df(0x17a)][_0x2930df(0x14e)][_0x2930df(0xbc)]();
        _0xfa9106[_0x2930df(0xe6)][_0x2930df(0x176)](_0x4c1096[_0x2930df(0x119)](_0x2ac0fe));
        const _0x16672b = _0xfa9106['userData']['age'] / _0xfa9106[_0x2930df(0x17a)]['lifetime'];
        _0xfa9106[_0x2930df(0xd3)][_0x2930df(0x197)](0x1 - _0x16672b, 0x1 - _0x16672b, 0x1 - _0x16672b), _0xfa9106[_0x2930df(0x17c)] && (_0xfa9106[_0x2930df(0x17c)][_0x2930df(0x155)] = 0x1 - _0x16672b);
    }
    for (let _0x2d75dd = 0x0; _0x2d75dd < wordObjects[_0x2930df(0xec)]; _0x2d75dd++) {
        const _0x423fa1 = wordObjects[_0x2d75dd];
        if (_0x423fa1 && _0x423fa1[_0x2930df(0x151)] && _0x423fa1[_0x2930df(0x151)][_0x2930df(0x17a)]['hitTime']) {
            const _0x4a381f = _0x454bc0 - _0x423fa1[_0x2930df(0x151)][_0x2930df(0x17a)][_0x2930df(0x10d)];
            if (_0x4a381f < 0x12c) {
                const _0x339dca = 0.05 * (0x1 - _0x4a381f / 0x12c);
                _0x423fa1[_0x2930df(0x151)][_0x2930df(0xe6)]['x'] = _0x423fa1[_0x2930df(0x151)][_0x2930df(0x17a)][_0x2930df(0x14d)]['x'] + (Math['random']() - 0.5) * _0x339dca, _0x423fa1[_0x2930df(0x151)][_0x2930df(0xe6)]['y'] = _0x423fa1[_0x2930df(0x151)]['userData'][_0x2930df(0x14d)]['y'] + (Math[_0x2930df(0xcc)]() - 0.5) * _0x339dca, _0x423fa1[_0x2930df(0x151)]['position']['z'] = _0x423fa1['mesh'][_0x2930df(0x17a)]['originalPosition']['z'] + (Math[_0x2930df(0xcc)]() - 0.5) * _0x339dca;
            } else _0x423fa1[_0x2930df(0x151)][_0x2930df(0xe6)][_0x2930df(0x148)](_0x423fa1['mesh'][_0x2930df(0x17a)][_0x2930df(0x14d)]), delete _0x423fa1[_0x2930df(0x151)]['userData']['hitTime'];
        }
    }
}

function animateStarField() {
    const _0x47c349 = a0_0x3c41ac;
    gameState[_0x47c349(0x10e)] || starField[_0x47c349(0x141)](_0x3749a1 => {
        const _0x2ef332 = _0x47c349,
            _0xe3c754 = _0x3749a1['geometry'][_0x2ef332(0xff)]['position'][_0x2ef332(0xed)],
            _0x58c2fe = _0x3749a1[_0x2ef332(0x17a)]['fieldDimensions'] || {
                'width': 0x7d0,
                'height': 0x7d0,
                'depth': 0x7d0
            },
            _0x4198b3 = 0.3 * (_0x58c2fe['depth'] / 0x7d0);
        for (let _0x19c3f3 = 0x0; _0x19c3f3 < _0xe3c754[_0x2ef332(0xec)]; _0x19c3f3 += 0x3) _0xe3c754[_0x19c3f3 + 0x2] += _0x4198b3, _0xe3c754[_0x19c3f3 + 0x2] > 0x0 && (_0xe3c754[_0x19c3f3] = (Math[_0x2ef332(0xcc)]() - 0.5) * _0x58c2fe[_0x2ef332(0x100)], _0xe3c754[_0x19c3f3 + 0x1] = (Math[_0x2ef332(0xcc)]() - 0.5) * _0x58c2fe['height'], _0xe3c754[_0x19c3f3 + 0x2] = -_0x58c2fe[_0x2ef332(0xe7)] / 0x2);
        _0x3749a1['geometry'][_0x2ef332(0xff)][_0x2ef332(0xe6)][_0x2ef332(0x140)] = !0x0;
    });
}

function animateWordObjects() {
    const _0x1e5cc3 = a0_0x3c41ac;
    if (gameState[_0x1e5cc3(0xf5)] || gameState[_0x1e5cc3(0x10e)]) return;
    const _0x9be839 = [];
    if (updateEnterAbilityDisplay(), wordObjects[_0x1e5cc3(0x141)]((_0x57693a, _0x5ef02b) => {
            const _0x17fc92 = _0x1e5cc3;
            if (_0x57693a && _0x57693a[_0x17fc92(0x151)]) try {
                if (_0x57693a['mesh'][_0x17fc92(0xe6)][_0x17fc92(0x176)](_0x57693a[_0x17fc92(0x14e)]), _0x57693a[_0x17fc92(0x16b)]) {
                    _0x57693a[_0x17fc92(0x16b)]['position'][_0x17fc92(0x148)](_0x57693a['mesh'][_0x17fc92(0xe6)]), _0x57693a[_0x17fc92(0x16b)][_0x17fc92(0x105)]['copy'](camera[_0x17fc92(0x105)]);
                    const _0x2d2770 = _0x57693a[_0x17fc92(0x16b)][_0x17fc92(0xe6)][_0x17fc92(0xdc)](camera['position']),
                        _0x326100 = 0x7,
                        _0x37d770 = 2.8,
                        _0x2a574e = 0.8;
                    let _0x3b1a07 = (_0x2d2770 - _0x326100) / (0x32 - _0x326100);
                    _0x3b1a07 = Math['max'](0x0, Math['min'](0x1, _0x3b1a07));
                    const _0x36fad5 = _0x2a574e + (_0x37d770 - _0x2a574e) * Math[_0x17fc92(0x16d)](_0x3b1a07, 1.5);
                    if (_0x57693a[_0x17fc92(0x189)]) {
                        const _0x3e89c1 = _0x57693a['textSprite'][_0x17fc92(0xd3)]['x'] / _0x57693a[_0x17fc92(0x189)][_0x17fc92(0xd3)]['y'];
                        _0x57693a[_0x17fc92(0x189)][_0x17fc92(0xd3)][_0x17fc92(0x197)](_0x36fad5 * _0x3e89c1, _0x36fad5, 0x1);
                        const _0x183264 = -0x3;
                        let _0x519ab2 = _0x183264 + (-0.7 - _0x183264) * (0x1 - _0x3b1a07),
                            _0x58cd42 = _0x57693a['radius'] || 0x1;
                        _0x17fc92(0x14c) === _0x57693a[_0x17fc92(0x15a)] && _0x57693a['isMiniAlphabet'] ? _0x57693a[_0x17fc92(0x189)][_0x17fc92(0xe6)]['x'] = _0x519ab2 : _0x57693a[_0x17fc92(0x199)] && _0x57693a[_0x17fc92(0x115)] ? _0x57693a['textSprite'][_0x17fc92(0xe6)]['x'] = -_0x58cd42 * (1.8 - 1.1 * (0x1 - _0x3b1a07)) : _0x57693a[_0x17fc92(0x189)][_0x17fc92(0xe6)]['x'] = -_0x58cd42 + _0x519ab2;
                    }
                }
                if (_0x57693a[_0x17fc92(0x15c)] && (_0x57693a['mesh']['rotation']['x'] += _0x57693a[_0x17fc92(0x15c)]['x'], _0x57693a[_0x17fc92(0x151)][_0x17fc92(0x114)]['y'] += _0x57693a[_0x17fc92(0x15c)]['y'], _0x57693a[_0x17fc92(0x151)][_0x17fc92(0x114)]['z'] += _0x57693a[_0x17fc92(0x15c)]['z']), _0x57693a['mesh'][_0x17fc92(0xe6)]['z'] > 0x1b) {
                    if (gameState['activeWordId'] === _0x57693a['id']) {
                        const _0x5ececa = document[_0x17fc92(0x111)]('bottom-center-word');
                        _0x5ececa && (_0x5ececa[_0x17fc92(0x198)] = '<div\x20style=\x22min-height:\x2024px;\x20line-height:\x2024px;\x22>&nbsp;</div>'), gameState['activeWordId'] = null;
                    }
                    gameState[_0x17fc92(0xc1)][_0x17fc92(0x182)] || (_0x57693a[_0x17fc92(0xcd)] ? (gameState[_0x17fc92(0xc9)]++, gameState[_0x17fc92(0xc9)] >= 0x3 && (gameState[_0x17fc92(0x134)]--, playSound('collision_to_ship'), gameState['whiteFragmentHitCount'] = 0x0)) : (gameState['lives']--, playSound('collision_to_ship')), updateLivesDisplay()), gameState[_0x17fc92(0x112)][_0x17fc92(0xf3)](_0x57693a[_0x17fc92(0xcf)]), gameState[_0x17fc92(0x11b)] = _0x57693a['word'];
                    const _0x55c976 = document[_0x17fc92(0x16f)]('.spaceship');
                    _0x55c976 && (_0x55c976[_0x17fc92(0x158)][_0x17fc92(0x176)](_0x17fc92(0x10b)), setTimeout(() => {
                        const _0xdcc504 = _0x17fc92;
                        _0x55c976['classList']['remove'](_0xdcc504(0x10b));
                    }, 0x1f4));
                    let _0x4b7f9a = 1.5,
                        _0xd925ae = 0x258;
                    if (_0x17fc92(0xdb) === _0x57693a[_0x17fc92(0x15a)] ? (_0x4b7f9a = 0x3, _0xd925ae = 0x320, playSound(_0x17fc92(0x133), 0.7)) : _0x17fc92(0x163) === _0x57693a[_0x17fc92(0x15a)] ? (_0x4b7f9a = 2.2, _0xd925ae = 0x2bc, playSound(_0x17fc92(0x133), 0.85)) : _0x17fc92(0x175) === _0x57693a['size'] ? (_0x4b7f9a = 0x1, _0xd925ae = 0x190, playSound('collision_to_ship', 1.2)) : _0x17fc92(0x165) === _0x57693a[_0x17fc92(0x15a)] ? (_0x4b7f9a = 3.5, _0xd925ae = 0x384, playSound(_0x17fc92(0x133), 0.6)) : _0x17fc92(0x187) === _0x57693a[_0x17fc92(0x15a)] ? (_0x4b7f9a = 0x4, _0xd925ae = 0x3e8, playSound(_0x17fc92(0x133), 0.5)) : 'mini' === _0x57693a[_0x17fc92(0x15a)] && _0x57693a[_0x17fc92(0xcd)] ? (_0x4b7f9a = 0.8, _0xd925ae = 0x12c, playSound(_0x17fc92(0x133), 1.3)) : playSound(_0x17fc92(0x133), 0x1), shakeScreen(_0x4b7f9a, _0xd925ae), updateLivesDisplay(), updateEnterAbilityDisplay(), _0x57693a[_0x17fc92(0x16b)] && (_0x57693a[_0x17fc92(0x189)] && (_0x57693a[_0x17fc92(0x16b)][_0x17fc92(0x116)](_0x57693a[_0x17fc92(0x189)]), _0x57693a[_0x17fc92(0x189)][_0x17fc92(0x17c)] && _0x57693a[_0x17fc92(0x189)][_0x17fc92(0x17c)][_0x17fc92(0xe4)](), _0x57693a[_0x17fc92(0x189)][_0x17fc92(0xf2)] && _0x57693a['textSprite']['geometry']['dispose']()), scene[_0x17fc92(0x116)](_0x57693a[_0x17fc92(0x16b)])), scene[_0x17fc92(0x116)](_0x57693a[_0x17fc92(0x151)]), _0x9be839[_0x17fc92(0xf3)](_0x5ef02b), gameState['activeWordIndex'] === _0x5ef02b && (gameState[_0x17fc92(0x156)] = -0x1, gameState['words'][_0x17fc92(0xec)] <= 0x1 && !gameState[_0x17fc92(0xf5)] && !gameState[_0x17fc92(0x16a)] && findNextWord()), gameState['lives'] <= 0x0 && !gameState[_0x17fc92(0xc1)][_0x17fc92(0x182)]) return gameState[_0x17fc92(0xeb)] = 'missed', void endGame();
                }
            } catch (_0x40256b) {
                _0x9be839[_0x17fc92(0xf3)](_0x5ef02b);
            } else _0x9be839['push'](_0x5ef02b);
        }), _0x9be839[_0x1e5cc3(0xec)] > 0x0) {
        _0x9be839['sort']((_0x3d5d0d, _0x1a04b7) => _0x1a04b7 - _0x3d5d0d);
        for (const _0x19effe of _0x9be839) _0x19effe >= 0x0 && _0x19effe < wordObjects[_0x1e5cc3(0xec)] && (wordObjects[_0x1e5cc3(0x190)](_0x19effe, 0x1), gameState['words']['splice'](_0x19effe, 0x1), gameState[_0x1e5cc3(0x156)] > _0x19effe ? gameState[_0x1e5cc3(0x156)]-- : gameState[_0x1e5cc3(0x156)] === _0x19effe && (gameState[_0x1e5cc3(0x156)] = -0x1));
    }
}

function autoPauseOnInteractionChange() {
    const _0x25190d = a0_0x3c41ac;

    function _0x55980f() {
        const _0xed33dc = a0_0x5505;
        return _0xed33dc(0x164) === gameState[_0xed33dc(0xbd)] && !gameState['paused'] && !gameState[_0xed33dc(0xf5)];
    }
    document[_0x25190d(0x16e)]('visibilitychange', function() {
        const _0x31db1b = _0x25190d;
        _0x31db1b(0xf9) === document['visibilityState'] && _0x55980f() && togglePause();
    }), window[_0x25190d(0x16e)](_0x25190d(0x12f), function() {
        _0x55980f() && togglePause();
    });
}

function a0_0x5505(_0x575e7a, _0x39f486) {
    const _0x31ec4b = a0_0x31ec();
    return a0_0x5505 = function(_0x550592, _0x3c642b) {
        _0x550592 = _0x550592 - 0xbc;
        let _0x3bcbc8 = _0x31ec4b[_0x550592];
        return _0x3bcbc8;
    }, a0_0x5505(_0x575e7a, _0x39f486);
}

function setScreen(_0x4bc7e3) {
    const _0x1b6811 = a0_0x3c41ac;
    document[_0x1b6811(0xe3)]('.screen')['forEach'](_0x3ecb8b => _0x3ecb8b[_0x1b6811(0x158)][_0x1b6811(0x176)]('hidden'));
    const _0x21923c = document[_0x1b6811(0x111)](_0x4bc7e3 + '-screen');
    _0x21923c && _0x21923c[_0x1b6811(0x158)][_0x1b6811(0x116)](_0x1b6811(0xf9)), gameState[_0x1b6811(0xbd)] = _0x4bc7e3, setupEventListeners();
}
document[a0_0x3c41ac(0x16e)]('DOMContentLoaded', () => {
    const _0x47c05d = a0_0x3c41ac;

    function _0x54b9ef() {
        const _0x25f942 = a0_0x5505,
            _0x3135aa = document[_0x25f942(0x111)](_0x25f942(0xc6));
        _0x3135aa && (_0x3135aa[_0x25f942(0x100)] = window[_0x25f942(0x122)], _0x3135aa[_0x25f942(0x192)] = window[_0x25f942(0x125)], _0x3135aa[_0x25f942(0x103)][_0x25f942(0x100)] = window['innerWidth'] + 'px', _0x3135aa[_0x25f942(0x103)][_0x25f942(0x192)] = window['innerHeight'] + 'px');
    }
    _0x54b9ef(), window[_0x47c05d(0x16e)]('resize', _0x54b9ef);
    const _0x2fd4a9 = document[_0x47c05d(0x111)](_0x47c05d(0xc6));
    _0x2fd4a9 && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i ['test'](navigator[_0x47c05d(0xd0)]) || window[_0x47c05d(0x122)] <= 0x384) && (_0x2fd4a9['addEventListener'](_0x47c05d(0xc2), function(_0xddcd1d) {
        const _0x5cd26e = _0x47c05d;
        _0xddcd1d[_0x5cd26e(0xe9)](), _0x2fd4a9[_0x5cd26e(0xdf)] && _0x2fd4a9['focus']();
        const _0xf010e2 = new MouseEvent(_0x5cd26e(0x126), {
            'bubbles': !0x0,
            'cancelable': !0x0,
            'view': window
        });
        _0x2fd4a9[_0x5cd26e(0x18d)](_0xf010e2);
    }, {
        'passive': !0x1
    }), _0x2fd4a9['addEventListener'](_0x47c05d(0x118), function(_0x122b81) {
        const _0x4d50a3 = _0x47c05d;
        _0x122b81['preventDefault']();
        const _0x23962d = new MouseEvent('mouseup', {
            'bubbles': !0x0,
            'cancelable': !0x0,
            'view': window
        });
        _0x2fd4a9[_0x4d50a3(0x18d)](_0x23962d);
    }, {
        'passive': !0x1
    })), setTimeout(() => {
        const _0x575f78 = _0x47c05d;
        preloadScreens(), setupEventListeners(), initThreeJs(), initTitleThreeJs(), soundsManager['updateSoundVolume'](gameState[_0x575f78(0xc1)][_0x575f78(0xe8)]), soundsManager[_0x575f78(0xf7)](gameState[_0x575f78(0xc1)][_0x575f78(0x13f)]), animate(), setScreen('title');
    }, 0x64);
    const _0x115d9d = document[_0x47c05d(0x111)](_0x47c05d(0xfd)),
        _0x88c93b = document[_0x47c05d(0x111)]('progress-bar-wrapper'),
        _0x3fe15d = document['getElementById']('progress-bar'),
        _0x385a0c = document[_0x47c05d(0x111)](_0x47c05d(0x149));
    if (_0x115d9d && _0x88c93b && _0x3fe15d && _0x385a0c) {
        _0x3fe15d[_0x47c05d(0x103)]['width'] = 'auto', _0x3fe15d[_0x47c05d(0x103)][_0x47c05d(0x192)] = _0x47c05d(0x166), _0x88c93b[_0x47c05d(0x103)][_0x47c05d(0x192)] = _0x385a0c['offsetHeight'] + 'px', _0x88c93b[_0x47c05d(0x103)][_0x47c05d(0xea)] = _0x385a0c['offsetTop'] + 'px', _0x88c93b[_0x47c05d(0x103)][_0x47c05d(0x17e)] = _0x385a0c[_0x47c05d(0x13a)] + 'px', _0x88c93b[_0x47c05d(0x103)][_0x47c05d(0x100)] = '0px';
        let _0x5c1a03 = 0x0;
        const _0x1b5084 = document[_0x47c05d(0x111)](_0x47c05d(0xce)),
            _0x511eca = _0x385a0c['offsetWidth'],
            _0x5d9f55 = setInterval(() => {
                const _0x52b1e2 = _0x47c05d;
                _0x5c1a03 += 0x3 * Math[_0x52b1e2(0xcc)]() + 0x1, _0x5c1a03 > 0x64 && (_0x5c1a03 = 0x64);
                const _0x23e3f3 = Math['round'](_0x5c1a03 / 0x64 * _0x511eca);
                _0x88c93b[_0x52b1e2(0x103)][_0x52b1e2(0x100)] = _0x23e3f3 + 'px', _0x1b5084 && (_0x1b5084[_0x52b1e2(0xe1)] = _0x52b1e2(0x123) + Math[_0x52b1e2(0xf4)](_0x5c1a03) + '%'), _0x5c1a03 >= 0x64 && (clearInterval(_0x5d9f55), setTimeout(() => {
                    const _0x183827 = _0x52b1e2;
                    _0x115d9d['classList'][_0x183827(0x176)](_0x183827(0x172)), setTimeout(() => _0x115d9d[_0x183827(0x103)][_0x183827(0x142)] = _0x183827(0x11a), 0x1f4);
                }, 0x190));
            }, 0x50);
    }
}), document[a0_0x3c41ac(0x16e)](a0_0x3c41ac(0x12a), () => {
    const _0x32de92 = a0_0x3c41ac;

    function _0x24a8fc() {
        const _0x77f7d7 = a0_0x5505,
            _0x32640f = document[_0x77f7d7(0x111)]('game-canvas');
        _0x32640f && (_0x32640f[_0x77f7d7(0x100)] = window[_0x77f7d7(0x122)], _0x32640f['height'] = window[_0x77f7d7(0x125)], _0x32640f[_0x77f7d7(0x103)][_0x77f7d7(0x100)] = window['innerWidth'] + 'px', _0x32640f['style'][_0x77f7d7(0x192)] = window['innerHeight'] + 'px');
    }
    _0x24a8fc(), window[_0x32de92(0x16e)]('resize', _0x24a8fc), setTimeout(() => {
        const _0x53269b = _0x32de92;
        preloadScreens(), setupEventListeners(), initThreeJs(), initTitleThreeJs(), soundsManager[_0x53269b(0x15e)](gameState[_0x53269b(0xc1)][_0x53269b(0xe8)]), soundsManager[_0x53269b(0xf7)](gameState['settings'][_0x53269b(0x13f)]), animate(), setScreen('title');
    }, 0x64);
});
const originalSetScreen = window['setScreen'] || setScreen;
window[a0_0x3c41ac(0x14b)] = function(_0x5e60fc) {
    originalSetScreen(_0x5e60fc);
};