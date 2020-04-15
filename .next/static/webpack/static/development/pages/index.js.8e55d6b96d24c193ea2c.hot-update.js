webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, INITIAL_VIEW_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_VIEW_STATE", function() { return INITIAL_VIEW_STATE; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deck.gl */ "./node_modules/deck.gl/dist/esm/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _assests_countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assests/countries */ "./assests/countries.js");
/* harmony import */ var _assests_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assests/codes */ "./assests/codes.js");




var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/index.tsx",
    _this3 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//@ts-ignore






var tileServer = 'https://c.tile.openstreetmap.org/';
var __N_SSG = true;
var INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 20,
  bearing: 0
};

var radius = function radius(opa) {
  var op = opa / 200;

  if (op > 100) {
    op = 100;
  }

  if (op < 20) {
    op *= 3;
  }

  return op;
};

var opacity = function opacity(opa) {
  var op = opa / 200;

  if (op < 0.3) {
    op = 0.3;
  }

  return op;
};

var MAPBOX_TOKEN = 'pk.eyJ1IjoibWFydGlzOTAwIiwiYSI6ImNrMTZtazN4ODBhNGUzbW1yc245dG9nZzYifQ.T2ImKPTOuImP5pW11SXoWg';

function HomePage(_ref) {
  var _this = this,
      _jsx;

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    width: 400,
    height: 400,
    latitude: 50,
    longitude: 0,
    zoom: 1,
    visibilityConstraints: 1
  }),
      viewport = _useState[0],
      setViewport = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Infected"),
      type = _useState2[0],
      setType = _useState2[1];

  return __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      flexDirection: 'row',
      display: 'flex',
      height: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      position: 'relative',
      height: 'calc(100vh - 112px)',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("h3", {
    style: {
      color: 'white',
      fontFamily: 'Poppins',
      marginBottom: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "Coronavirus COVID-19"), __jsx("h5", {
    style: {
      color: 'grey',
      fontFamily: 'Poppins',
      marginTop: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "Global Cases"), __jsx(deck_gl__WEBPACK_IMPORTED_MODULE_5__["default"], (_jsx = {
    initialViewState: {
      longitude: -74.006,
      latitude: 40.7128,
      zoom: 12
    },
    width: 400,
    height: 400,
    layers: function layers() {
      var _this$props = _this.props,
          _this$props$autoHighl = _this$props.autoHighlight,
          autoHighlight = _this$props$autoHighl === void 0 ? true : _this$props$autoHighl,
          _this$props$highlight = _this$props.highlightColor,
          highlightColor = _this$props$highlight === void 0 ? [60, 60, 60, 40] : _this$props$highlight;
      return [new deck_gl__WEBPACK_IMPORTED_MODULE_5__["TileLayer"]({
        pickable: true,
        onHover: _this._onHover,
        autoHighlight: autoHighlight,
        highlightColor: highlightColor,
        opacity: 1,
        // https://wiki.openstreetmap.org/wiki/Zoom_levels
        minZoom: 0,
        maxZoom: 19,
        renderSubLayers: function renderSubLayers(props) {
          var _props$tile = props.tile,
              x = _props$tile.x,
              y = _props$tile.y,
              z = _props$tile.z,
              bbox = _props$tile.bbox;
          var west = bbox.west,
              south = bbox.south,
              east = bbox.east,
              north = bbox.north;
          return new deck_gl__WEBPACK_IMPORTED_MODULE_5__["BitmapLayer"](props, {
            image: "".concat(tileServer, "/").concat(z, "/").concat(x, "/").concat(y, ".png"),
            bounds: [west, south, east, north]
          });
        }
      })];
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "initialViewState", INITIAL_VIEW_STATE), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "controller", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 25
  }), _jsx), function () {
    var _this$state = _this.state,
        x = _this$state.x,
        y = _this$state.y,
        hoveredObject = _this$state.hoveredObject;

    var _ref2 = hoveredObject || {},
        sourceLayer = _ref2.sourceLayer,
        tile = _ref2.tile;

    return sourceLayer && tile && __jsx("div", {
      className: "tooltip",
      style: {
        left: x,
        top: y
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 41
      }
    }, "tile: x: ", tile.x, ", y: ", tile.y, ", z: ", tile.z);
  })))), Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return __jsx("div", {
      style: {
        height: 'calc(100vh - 41px)',
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        background: 'rgb(34,37,41)'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 28
      }
    }, __jsx("h3", {
      style: {
        color: 'white',
        fontFamily: 'Poppins'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }
    }, "Cases Info"), __jsx("span", {
      style: {
        justifyContent: 'space-around',
        width: '100%',
        display: 'flex'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, __jsx("button", {
      onClick: function onClick() {
        return setType("Infected");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }, "Infected"), __jsx("button", {
      onClick: function onClick() {
        return setType("Deaths");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 29
      }
    }, "Deaths"), __jsx("button", {
      onClick: function onClick() {
        return setType("Recovered");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 29
      }
    }, "Recovered")), __jsx("ul", {
      style: {
        margin: 0,
        paddingLeft: 30,
        paddingRight: 30,
        height: '100%',
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        display: 'flex',
        flexDirection: 'column'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 25
      }
    }, __jsx(List, {
      data: data,
      type: type,
      handleAnimate: function handleAnimate(_long, lat) {
        return setViewport(_objectSpread({}, viewport, {
          latitude: lat,
          longitude: _long,
          zoom: 4,
          transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_6__["FlyToInterpolator"]()
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 29
      }
    })));
  }, [data, type]));
}

function Map(_ref3) {
  var data = _ref3.data,
      viewport = _ref3.viewport,
      setViewport = _ref3.setViewport;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    visible: false
  }),
      showPopup = _useState3[0],
      setShowPopup = _useState3[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, showPopup.visible === true && __jsx(LocationDetails, {
    showPopup: showPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 44
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewport, {
    width: "80vw",
    reuseMaps: false,
    height: "calc(100vh - 205px)",
    onViewportChange: setViewport,
    mapStyle: {
      "version": 8,
      "sources": {
        "raster-tiles": {
          "type": "raster",
          'tiles': ["https://c.tile.openstreetmap.org/".concat(1, "/", 2, "/", 3, ".png")],
          "tileSize": 256
        }
      },
      "layers": [{
        "id": "test",
        "type": "raster",
        "source": "raster-tiles",
        "minzoom": 0,
        "maxzoom": 22
      }]
    },
    onClick: function onClick(e) {
      var _e$features, _e$features$, _e$features$$properti;

      if (e === null || e === void 0 ? void 0 : (_e$features = e.features) === null || _e$features === void 0 ? void 0 : (_e$features$ = _e$features[0]) === null || _e$features$ === void 0 ? void 0 : (_e$features$$properti = _e$features$.properties) === null || _e$features$$properti === void 0 ? void 0 : _e$features$$properti.title) {
        if (data.areas.filter(function (item) {
          var _e$features2, _e$features2$, _e$features2$$propert;

          return item.displayName === (e === null || e === void 0 ? void 0 : (_e$features2 = e.features) === null || _e$features2 === void 0 ? void 0 : (_e$features2$ = _e$features2[0]) === null || _e$features2$ === void 0 ? void 0 : (_e$features2$$propert = _e$features2$.properties) === null || _e$features2$$propert === void 0 ? void 0 : _e$features2$$propert.title);
        }).length > 0) {
          setShowPopup({
            visible: true,
            region: data.areas.filter(function (item) {
              var _e$features3, _e$features3$, _e$features3$$propert;

              return item.displayName === (e === null || e === void 0 ? void 0 : (_e$features3 = e.features) === null || _e$features3 === void 0 ? void 0 : (_e$features3$ = _e$features3[0]) === null || _e$features3$ === void 0 ? void 0 : (_e$features3$$propert = _e$features3$.properties) === null || _e$features3$$propert === void 0 ? void 0 : _e$features3$$propert.title);
            })[0],
            country: true
          });
        } else {
          var index = data.areas.findIndex(function (item) {
            return item.areas.filter(function (item2) {
              var _e$features4, _e$features4$, _e$features4$$propert;

              return item2.displayName === (e === null || e === void 0 ? void 0 : (_e$features4 = e.features) === null || _e$features4 === void 0 ? void 0 : (_e$features4$ = _e$features4[0]) === null || _e$features4$ === void 0 ? void 0 : (_e$features4$$propert = _e$features4$.properties) === null || _e$features4$$propert === void 0 ? void 0 : _e$features4$$propert.title);
            }).length > 0;
          });
          setShowPopup({
            visible: true,
            region: data.areas[index].areas.filter(function (item) {
              var _e$features5, _e$features5$, _e$features5$$propert;

              return item.displayName === (e === null || e === void 0 ? void 0 : (_e$features5 = e.features) === null || _e$features5 === void 0 ? void 0 : (_e$features5$ = _e$features5[0]) === null || _e$features5$ === void 0 ? void 0 : (_e$features5$$propert = _e$features5$.properties) === null || _e$features5$$propert === void 0 ? void 0 : _e$features5$$propert.title);
            })[0],
            country: data.areas[index].displayName
          });
        }
      } else if (showPopup.visible === true) {
        setShowPopup({
          visible: false,
          location: null
        });
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Source"], {
    id: "Countries",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return data.areas.reduce(function (sum, val) {
          var obj = {
            type: 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [val["long"], val.lat]
            },
            'properties': {
              'title': val.displayName,
              'icon': 'monument',
              'total': val.totalConfirmed
            }
          };
          sum = !!sum ? [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sum), [obj]) : [obj];
          return sum;
        }, []);
      }, [data])
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 17
    }
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    'id': 'points',
    'type': 'circle',
    'source': 'points',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['get', 'total'], 1000, 5, 5000, 10, 10000, 15, 50000, 20, 100000, 25, 500000, 30, 10000000, 35],
      'circle-color': 'red',
      'circle-opacity': ['interpolate', ['linear'], ['get', 'total'], 1000, .5, 10000, .6, 100000, 0.8, 500000, 1]
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }))), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Source"], {
    id: "Cities",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
        return data.areas.reduce(function (sum, val) {
          val.areas.map(function (item) {
            var obj = {
              type: 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [item["long"], item.lat]
              },
              'properties': {
                'title': item.displayName,
                'icon': 'monument',
                total: item.totalConfirmed
              }
            };
            sum = !!sum ? [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sum), [obj]) : [obj];
          });
          return sum;
        }, []);
      }, [data])
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    'id': 'points2',
    'type': 'circle',
    'source': 'points',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['get', 'total'], 50, 4, 100, 5, 500, 6, 1000, 7, 5000, 8, 10000, 9],
      'circle-color': 'red',
      'circle-opacity': 0.5
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 21
    }
  }))), showPopup.visible && __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Popup"], {
    latitude: showPopup.region.lat,
    longitude: showPopup.region["long"],
    closeButton: true,
    offsetTop: -10,
    offsetLeft: 10,
    closeOnClick: false,
    onClose: function onClose() {
      return setShowPopup({
        visible: false,
        location: null
      });
    },
    anchor: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 39
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      borderRadius: '50%',
      width: 20,
      height: 20,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "https://www.countryflags.io/".concat(Object(_assests_codes__WEBPACK_IMPORTED_MODULE_8__["default"])(showPopup.country === true ? showPopup.region.displayName : showPopup.country) || 'us', "/shiny/64.png"),
    alt: "123",
    style: {
      width: '160%',
      height: '160%',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 33
    }
  })), __jsx("h3", {
    style: {
      color: 'black',
      paddingLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 29
    }
  }, showPopup.region.displayName)), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -30,
      marginBottom: -20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'red'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 29
    }
  }, showPopup.region.totalConfirmed.toLocaleString('en-US')), __jsx("h2", {
    style: {
      color: 'black',
      paddingLeft: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 29
    }
  }, "INFECTED"))))));
}

