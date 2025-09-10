const a0_0x5ec04c = a0_0x3ead;
(function(_0x99dd9, _0x1313d9) {
    const _0x5691ff = a0_0x3ead,
        _0x3bc642 = _0x99dd9();
    while (!![]) {
        try {
            const _0x389fb6 = parseInt(_0x5691ff(0x9d)) / 0x1 * (-parseInt(_0x5691ff(0xad)) / 0x2) + -parseInt(_0x5691ff(0xc5)) / 0x3 + parseInt(_0x5691ff(0xc7)) / 0x4 + -parseInt(_0x5691ff(0xbf)) / 0x5 * (parseInt(_0x5691ff(0xc9)) / 0x6) + parseInt(_0x5691ff(0xa5)) / 0x7 * (parseInt(_0x5691ff(0xcc)) / 0x8) + parseInt(_0x5691ff(0xa7)) / 0x9 + parseInt(_0x5691ff(0xb0)) / 0xa;
            if (_0x389fb6 === _0x1313d9) break;
            else _0x3bc642['push'](_0x3bc642['shift']());
        } catch (_0xc0105d) {
            _0x3bc642['push'](_0x3bc642['shift']());
        }
    }
}(a0_0x7b54, 0xd8de4));

function a0_0x7b54() {
    const _0xd46b31 = ['_setupInteractionListener', 'removeEventListener', 'buffer', 'touchstart', 'connect', '2270631cGUdwK', 'gain', '3053936cTFuvH', 'hit\x20sound.mp3', '4677054PsqKWF', 'webkitAudioContext', 'error.mp3', '1328nkghMa', 'init', 'userInteracted', 'music/', 'AudioContext', 'colission\x20to\x20ship\x20sound.mp3', 'stopMusic', 'keydown', 'getMusicVolume', 'arrayBuffer', 'boom.mp3', 'mousedown', 'entries', 'currentMusicGain', '3085acGfYL', 'purple\x20asteroid\x20explosion.mp3', 'value', 'stop', 'musicVolume', 'decodeAudioData', 'playMusic', 'addEventListener', '8778woqyVQ', 'audioContext', '424530zhoEwO', 'TITLE,GAME\x20OVER.mp3', 'smallasteroid\x20and\x20fragments\x20explosion.mp3', 'musicSounds', 'currentMusic', 'hasSound', '622qySKhS', 'state', 'soundVolume', '23652950drZzSv', 'resume', 'disconnect', 'whiteasteroid\x20explosion.mp3', 'playSound', 'playbackRate', 'loadSounds', 'start', 'createBufferSource', 'updateSoundVolume', 'loop', 'destination', 'createGain', 'lasersound.mp3', 'sounds', '5GCsxxc'];
    a0_0x7b54 = function() {
        return _0xd46b31;
    };
    return a0_0x7b54();
}
class SoundsManager {
    constructor() {
        const _0x574603 = a0_0x3ead;
        this[_0x574603(0xbe)] = {}, this[_0x574603(0xaa)] = {}, this[_0x574603(0xaf)] = 0x4b, this[_0x574603(0xa1)] = 0x4b, this[_0x574603(0xab)] = null, this['currentMusicGain'] = null, this['userInteracted'] = !0x1, this[_0x574603(0xa6)] = null, this[_0x574603(0xc0)]();
    }[a0_0x5ec04c(0xc0)]() {
        const _0x35c94d = a0_0x5ec04c,
            _0x5a62a8 = () => {
                const _0x206195 = a0_0x3ead;
                this[_0x206195(0x91)] = !0x0, this['audioContext'] && 'suspended' === this['audioContext'][_0x206195(0xae)] && this[_0x206195(0xa6)][_0x206195(0xb1)](), window[_0x206195(0xc1)]('mousedown', _0x5a62a8), window[_0x206195(0xc1)]('keydown', _0x5a62a8), window['removeEventListener'](_0x206195(0xc3), _0x5a62a8);
            };
        window[_0x35c94d(0xa4)](_0x35c94d(0x9a), _0x5a62a8), window[_0x35c94d(0xa4)](_0x35c94d(0x96), _0x5a62a8), window[_0x35c94d(0xa4)](_0x35c94d(0xc3), _0x5a62a8);
    }[a0_0x5ec04c(0x90)]() {
        const _0xb19fc4 = a0_0x5ec04c;
        return this[_0xb19fc4(0xa6)] = new(window[(_0xb19fc4(0x93))] || window[(_0xb19fc4(0xca))])(), this[_0xb19fc4(0xb6)](), this;
    }
    async [a0_0x5ec04c(0xb6)]() {
        const _0x2f86d4 = a0_0x5ec04c,
            _0x233096 = Object[_0x2f86d4(0x9b)]({
                'title': 'TITLE,GAME\x20OVER.mp3',
                'gameover': _0x2f86d4(0xa8),
                'gameplay': 'Tempestgameplay\x20bgm.mp3'
            })['map'](async ([_0x1454ea, _0x36d13b]) => {
                const _0x1dd44f = _0x2f86d4,
                    _0x2eb116 = await fetch(_0x1dd44f(0x92) + _0x36d13b),
                    _0x2cbadd = await _0x2eb116[_0x1dd44f(0x98)](),
                    _0x4a6072 = await this[_0x1dd44f(0xa6)][_0x1dd44f(0xa2)](_0x2cbadd);
                this[_0x1dd44f(0xaa)][_0x1454ea] = {
                    'buffer': _0x4a6072,
                    'name': _0x1454ea
                };
            }),
            _0x30d808 = Object[_0x2f86d4(0x9b)]({
                'keyerror': _0x2f86d4(0xcb),
                'ship_boom': _0x2f86d4(0x99),
                'large_explosion': 'largeasteroid\x20explosion.mp3',
                'medium_explosion': 'mediumasteroid\x20and\x20purple\x20asteroid\x20fragments\x20explosion.mp3',
                'small_explosion': _0x2f86d4(0xa9),
                'white_explosion': _0x2f86d4(0xb3),
                'purple_explosion': _0x2f86d4(0x9e),
                'hit': _0x2f86d4(0xc8),
                'laser': _0x2f86d4(0xbd),
                'collision_to_ship': _0x2f86d4(0x94)
            })['map'](async ([_0x306eff, _0x3ea68d]) => {
                const _0x3edc7c = _0x2f86d4,
                    _0x1892f2 = await fetch(_0x3edc7c(0x92) + _0x3ea68d),
                    _0x46c1f1 = await _0x1892f2['arrayBuffer'](),
                    _0x7b6a7 = await this[_0x3edc7c(0xa6)][_0x3edc7c(0xa2)](_0x46c1f1);
                this[_0x3edc7c(0xbe)][_0x306eff] = {
                    'buffer': _0x7b6a7,
                    'name': _0x306eff
                };
            });
        await Promise['all']([..._0x233096, ..._0x30d808]);
    }[a0_0x5ec04c(0xb4)](_0x2c02eb, _0x47cb88 = 0x1) {
        const _0x2e2e2d = a0_0x5ec04c;
        if (this[_0x2e2e2d(0x91)]) {
            if (this[_0x2e2e2d(0xaa)][_0x2c02eb]) this[_0x2e2e2d(0xa3)](_0x2c02eb);
            else {
                if (this[_0x2e2e2d(0xbe)][_0x2c02eb] && this['audioContext']) {
                    const {
                        buffer: _0x2f9ac8
                    } = this[_0x2e2e2d(0xbe)][_0x2c02eb], _0x2f570c = this[_0x2e2e2d(0xa6)][_0x2e2e2d(0xb8)]();
                    _0x2f570c[_0x2e2e2d(0xc2)] = _0x2f9ac8, _0x2f570c[_0x2e2e2d(0xb5)]['value'] = _0x47cb88;
                    const _0x3eb4b1 = this[_0x2e2e2d(0xa6)][_0x2e2e2d(0xbc)]();
                    _0x3eb4b1[_0x2e2e2d(0xc6)]['value'] = this[_0x2e2e2d(0xaf)] / 0x64, _0x2f570c[_0x2e2e2d(0xc4)](_0x3eb4b1)[_0x2e2e2d(0xc4)](this[_0x2e2e2d(0xa6)]['destination']), _0x2f570c['start'](0x0);
                }
            }
        }
    }[a0_0x5ec04c(0xa3)](_0x90e1c0, _0x5ba969 = !0x0) {
        const _0x468b0f = a0_0x5ec04c;
        if (!this[_0x468b0f(0x91)]) return;
        if (!this[_0x468b0f(0xaa)][_0x90e1c0] || !this[_0x468b0f(0xa6)]) return;
        this[_0x468b0f(0x95)]();
        const {
            buffer: _0x1c8d79
        } = this[_0x468b0f(0xaa)][_0x90e1c0], _0x37d833 = this[_0x468b0f(0xa6)]['createBufferSource']();
        _0x37d833[_0x468b0f(0xc2)] = _0x1c8d79, _0x37d833[_0x468b0f(0xba)] = _0x5ba969;
        const _0x248420 = this[_0x468b0f(0xa6)]['createGain']();
        _0x248420[_0x468b0f(0xc6)][_0x468b0f(0x9f)] = this[_0x468b0f(0xa1)] / 0x64, _0x37d833['connect'](_0x248420)[_0x468b0f(0xc4)](this[_0x468b0f(0xa6)][_0x468b0f(0xbb)]), _0x37d833[_0x468b0f(0xb7)](0x0), this[_0x468b0f(0xab)] = _0x37d833, this[_0x468b0f(0x9c)] = _0x248420;
    }['stopMusic']() {
        const _0x36c061 = a0_0x5ec04c;
        if (this[_0x36c061(0xab)]) {
            try {
                this[_0x36c061(0xab)][_0x36c061(0xa0)]();
            } catch (_0x54bd63) {}
            this[_0x36c061(0xab)][_0x36c061(0xb2)](), this[_0x36c061(0xab)] = null;
        }
        this[_0x36c061(0x9c)] && (this[_0x36c061(0x9c)][_0x36c061(0xb2)](), this['currentMusicGain'] = null);
    }[a0_0x5ec04c(0xb9)](_0x165361) {
        const _0x2bb2d3 = a0_0x5ec04c;
        this[_0x2bb2d3(0xaf)] = _0x165361;
    }['updateMusicVolume'](_0x4d071b) {
        const _0x517ffa = a0_0x5ec04c;
        this['musicVolume'] = _0x4d071b, this[_0x517ffa(0x9c)] && (this[_0x517ffa(0x9c)][_0x517ffa(0xc6)][_0x517ffa(0x9f)] = _0x4d071b / 0x64);
    }['getSoundVolume']() {
        const _0xb3e900 = a0_0x5ec04c;
        return this[_0xb3e900(0xaf)];
    }[a0_0x5ec04c(0x97)]() {
        const _0x4a979c = a0_0x5ec04c;
        return this[_0x4a979c(0xa1)];
    }[a0_0x5ec04c(0xac)](_0x522109) {
        const _0x40e474 = a0_0x5ec04c;
        return void 0x0 !== this['sounds'][_0x522109] || void 0x0 !== this[_0x40e474(0xaa)][_0x522109];
    }
}
const soundsManager = new SoundsManager()[a0_0x5ec04c(0x90)]();

function a0_0x3ead(_0x138ce2, _0x97a321) {
    const _0x7b54b4 = a0_0x7b54();
    return a0_0x3ead = function(_0x3eadd9, _0x4df0b0) {
        _0x3eadd9 = _0x3eadd9 - 0x90;
        let _0x47df13 = _0x7b54b4[_0x3eadd9];
        return _0x47df13;
    }, a0_0x3ead(_0x138ce2, _0x97a321);
}
window['soundsManager'] = soundsManager;