// ==UserScript==
// @name         TEF_minimap
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ...
// @author       Pony
// @include      *://pixelplanet.fun/*
// @include      *://fuckyouarkeros.fun/*
// @grant        none
// ==/UserScript==
var _0x4457 = ['onreadystatechange', 'canvas', '<canvas\x20id=\x22minimap-board\x22\x20style=\x22\x20display:\x20none;\x20width:\x20100%;\x20height:\x20100%;z-index:2;position:absolute;top:0;left:0;\x22></canvas>', 'getTime', 'Updating\x20Template\x20List', '<span\x20id=\x22zoom-minus\x22\x20style=\x22cursor:pointer;\x20color:\x20#dbdbdb;\x20font-weight:bold;\x22>-</span>', 'beginPath', 'webkitImageSmoothingEnabled', 'data', '</div><div\x20id=\x22minimap-config\x22\x20style=\x22line-height:20px;\x20\x20background-color:#080808;\x22>', 'parentNode', 'querySelectorAll', 'onload', 'width', 'colorSampleSelector', 'hide-map', 'minimap-text', 'rect', 'zoomIn()', 'height', 'msImageSmoothingEnabled', 'moveTo', 'location', 'mouseup', 'green', '\x20is\x20in\x20range!', 'Refresh\x20got\x20forced.', 'log', 'cursor', 'click', 'setAttribute', 'meny0', 'миникарта', 'style', 'replace', 'between', 'zoom-minus', '<span\x20id=\x22hide-map\x22\x20style=\x22cursor:pointer;\x20color:\x20#dbdbdb;\x22>скрыть\x20|', 'minimap-cursor', 'prototype', 'addEventListener', 'Show\x20Minimap', 'div', 'clearRect', '\x20|\x20|\x20', 'zoom-plus', 'send', 'follow-mouse', 'coorbox', 'block', 'stroke', 'name', 'clientWidth', 'substring', 'preventDefault', 'This\x20should\x20do\x20something,\x20but\x20it\x20doesn\x20\x27t', 'display', 'offsetWidth', 'minimapbg', 'createElement', 'match', 'class', 'getElementById', 'src', 'offsetHeight', 'templates/d.json?', 'open', 'imageSmoothingEnabled', 'strokeStyle', '*[style]', 'parse', 'setMod', 'href', 'innerHTML', 'minimap-config', 'lineTo', '<span\x20id=\x22setMod\x22\x20style=\x22cursor:pointer;font-weight:bold\x22\x20;=\x22\x22\x20<=\x22\x22\x20span=\x22\x22>...</span>', 'zoomOut()', '<canvas\x20id=\x22minimap\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:1;position:absolute;top:0;left:0;\x22></canvas>', 'baseTepmlateUrl', 'readyState', 'body', '<div\x20id=\x22minimap-box\x22\x20style=\x22position:\x20relative;width:420px;height:300px;\x22>', 'onclick', 'post\x20block\x20bc2', 'push', '<div\x20id=\x22minimap-text\x22\x20style=\x22display:\x20none;\x20color:\x20#dbdbdb;\x22></div>', 'minimap', 'getElementByI', 'minimap-box', '\x20Load\x20image\x20', '<canvas\x20id=\x22minimap-cursor\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;z-index:3;position:absolute;top:0;left:0;\x22></canvas>', 'none', 'getElementsByClassName', 'appendChild', 'clientHeight', '</span>\x20\x20<span\x20id=\x22follow-mouse\x22\x20style=\x22cursor:pointer;\x20color:\x20#dbdbdb;\x22Follow\x20mous', 'length', 'split', 'pointer', 'minimap-board', 'backgroundColor', 'mousedown', 'palette-color-box', 'drawImage', '</div>', 'loaded', 'getContext'];
(function(_0x176eff, _0x445700) {
    var _0x5d6094 = function(_0x35da6b) { while (--_0x35da6b) { _0x176eff['push'](_0x176eff['shift']()); } };
    _0x5d6094(++_0x445700);
}(_0x4457, 0xc6));
var _0x5d60 = function(_0x176eff, _0x445700) { _0x176eff = _0x176eff - 0x0; var _0x5d6094 = _0x4457[_0x176eff]; return _0x5d6094; };
Number[_0x5d60('0x39')][_0x5d60('0x35')] = function(_0x53efcc, _0x4b0453) { return this > _0x53efcc && this < _0x4b0453; };
var range = 0x96;
var frak = ['https://raw.githubusercontent.com/TheElderFallouts/wwbtp/master/PP/'];
window[_0x5d60('0x61')] = frak[0x0];
setInterval(adap, 0x2bc);