function List(_ref4) {
  var _this2 = this;

  var data = _ref4.data,
      type = _ref4.type,
      handleAnimate = _ref4.handleAnimate;

  function sorted() {
    if (type === "Infected") {
      return data.areas.sort(function (a, b) {
        return b.totalConfirmed - a.totalConfirmed;
      });
    } else if (type === "Deaths") {
      return data.areas.sort(function (a, b) {
        return b.totalDeaths - a.totalDeaths;
      });
    } else if (type === "Recovered") {
      return data.areas.sort(function (a, b) {
        return b.totalRecovered - a.totalRecovered;
      });
    }
  }

  if (sorted.length > 0) return null;
  return sorted().map(function (area) {
    var _area$totalConfirmed, _area$totalRecovered, _area$totalDeaths;

    return __jsx("li", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 9
      }
    }, __jsx("div", {
      style: {
        borderRadius: '50%',
        width: 20,
        height: 20,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      onClick: function onClick() {
        return handleAnimate(area["long"], area.lat);
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://www.countryflags.io/".concat(Object(_assests_codes__WEBPACK_IMPORTED_MODULE_8__["default"])(area.displayName) || 'us', "/shiny/64.png"),
      alt: "123",
      style: {
        width: '160%',
        height: '160%',
        objectFit: 'cover',
        borderRadius: '50%'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 17
      }
    })), __jsx("h5", {
      style: {
        paddingLeft: 15,
        color: 'grey',
        margin: '0 auto 0 0'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 13
      }
    }, area.displayName), __jsx("h5", {
      style: {
        color: 'white'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 13
      }
    }, type === "Infected" ? (_area$totalConfirmed = area.totalConfirmed) === null || _area$totalConfirmed === void 0 ? void 0 : _area$totalConfirmed.toLocaleString('en-US') : type === "Recovered" ? (_area$totalRecovered = area.totalRecovered) === null || _area$totalRecovered === void 0 ? void 0 : _area$totalRecovered.toLocaleString('en-US') : type === "Deaths" && ((_area$totalDeaths = area.totalDeaths) === null || _area$totalDeaths === void 0 ? void 0 : _area$totalDeaths.toLocaleString('en-US'))));
  });
}

