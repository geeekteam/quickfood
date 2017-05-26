/* ==============================================
 js obfuscated
 =============================================== */
$('#collapseMap')['on']('shown.bs.collapse', function(_0xa1ffx1) {
    (function(_0xa1ffx2) {
        if (!Array['prototype']['forEach']) {
            _0xa1ffx2['forEach'] = _0xa1ffx2['forEach'] || function(_0xa1ffx3, _0xa1ffx4) {
                    for (var _0xa1ffx5 = 0, _0xa1ffx6 = this['length']; _0xa1ffx5 < _0xa1ffx6; _0xa1ffx5++) {
                        if (_0xa1ffx5 in this) {
                            _0xa1ffx3['call'](_0xa1ffx4, this[_0xa1ffx5], _0xa1ffx5, this)
                        }
                    }
                }
        }
    })(Array['prototype']);
    var _0xa1ffx7, _0xa1ffx8 = [],
        _0xa1ffx9 = {
            "\x4D\x65\x78\x69\x63\x61\x6E": [{
                name: 'Mexican TacoMex',
                location_latitude: 48.873792,
                location_longitude: 2.295028,
                map_image_url: 'img/thumb_restaurant_map.png',
                name_point: 'Mexican TacoMex',
                type_point: 'American/Mexican',
                description_point: '135 Newtownards Road, Belfast, BT4<br><strong>Opening time</strong>: 09am-10pm.'
            }]
        };
    var _0xa1ffxa = {
        zoom: 14,
        center: new google['maps'].LatLng(48.865633, 2.321236),
        mapTypeId: google['maps']['MapTypeId']['ROADMAP'],
        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google['maps']['MapTypeControlStyle']['DROPDOWN_MENU'],
            position: google['maps']['ControlPosition']['LEFT_CENTER']
        },
        panControl: false,
        panControlOptions: {
            position: google['maps']['ControlPosition']['TOP_RIGHT']
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google['maps']['ZoomControlStyle']['LARGE'],
            position: google['maps']['ControlPosition']['TOP_RIGHT']
        },
        scrollwheel: false,
        scaleControl: false,
        scaleControlOptions: {
            position: google['maps']['ControlPosition']['TOP_LEFT']
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google['maps']['ControlPosition']['LEFT_TOP']
        },
        styles: [{
            "\x66\x65\x61\x74\x75\x72\x65\x54\x79\x70\x65": 'landscape',
            "\x73\x74\x79\x6C\x65\x72\x73": [{
                "\x68\x75\x65": '#FFBB00'
            }, {
                "\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E": 43.400000000000006
            }, {
                "\x6C\x69\x67\x68\x74\x6E\x65\x73\x73": 37.599999999999994
            }, {
                "\x67\x61\x6D\x6D\x61": 1
            }]
        }, {
            "\x66\x65\x61\x74\x75\x72\x65\x54\x79\x70\x65": 'road.highway',
            "\x73\x74\x79\x6C\x65\x72\x73": [{
                "\x68\x75\x65": '#FFC200'
            }, {
                "\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E": -61.8
            }, {
                "\x6C\x69\x67\x68\x74\x6E\x65\x73\x73": 45.599999999999994
            }, {
                "\x67\x61\x6D\x6D\x61": 1
            }]
        }, {
            "\x66\x65\x61\x74\x75\x72\x65\x54\x79\x70\x65": 'road.arterial',
            "\x73\x74\x79\x6C\x65\x72\x73": [{
                "\x68\x75\x65": '#FF0300'
            }, {
                "\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E": -100
            }, {
                "\x6C\x69\x67\x68\x74\x6E\x65\x73\x73": 51.19999999999999
            }, {
                "\x67\x61\x6D\x6D\x61": 1
            }]
        }, {
            "\x66\x65\x61\x74\x75\x72\x65\x54\x79\x70\x65": 'road.local',
            "\x73\x74\x79\x6C\x65\x72\x73": [{
                "\x68\x75\x65": '#FF0300'
            }, {
                "\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E": -100
            }, {
                "\x6C\x69\x67\x68\x74\x6E\x65\x73\x73": 52
            }, {
                "\x67\x61\x6D\x6D\x61": 1
            }]
        }, {
            "\x66\x65\x61\x74\x75\x72\x65\x54\x79\x70\x65": 'water',
            "\x73\x74\x79\x6C\x65\x72\x73": [{
                "\x68\x75\x65": '#0078FF'
            }, {
                "\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E": -13.200000000000003
            }, {
                "\x6C\x69\x67\x68\x74\x6E\x65\x73\x73": 2.4000000000000057
            }, {
                "\x67\x61\x6D\x6D\x61": 1
            }]
        }, {
            "\x66\x65\x61\x74\x75\x72\x65\x54\x79\x70\x65": 'poi',
            "\x73\x74\x79\x6C\x65\x72\x73": [{
                "\x68\x75\x65": '#00FF6A'
            }, {
                "\x73\x61\x74\x75\x72\x61\x74\x69\x6F\x6E": -1.0989010989011234
            }, {
                "\x6C\x69\x67\x68\x74\x6E\x65\x73\x73": 11.200000000000017
            }, {
                "\x67\x61\x6D\x6D\x61": 1
            }]
        }]
    };
    var _0xa1ffxb;
    _0xa1ffx7 = new google['maps'].Map(document['getElementById']('map'), _0xa1ffxa);
    for (var _0xa1ffxc in _0xa1ffx9) {
        _0xa1ffx9[_0xa1ffxc]['forEach'](function(_0xa1ffxd) {
            _0xa1ffxb = new google['maps'].Marker({
                position: new google['maps'].LatLng(_0xa1ffxd['location_latitude'], _0xa1ffxd['location_longitude']),
                map: _0xa1ffx7,
                icon: 'img/pins/' + _0xa1ffxc + '.png'
            });
            if ('undefined' === typeof _0xa1ffx8[_0xa1ffxc]) {
                _0xa1ffx8[_0xa1ffxc] = []
            };
            _0xa1ffx8[_0xa1ffxc]['push'](_0xa1ffxb);
            google['maps']['event']['addListener'](_0xa1ffxb, 'click', (function() {
                _0xa1ffxf();
                _0xa1ffx10(_0xa1ffxd)['open'](_0xa1ffx7, this);
                _0xa1ffx7['setCenter'](new google['maps'].LatLng(_0xa1ffxd['location_latitude'], _0xa1ffxd['location_longitude']))
            }))
        })
    };

    function _0xa1ffxe() {
        for (var _0xa1ffxc in _0xa1ffx8) {
            _0xa1ffx8[_0xa1ffxc]['forEach'](function(_0xa1ffxb) {
                _0xa1ffxb['setMap'](null)
            })
        }
    }

    function _0xa1ffxf() {
        $('div.infoBox')['remove']()
    }

    function _0xa1ffx10(_0xa1ffxd) {
        return new InfoBox({
            content: '<div class="marker_info" id="marker_info">' + '<img src="' + _0xa1ffxd['map_image_url'] + '" alt=""/>' + '<h3>' + _0xa1ffxd['name_point'] + '</h3>' + '<em>' + _0xa1ffxd['type_point'] + '</em>' + '<span>' + _0xa1ffxd['description_point'] + '</span>' + '</div>',
            disableAutoPan: true,
            maxWidth: 0,
            pixelOffset: new google['maps'].Size(35, -170),
            closeBoxMargin: '5px -20px 2px 2px',
            closeBoxURL: 'http://www.google.com/intl/en_us/mapfiles/close.gif',
            isHidden: false,
            pane: 'floatPane',
            enableEventPropagation: true
        })
    }
})