function adap() {
    var _0x949263 = document[_0x5d60('0x63')][_0x5d60('0x46')];
    var _0x2a5fed = document[_0x5d60('0x63')][_0x5d60('0x5')];
    let _0x5c1046 = Math['min'](_0x949263, _0x2a5fed);
    let _0x58a925 = _0x5c1046 / 0x3;
    if (_0x58a925 <= 0x12c) {
        document[_0x5d60('0x50')](_0x5d60('0x6b'))['style']['height'] = _0x58a925 + 'px';
        _0x58a925 = _0x58a925 + 0x50;
        document[_0x5d60('0x50')]('minimap-box')[_0x5d60('0x33')][_0x5d60('0x1f')] = _0x58a925 + 'px';
    } else {
        document['getElementById'](_0x5d60('0x6b'))[_0x5d60('0x33')]['height'] = 0x12c + 'px';
        document['getElementById'](_0x5d60('0x6b'))[_0x5d60('0x33')]['width'] = 0x1a4 + 'px';
    }
}
setTimeout(init, 0xbb8);

function init() {
    re = /(.*)\/\?p=(\-?(?:\d*)),(\-?(?:\d*))/g;
    rec = /x\:(\d*) y\:(\d*)/g;
    gameWindow = document['getElementById'](_0x5d60('0x13'));
    coorDOM = null;
    _0x4d388a();
    x_window = 0x0;
    y_window = 0x0;
    x = 0x0;
    y = 0x0;
    template_list = null;
    zoomlevel = 0x9;
    toggle_show = !![];
    toggle_follow = !![];
    zooming_in = ![];
    zooming_out = ![];
    zoom_time = 0x64;
    image_list = [];
    counter = 0x0;
    needed_templates = null;
    cachebreaker = null;
    var _0x345925 = document[_0x5d60('0x4d')](_0x5d60('0x3c'));
    _0x345925[_0x5d60('0x30')](_0x5d60('0x4f'), _0x5d60('0x66'));
    _0x345925['innerHTML'] = '<style>.grecaptcha-badge{display:\x20none;}</style>\x20<div\x20id=\x22minimapbg\x22\x20style=\x22position:\x20absolute;\x20background:\x20#080808;\x20box-shadow:\x200\x200\x2015px\x2011px\x20black;\x20right:\x200px;\x20top:\x200px;\x22>' + '<div\x20class=\x22posy\x22\x20id=\x22posyt\x22\x20style\x20=\x20color:\x20rgb(250,\x20250,\x20250);\x20background-color:#080808;\x20text-align:\x20center;\x20line-height:\x2042px;\x20vertical-align:\x20middle;\x20width:\x20auto;\x20height:\x20auto;\x20border-radius:\x2021px;\x20padding:\x206px;\x22>' + _0x5d60('0x68') + _0x5d60('0x64') + _0x5d60('0x60') + _0x5d60('0x14') + _0x5d60('0x1') + _0x5d60('0x1b') + _0x5d60('0x37') + _0x5d60('0x6') + '</span>\x20|\x20Zoom:\x20<span\x20id=\x22zoom-plus\x22\x20style=\x22cursor:pointer;\x20color:\x20#dbdbdb;\x20font-weight:bold;\x22>+</span>\x20/\x20' + _0x5d60('0x17') + _0x5d60('0x3e') + _0x5d60('0x5e') + '\x20<div\x20id=\x22meny0\x22\x20style=\x22display:\x20none;\x20background:\x20#080808;\x22>\x20...</div>' + _0x5d60('0xf') + '</div>';
    document[_0x5d60('0x63')][_0x5d60('0x4')](_0x345925);
    meny0 = document[_0x5d60('0x50')](_0x5d60('0x31'));
    minimap = document[_0x5d60('0x50')](_0x5d60('0x69'));
    minimap_board = document[_0x5d60('0x50')](_0x5d60('0xa'));
    minimap_cursor = document[_0x5d60('0x50')](_0x5d60('0x38'));
    minimap[_0x5d60('0x1f')] = minimap[_0x5d60('0x4b')];
    minimap_board[_0x5d60('0x1f')] = minimap_board['offsetWidth'];
    minimap_cursor[_0x5d60('0x1f')] = minimap_cursor[_0x5d60('0x4b')];
    minimap[_0x5d60('0x25')] = minimap[_0x5d60('0x52')];
    minimap_board[_0x5d60('0x25')] = minimap_board[_0x5d60('0x52')];
    minimap_cursor[_0x5d60('0x25')] = minimap_cursor['offsetHeight'];
    ctx_minimap = minimap[_0x5d60('0x11')]('2d');
    ctx_minimap_board = minimap_board[_0x5d60('0x11')]('2d');
    ctx_minimap_cursor = minimap_cursor[_0x5d60('0x11')]('2d');
    ctx_minimap['mozImageSmoothingEnabled'] = ![];
    ctx_minimap[_0x5d60('0x19')] = ![];
    ctx_minimap[_0x5d60('0x26')] = ![];
    ctx_minimap[_0x5d60('0x55')] = ![];
    _0x2f11d0();
    _0xed8fd0();
    document[_0x5d60('0x50')](_0x5d60('0x21'))['onclick'] = function() {
        console[_0x5d60('0x2d')](_0x5d60('0x49'));
        toggle_show = ![];
        document[_0x5d60('0x50')](_0x5d60('0x6b'))['style'][_0x5d60('0x4a')] = _0x5d60('0x2');
        document[_0x5d60('0x50')](_0x5d60('0x5c'))[_0x5d60('0x33')][_0x5d60('0x4a')] = 'none';
        document['getElementById']('minimap-text')['style'][_0x5d60('0x4a')] = _0x5d60('0x43');
        document[_0x5d60('0x50')](_0x5d60('0x22'))['innerHTML'] = _0x5d60('0x32');
        document[_0x5d60('0x50')](_0x5d60('0x22'))['style'][_0x5d60('0x2e')] = _0x5d60('0x9');
    };
    document[_0x5d60('0x50')](_0x5d60('0x22'))['onclick'] = function() {
        toggle_show = !![];
        document['getElementById'](_0x5d60('0x6b'))[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x43');
        document[_0x5d60('0x50')](_0x5d60('0x5c'))[_0x5d60('0x33')]['display'] = 'block';
        document[_0x5d60('0x50')]('minimap-text')[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x2');
        document['getElementById'](_0x5d60('0x22'))['style']['cursor'] = 'default';
        _0x3f2810();
    };
    document[_0x5d60('0x50')](_0x5d60('0x3f'))['addEventListener'](_0x5d60('0xc'), function(_0x4c1545) {
        _0x4c1545[_0x5d60('0x48')]();
        zooming_in = !![];
        zooming_out = ![];
        _0x1a42aa();
    }, ![]);
    document['getElementById'](_0x5d60('0x36'))['addEventListener']('mousedown', function(_0x5a5a14) {
        _0x5a5a14[_0x5d60('0x48')]();
        zooming_out = !![];
        zooming_in = ![];
        _0x3f3cdd();
    }, ![]);
    document[_0x5d60('0x50')](_0x5d60('0x3f'))[_0x5d60('0x3a')](_0x5d60('0x29'), function(_0x56ed45) { zooming_in = ![]; }, ![]);
    document['getElementById'](_0x5d60('0x36'))[_0x5d60('0x3a')]('mouseup', function(_0x34314d) { zooming_out = ![]; }, ![]);
    document[_0x5d60('0x50')](_0x5d60('0x41'))[_0x5d60('0x65')] = function() {};
    window = document[_0x5d60('0x50')](_0x5d60('0x13'));
    window[_0x5d60('0x3a')](_0x5d60('0x29'), function(_0xc6d122) { if (!toggle_show) return; if (!toggle_follow) setTimeout(_0x50c69d, 0x32); }, ![]);
    window['addEventListener']('mousemove', function(_0x1a61e0) {
        if (!toggle_show) return;
        var _0x2161d8 = document[_0x5d60('0x3')](_0x5d60('0x42'));
        _0x2161d8 = _0x2161d8[0x0];
        var _0x1867f5 = _0x2161d8[_0x5d60('0x5b')][_0x5d60('0x8')](/(-\d+|\d+)/);
        var _0x2f66fb = 'x';
        var _0xfba05a = 'y';
        _0x2f66fb = +(_0x1867f5[0x0][_0x5d60('0x47')](0x2) + _0x1867f5[0x1]);
        _0xfba05a = +(_0x1867f5[0x2]['substring'](0x3) + _0x1867f5[0x3]);
        if (x != _0x2f66fb || y != _0xfba05a) {
            x = parseInt(_0x2f66fb);
            y = parseInt(_0xfba05a);
            if (toggle_follow) {
                x_window = x;
                y_window = y;
            } else _0xed8fd0();
            _0x3f2810();
            for (let _0x53a80c in template_list) {
                let _0x1d628f = template_list[_0x53a80c];
                if (x[_0x5d60('0x35')](_0x1d628f['x'], _0x1d628f['x'] + _0x1d628f[_0x5d60('0x1f')]) && y[_0x5d60('0x35')](_0x1d628f['y'], _0x1d628f['y'] + _0x1d628f[_0x5d60('0x25')])) {
                    let _0x46b0a2 = x - _0x1d628f['x'] + image_list[_0x53a80c][_0x5d60('0x1f')] * (y - _0x1d628f['y']) << 0x2;
                    if (image_list[_0x53a80c][_0x5d60('0x1a')][_0x46b0a2 + 0x3] !== 0xff) break;
                    let _0x276d42 = [image_list[_0x53a80c][_0x5d60('0x1a')][_0x46b0a2], image_list[_0x53a80c]['data'][_0x46b0a2 + 0x1], image_list[_0x53a80c][_0x5d60('0x1a')][_0x46b0a2 + 0x2]],
                        _0x5aa789 = document[_0x5d60('0x50')](_0x5d60('0x20'))[_0x5d60('0x1c')][_0x5d60('0x33')][_0x5d60('0xb')][_0x5d60('0x4e')](/-?\d+/g);
                    if (_0x276d42[0x0] == _0x5aa789[0x0] && _0x276d42[0x1] == _0x5aa789[0x1] && _0x276d42[0x2] == _0x5aa789[0x2]) break;
                    for (let _0x8f5f14 of document[_0x5d60('0x3')](_0x5d60('0xd'))) { _0x5aa789 = _0x8f5f14['style'][_0x5d60('0xb')][_0x5d60('0x4e')](/-?\d+/g); if (_0x276d42[0x0] == _0x5aa789[0x0] && _0x276d42[0x1] == _0x5aa789[0x1] && _0x276d42[0x2] == _0x5aa789[0x2]) { _0x8f5f14[_0x5d60('0x2f')](); break; }; };
                    console[_0x5d60('0x2d')](_0x276d42[0x0], _0x276d42[0x1], _0x276d42[0x2]);
                    console[_0x5d60('0x2d')](_0x5aa789[0x0], _0x5aa789[0x1], _0x5aa789[0x2]);
                    break;
                };
            };
        }
    }, ![]);
    _0x4bae1e();
    document['getElementById'](_0x5d60('0x59'))[_0x5d60('0x65')] = function(_0x139704) {
        _0x139704 = !_0x139704;
        if (_0x139704) { console[_0x5d60('0x2d')](_0x139704); }
        console[_0x5d60('0x2d')]('st', _0x139704);
        if (_0x139704) { meny0[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x43'); } else { meny0[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x2'); }
    };

    function _0x4bae1e() {
        console['log'](_0x5d60('0x16'));
        var _0x4dfe09 = new XMLHttpRequest();
        var _0x3bfb5b = window[_0x5d60('0x61')] + _0x5d60('0x53') + new Date()[_0x5d60('0x15')]();
        _0x4dfe09[_0x5d60('0x12')] = function() { if (this[_0x5d60('0x62')] == 0x4 && this['status'] == 0xc8) { template_list = JSON[_0x5d60('0x58')](this['responseText']); if (!toggle_follow) _0x50c69d(); } };
        _0x4dfe09[_0x5d60('0x54')]('GET', _0x3bfb5b, !![]);
        _0x4dfe09[_0x5d60('0x40')]();
        console[_0x5d60('0x2d')](_0x5d60('0x2c'));
        image_list = [];
        _0x3f2810();
        setTimeout(_0x4bae1e, 0xea60);
    }

    function _0x5a0d91() {
        toggle_show = !toggle_show;
        if (toggle_show) {
            document['getElementById'](_0x5d60('0x6b'))[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x43');
            document[_0x5d60('0x50')](_0x5d60('0x5c'))[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x43');
            document[_0x5d60('0x50')](_0x5d60('0x22'))[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x2');
            document[_0x5d60('0x6a')];
            d(_0x5d60('0x4c'))[_0x5d60('0x65')] = function() {};
            _0x3f2810();
        } else {
            document[_0x5d60('0x50')](_0x5d60('0x6b'))[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x2');
            document[_0x5d60('0x50')](_0x5d60('0x5c'))[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x2');
            document['getElementById'](_0x5d60('0x22'))['style'][_0x5d60('0x4a')] = _0x5d60('0x43');
            document['getElementById'](_0x5d60('0x22'))[_0x5d60('0x5b')] = _0x5d60('0x3b');
            document[_0x5d60('0x50')]('minimapbg')['onclick'] = function() { _0x5a0d91(); };
        }
    }

    function _0x1a42aa() {
        if (!zooming_in) return;
        zoomlevel = zoomlevel * 1.1;
        if (zoomlevel > 0x2d) { zoomlevel = 0x2d; return; }
        _0x2f11d0();
        _0xed8fd0();
        _0x3f2810();
        setTimeout(_0x1a42aa, zoom_time);
        console[_0x5d60('0x2d')](_0x5d60('0x24'));
    }

    function _0x3f3cdd() {
        if (!zooming_out) return;
        zoomlevel = zoomlevel / 1.1;
        if (zoomlevel < 0x1) { zoomlevel = 0x1; return; }
        _0x2f11d0();
        _0xed8fd0();
        _0x3f2810();
        setTimeout(_0x3f3cdd, zoom_time);
        console[_0x5d60('0x2d')](_0x5d60('0x5f'));
    }

    function _0x3f2810() {
        if (!toggle_show) return;
        if (template_list == null) return;
        var _0x314b30 = x_window * 0x1 - minimap[_0x5d60('0x1f')] / zoomlevel / 0x2;
        var _0x325f4c = x_window * 0x1 + minimap[_0x5d60('0x1f')] / zoomlevel / 0x2;
        var _0x1b4ed6 = y_window * 0x1 - minimap[_0x5d60('0x25')] / zoomlevel / 0x2;
        var _0x3894c1 = y_window * 0x1 + minimap[_0x5d60('0x25')] / zoomlevel / 0x2;
        var _0x4016ab = [];
        for (var _0xdfdbc8 in template_list) _0x4016ab['push'](_0xdfdbc8);
        needed_templates = [];
        var _0x2c04f9;
        for (_0x2c04f9 = 0x0; _0x2c04f9 < _0x4016ab[_0x5d60('0x7')]; _0x2c04f9++) {
            template = _0x4016ab[_0x2c04f9];
            var _0x2465cb = parseInt(template_list[template]['x']) * 0x1;
            var _0x400007 = parseInt(template_list[template]['y']) * 0x1;
            var _0x1e6e41 = parseInt(template_list[template]['x']) + parseInt(template_list[template][_0x5d60('0x1f')]);
            var _0x382f73 = parseInt(template_list[template]['y']) + parseInt(template_list[template][_0x5d60('0x25')]);
            if (!x_window[_0x5d60('0x35')](_0x2465cb - range * 0x1, _0x1e6e41 + range * 0x1)) continue;
            if (!y_window['between'](_0x400007 - range * 0x1, _0x382f73 + range * 0x1)) continue;
            console[_0x5d60('0x2d')]('Template\x20' + template + _0x5d60('0x2b'));
            needed_templates[_0x5d60('0x67')](template);
        }
        if (needed_templates[_0x5d60('0x7')] == 0x0) {
            if (zooming_in == ![] && zooming_out == ![]) {
                document[_0x5d60('0x50')]('minimap-box')['style']['display'] = _0x5d60('0x2');
                document[_0x5d60('0x50')]('minimap-text')[_0x5d60('0x33')][_0x5d60('0x4a')] = 'block';
            }
        } else {
            document[_0x5d60('0x50')](_0x5d60('0x6b'))[_0x5d60('0x33')][_0x5d60('0x4a')] = _0x5d60('0x43');
            document['getElementById'](_0x5d60('0x22'))['style'][_0x5d60('0x4a')] = 'none';
            counter = 0x0;
            for (_0x2c04f9 = 0x0; _0x2c04f9 < needed_templates[_0x5d60('0x7')]; _0x2c04f9++) { if (image_list[needed_templates[_0x2c04f9]] == null) { _0x4b004b(needed_templates[_0x2c04f9]); } else { counter += 0x1; if (counter == needed_templates['length']) _0x366ea0(); } }
        }
    }

    function _0x4b004b(_0x2a0745) {
        console[_0x5d60('0x2d')](_0x5d60('0x0') + _0x2a0745);
        image_list[_0x2a0745] = new Image();
        image_list[_0x2a0745]['crossOrigin'] = '';
        if (cachebreaker != null) image_list[_0x2a0745][_0x5d60('0x51')] = window[_0x5d60('0x61')] + 'd/' + template_list[_0x2a0745][_0x5d60('0x45')];
        else image_list[_0x2a0745][_0x5d60('0x51')] = window[_0x5d60('0x61')] + 'd/' + template_list[_0x2a0745][_0x5d60('0x45')];
        image_list[_0x2a0745][_0x5d60('0x1e')] = function() {
            counter += 0x1;
            console[_0x5d60('0x2d')](_0x5d60('0x10'));
            let _0x399c75 = document[_0x5d60('0x4d')](_0x5d60('0x13')),
                _0x4514b8 = _0x399c75[_0x5d60('0x11')]('2d');
            _0x399c75[_0x5d60('0x1f')] = image_list[_0x2a0745][_0x5d60('0x1f')];
            _0x399c75[_0x5d60('0x25')] = image_list[_0x2a0745][_0x5d60('0x25')];
            _0x4514b8['drawImage'](image_list[_0x2a0745], 0x0, 0x0, image_list[_0x2a0745][_0x5d60('0x1f')], image_list[_0x2a0745][_0x5d60('0x25')]);
            image_list[_0x2a0745] = _0x399c75;
            image_list[_0x2a0745]['ctx'] = _0x4514b8;
            image_list[_0x2a0745][_0x5d60('0x1a')] = _0x4514b8['getImageData'](0x0, 0x0, _0x399c75[_0x5d60('0x1f')], _0x399c75[_0x5d60('0x25')])[_0x5d60('0x1a')];
            if (counter == needed_templates['length']) _0x366ea0();
        };
    }

    function _0x366ea0() {
        ctx_minimap['clearRect'](0x0, 0x0, minimap[_0x5d60('0x1f')], minimap[_0x5d60('0x25')]);
        var _0x1e8b7e = x_window * 0x1 - minimap['width'] / zoomlevel / 0x2;
        var _0x5d3417 = y_window * 0x1 - minimap[_0x5d60('0x25')] / zoomlevel / 0x2;
        var _0x12697;
        for (_0x12697 = 0x0; _0x12697 < needed_templates[_0x5d60('0x7')]; _0x12697++) {
            var _0x20e647 = needed_templates[_0x12697];
            var _0x100efb = (template_list[_0x20e647]['x'] * 0x1 - _0x1e8b7e * 0x1) * zoomlevel;
            var _0x445f10 = (template_list[_0x20e647]['y'] * 0x1 - _0x5d3417 * 0x1) * zoomlevel;
            var _0x114374 = zoomlevel * image_list[_0x20e647][_0x5d60('0x1f')];
            var _0x4f2616 = zoomlevel * image_list[_0x20e647][_0x5d60('0x25')];
            var _0x11289a = image_list[_0x20e647];
            ctx_minimap[_0x5d60('0xe')](_0x11289a, _0x100efb, _0x445f10, _0x114374, _0x4f2616);
        }
    }

    function _0x2f11d0() {
        ctx_minimap_board[_0x5d60('0x3d')](0x0, 0x0, minimap_board[_0x5d60('0x1f')], minimap_board[_0x5d60('0x25')]);
        if (zoomlevel <= 4.6) return;
        ctx_minimap_board[_0x5d60('0x18')]();
        var _0x5ee20b = minimap_board[_0x5d60('0x1f')] + zoomlevel;
        var _0x4cffae = minimap_board[_0x5d60('0x25')] + zoomlevel;
        var _0x4b8755 = minimap['width'] / 0x2 % zoomlevel - zoomlevel;
        var _0x209e8d = minimap[_0x5d60('0x25')] / 0x2 % zoomlevel - zoomlevel;
        var _0x25fb6d = 0x1 * zoomlevel;
        for (var _0x1ae5fe = 0x0; _0x1ae5fe <= _0x5ee20b; _0x1ae5fe += _0x25fb6d) {
            ctx_minimap_board[_0x5d60('0x27')](_0x1ae5fe + _0x4b8755, _0x209e8d);
            ctx_minimap_board[_0x5d60('0x5d')](_0x1ae5fe + _0x4b8755, _0x4cffae + _0x209e8d);
        }
        for (var _0x1ae5fe = 0x0; _0x1ae5fe <= _0x4cffae; _0x1ae5fe += _0x25fb6d) {
            ctx_minimap_board[_0x5d60('0x27')](_0x4b8755, _0x1ae5fe + _0x209e8d);
            ctx_minimap_board['lineTo'](_0x5ee20b + _0x4b8755, _0x1ae5fe + _0x209e8d);
        }
        ctx_minimap_board[_0x5d60('0x56')] = 'black';
        ctx_minimap_board[_0x5d60('0x44')]();
    }

    function _0xed8fd0() {
        var _0x2ae54b = x_window * 0x1 - minimap[_0x5d60('0x1f')] / zoomlevel / 0x2;
        var _0x164a3a = x_window * 0x1 + minimap['width'] / zoomlevel / 0x2;
        var _0x4b9cd6 = y_window * 0x1 - minimap[_0x5d60('0x25')] / zoomlevel / 0x2;
        var _0x40c846 = y_window * 0x1 + minimap[_0x5d60('0x25')] / zoomlevel / 0x2;
        ctx_minimap_cursor[_0x5d60('0x3d')](0x0, 0x0, minimap_cursor[_0x5d60('0x1f')], minimap_cursor[_0x5d60('0x25')]);
        if (x < _0x2ae54b || x > _0x164a3a || y < _0x4b9cd6 || y > _0x40c846) return;
        xoff_c = x - _0x2ae54b;
        yoff_c = y - _0x4b9cd6;
        ctx_minimap_cursor[_0x5d60('0x18')]();
        ctx_minimap_cursor['lineWidth'] = zoomlevel / 0x3;
        ctx_minimap_cursor['strokeStyle'] = _0x5d60('0x2a');
        ctx_minimap_cursor[_0x5d60('0x23')](zoomlevel * xoff_c, zoomlevel * yoff_c, zoomlevel, zoomlevel);
        ctx_minimap_cursor[_0x5d60('0x44')]();
    }

    function _0x50c69d() {
        var _0x2f4258 = window[_0x5d60('0x28')][_0x5d60('0x5a')];
        x_window = _0x2f4258[_0x5d60('0x34')](re, '$2');
        y_window = _0x2f4258['replace'](re, '$3');
        if (x_window == _0x2f4258 || y_window == _0x2f4258) {
            x_window = 0x0;
            y_window = 0x0;
        }
        _0x3f2810();
    }

    function _0x4d388a() {
        var _0x3efcd5 = document[_0x5d60('0x1d')](_0x5d60('0x57'));
        coorDOM = document['getElementById']('coords');
    }
}