var LocationDetails = function LocationDetails(_ref5) {
  var _showPopup$region$tot, _showPopup$region$tot2, _showPopup$region$tot3, _showPopup$region$tot4, _showPopup$region$tot5, _showPopup$region$tot6;

  var showPopup = _ref5.showPopup;
  return __jsx("div", {
    style: {
      width: 400,
      height: 200,
      position: 'absolute',
      top: 25,
      left: 25,
      backgroundColor: 'white',
      zIndex: 99999999,
      padding: 15,
      borderRadius: 8
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  }, showPopup.country === true ? __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      borderRadius: '50%',
      width: 20,
      height: 20,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://www.countryflags.io/".concat(Object(_assests_codes__WEBPACK_IMPORTED_MODULE_8__["default"])(showPopup.country === true ? showPopup.region.displayName : showPopup.country) || 'us', "/shiny/64.png"),
    alt: "123",
    style: {
      width: '160%',
      height: '160%',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 25
    }
  })), __jsx("h3", {
    style: {
      color: 'black',
      paddingLeft: 10
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 21
    }
  }, showPopup.region.displayName)) : __jsx("span", {
    style: {
      color: 'black',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 111
    }
  }, showPopup.region.displayName, " "), " ", __jsx("label", {
    style: {
      paddingLeft: 8
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 152
    }
  }, showPopup.country)), __jsx("p", {
    style: {
      flex: 1,
      color: 'rgb(252,184,44)',
      fontSize: 12
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 76
    }
  }, "Confirmed:"), "  ", (_showPopup$region$tot = (_showPopup$region$tot2 = showPopup.region.totalConfirmed) === null || _showPopup$region$tot2 === void 0 ? void 0 : _showPopup$region$tot2.toLocaleString('en-US')) !== null && _showPopup$region$tot !== void 0 ? _showPopup$region$tot : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'rgb(50,203,111)',
      fontSize: 12
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 76
    }
  }, "Recovered:"), (_showPopup$region$tot3 = (_showPopup$region$tot4 = showPopup.region.totalRecovered) === null || _showPopup$region$tot4 === void 0 ? void 0 : _showPopup$region$tot4.toLocaleString('en-US')) !== null && _showPopup$region$tot3 !== void 0 ? _showPopup$region$tot3 : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'red',
      fontSize: 12
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 64
    }
  }, "Deaths:"), " ", (_showPopup$region$tot5 = (_showPopup$region$tot6 = showPopup.region.totalDeaths) === null || _showPopup$region$tot6 === void 0 ? void 0 : _showPopup$region$tot6.toLocaleString('en-US')) !== null && _showPopup$region$tot5 !== void 0 ? _showPopup$region$tot5 : 0), showPopup.country === true && __jsx("h3", {
    style: {
      flex: 1,
      color: 'black',
      fontSize: 12
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 44
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 98
    }
  }, "Population:"), "  ", Number(showPopup.region.totalConfirmed * 100 / Object(_assests_countries__WEBPACK_IMPORTED_MODULE_7__["getPopulation"])(showPopup.region.displayName)).toFixed(2), "%"));
};

var RenderCountries = function RenderCountries(_ref6) {
  var data = _ref6.data,
      showPopup = _ref6.showPopup,
      setShowPopup = _ref6.setShowPopup;
  return data.areas.map(function (region) {
    var _showPopup$region;

    return __jsx(RedBubbleMarker, {
      key: region.displayName,
      width: 10,
      region: region,
      onClick: function onClick() {
        return setShowPopup({
          visible: true,
          region: region,
          country: true
        });
      },
      selected: region.displayName === ((_showPopup$region = showPopup.region) === null || _showPopup$region === void 0 ? void 0 : _showPopup$region.displayName),
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 16
      }
    });
  });
};

var RenderCities = function RenderCities(_ref7) {
  var data = _ref7.data,
      showPopup = _ref7.showPopup,
      setShowPopup = _ref7.setShowPopup;
  return data.areas.map(function (c) {
    return c.areas.map(function (region) {
      var _showPopup$region2;

      return __jsx(RedBubbleMarker, {
        key: region.displayName,
        width: 5,
        region: region,
        onClick: function onClick() {
          return setShowPopup({
            visible: true,
            region: region,
            country: c.displayName
          });
        },
        selected: region.displayName === ((_showPopup$region2 = showPopup.region) === null || _showPopup$region2 === void 0 ? void 0 : _showPopup$region2.displayName),
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 20
        }
      });
    });
  });
};

var RedBubbleMarker = function RedBubbleMarker(_ref8) {
  var width = _ref8.width,
      region = _ref8.region,
      onClick = _ref8.onClick,
      selected = _ref8.selected;
  return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Marker"], {
    key: region.displayName,
    longitude: region["long"],
    latitude: region.lat,
    captureDrag: false,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 5
    }
  }, __jsx("svg", {
    onClick: onClick,
    style: {
      cursor: 'pointer',
      fill: '#d00',
      stroke: 'none',
      width: width * 2 + 10,
      height: width * 2 + 10,
      transform: "translate(".concat(-width / 2, "px,").concat(-width, "px)")
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 9
    }
  }, __jsx("circle", {
    cx: width + 5,
    cy: width + 5,
    r: width,
    fill: "red",
    strokeWidth: selected ? 3 : 0,
    stroke: selected ? "orange" : "red",
    style: {
      fillOpacity: opacity(region.totalDeaths)
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.8e55d6b96d24c193ea2c.hot-update.js.map