webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, INITIAL_VIEW_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_VIEW_STATE", function() { return INITIAL_VIEW_STATE; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _assests_countries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assests/countries */ "./assests/countries.js");
/* harmony import */ var _assests_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assests/codes */ "./assests/codes.js");




var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/index.tsx",
    _this3 = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//@ts-nocheck





var tileServer = 'https://c.tile.openstreetmap.org/';
var __N_SSP = true;
var INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 20,
  bearing: 0
};

var opacity = function opacity(opa) {
  var op = opa / 200;

  if (op < 0.3) {
    op = 0.3;
  }

  return op;
};

var TOKEN = 'pk.eyJ1IjoiYWxla25hbWFydHluYXMiLCJhIjoiY2s5MXJpd3RzMDBsaDNtbnF6M29rMXlvYyJ9.fsq7LE6sCm9Sx5Zu2R5KZQ';

function HomePage(_ref) {
  var _this = this;

  var data = _ref.data,
      data2 = _ref.data2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    visible: false
  }),
      showPopup = _useState[0],
      setShowPopup = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    latitude: 50,
    longitude: 0,
    zoom: 2,
    visibilityConstraints: 1
  }),
      viewport = _useState2[0],
      setViewport = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Infected"),
      type = _useState3[0],
      setType = _useState3[1];

  return __jsx("div", {
    className: "jsx-2270821321" + " " + "tracker-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      flexDirection: 'row',
      display: 'flex',
      height: '100%',
      width: '100%'
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      position: 'relative',
      height: 'calc(100vh - 60px)',
      flexDirection: 'column'
    },
    className: "jsx-2270821321" + " " + "LOL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-around'
    },
    className: "jsx-2270821321" + " " + "aff",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("div", {
    style: {
      marginRight: 'auto'
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx("h3", {
    style: {
      color: 'white',
      fontFamily: 'Poppins',
      marginBottom: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, "Coronavirus COVID-19"), __jsx("h5", {
    style: {
      color: 'grey',
      fontFamily: 'Poppins',
      marginTop: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "Global Cases")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: '50%',
      margin: 'auto',
      justifyContent: 'space-around'
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, __jsx("div", {
    style: {},
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx("h6", {
    style: {
      color: 'rgb(194,49,54)',
      textAlign: 'start',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 37
    }
  }, "Infected"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, data.totalConfirmed.toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(194,49,54)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      background: 'black',
      padding: 15,
      borderRadius: 9
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx("h6", {
    style: {
      color: 'rgb(251,200,128)',
      textAlign: 'start',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, "Active"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, (data.totalConfirmed - data.totalDeaths - data.totalRecovered).toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(251,200,128)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      background: 'black',
      padding: 15,
      borderRadius: 9
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }, __jsx("h5", {
    style: {
      color: 'rgb(79,77,83)',
      textAlign: 'start',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 37
    }
  }, "Deaths"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }, data.totalDeaths.toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(79,77,83)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      background: 'black',
      padding: 15,
      borderRadius: 9
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, __jsx("h5", {
    style: {
      color: 'rgb(73,193,172)',
      textAlign: 'start',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  }, "Recovered"), __jsx("h2", {
    style: {
      textAlign: 'center',
      margin: 0
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, data.totalRecovered.toLocaleString('en-US')), __jsx("div", {
    style: {
      background: 'rgb(73,193,172)',
      height: 4,
      width: '80%',
      display: 'flex',
      marginTop: 5
    },
    className: "jsx-2270821321",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  })))), __jsx(Map, {
    data: data,
    viewport: viewport,
    setViewport: setViewport,
    showPopup: showPopup,
    setShowPopup: setShowPopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  })))), Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return __jsx("div", {
      className: "jsx-2270821321" + " " + "list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 28
      }
    }, __jsx("h3", {
      style: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'left',
        padding: 20
      },
      className: "jsx-2270821321",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, "Cases Info"), __jsx(TabBar, {
      setType: setType,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }), __jsx(List, {
      data: data,
      data2: data2,
      type: type,
      setShowPopup: setShowPopup,
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
        lineNumber: 167,
        columnNumber: 25
      }
    }));
  }, [data, type]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2270821321",
    __self: this
  }, ".jsx-2270821321{background:black;padding:15px;borderRadius:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkt3QixBQUUrQyxpQkFDSixhQUNJLGlCQUN0QiIsImZpbGUiOiIvVXNlcnMvREVWL0Rlc2t0b3AvY292aWR3ZWIvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy9AdHMtbm9jaGVja1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBEZWNrR0wsIHsgVGlsZUxheWVyLCBCaXRtYXBMYXllciB9IGZyb20gXCJkZWNrLmdsXCI7XG5pbXBvcnQgUmVhY3RNYXBHTCwgeyBNYXJrZXIsIFBvcHVwLCBTdGF0aWNNYXAsIFNvdXJjZSwgTGF5ZXIsIEZseVRvSW50ZXJwb2xhdG9yIH0gZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCB7IGdldFBvcHVsYXRpb24gfSBmcm9tICcuLi9hc3Nlc3RzL2NvdW50cmllcydcbmltcG9ydCBNYXAyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwMidcbmltcG9ydCBjb2RlcyBmcm9tICcuLi9hc3Nlc3RzL2NvZGVzJ1xuXG5jb25zdCB0aWxlU2VydmVyID0gJ2h0dHBzOi8vYy50aWxlLm9wZW5zdHJlZXRtYXAub3JnLyc7XG5cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfVklFV19TVEFURSA9IHtcbiAgICBsYXRpdHVkZTogNDcuNjUsXG4gICAgbG9uZ2l0dWRlOiA3LFxuICAgIHpvb206IDQuNSxcbiAgICBtYXhab29tOiAyMCxcbiAgICBiZWFyaW5nOiAwXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFQSSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIGFyZWFzOiBBUElbXTtcbiAgICB0b3RhbENvbmZpcm1lZDogbnVtYmVyO1xuICAgIHRvdGFsRGVhdGhzOiBudW1iZXI7XG4gICAgdG90YWxSZWNvdmVyZWQ6IG51bWJlcjtcbiAgICB0b3RhbFJlY292ZXJlZERlbHRhOiBudW1iZXI7XG4gICAgdG90YWxEZWF0aHNEZWx0YTogbnVtYmVyO1xuICAgIHRvdGFsQ29uZmlybWVkRGVsdGE6IG51bWJlcjtcbiAgICBsYXN0VXBkYXRlZDogRGF0ZTtcbiAgICBsYXQ/OiBudW1iZXI7XG4gICAgbG9uZz86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElIaXN0b3J5RGF0YSB7XG4gICAgaG9zcGl0YWxpemVkV2l0aFN5bXB0b21zOiBudW1iZXI7XG4gICAgaW50ZW5zaXZlVGhlcmFweTogbnVtYmVyO1xuICAgIHRvdGFsSG9zcGl0YWxpemVkOiBudW1iZXI7XG4gICAgaG9tZUluc3VsYXRpb246IG51bWJlcjtcbiAgICB0b3RhbEN1cnJlbnRseVBvc2l0aXZlOiBudW1iZXI7XG4gICAgbmV3Q3VycmVudGx5UG9zaXRpdmU6IG51bWJlcjtcbiAgICBkaXNjaGFyZ2VkSGVhbGVkOiBudW1iZXI7XG4gICAgZGVjZWFzZWQ6IG51bWJlcjtcbiAgICB0b3RhbENhc2VzOiBudW1iZXI7XG4gICAgdGFtcG9uaTogbnVtYmVyO1xuICAgIHNvdXJjZVVybDogc3RyaW5nO1xuICAgIGxhc3RVcGRhdGVkQXRTb3VyY2U6IERhdGU7XG4gICAgbGFzdFVwZGF0ZWRBdEFwaWZ5OiBEYXRlO1xuICAgIHJlYWRNZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcbiAgICBsYXRpdHVkZTogbnVtYmVyO1xuICAgIGxvbmdpdHVkZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZGF5IHtcbiAgICBkZWF0aHM6IG51bWJlcjtcbiAgICBjb25maXJtZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxjdWxhdGVkIHtcbiAgICBkZWF0aF9yYXRlOiBudW1iZXI7XG4gICAgcmVjb3ZlcnlfcmF0ZTogbnVtYmVyO1xuICAgIHJlY292ZXJlZF92c19kZWF0aF9yYXRpbz86IGFueTtcbiAgICBjYXNlc19wZXJfbWlsbGlvbl9wb3B1bGF0aW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF0ZXN0RGF0YSB7XG4gICAgZGVhdGhzOiBudW1iZXI7XG4gICAgY29uZmlybWVkOiBudW1iZXI7XG4gICAgcmVjb3ZlcmVkOiBudW1iZXI7XG4gICAgY3JpdGljYWw6IG51bWJlcjtcbiAgICBjYWxjdWxhdGVkOiBDYWxjdWxhdGVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFQSTIge1xuICAgIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIHBvcHVsYXRpb246IG51bWJlcjtcbiAgICB1cGRhdGVkX2F0OiBEYXRlO1xuICAgIHRvZGF5OiBUb2RheTtcbiAgICBsYXRlc3RfZGF0YTogTGF0ZXN0RGF0YTtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgZGF0YTogQVBJXG4gICAgZGF0YTI6IEFycmF5PEFQSTI+LFxufVxuXG5jb25zdCBvcGFjaXR5ID0gKG9wYSkgPT4ge1xuICAgIGxldCBvcCA9IChvcGEpIC8gMjAwXG4gICAgaWYgKG9wIDwgMC4zKSB7XG4gICAgICAgIG9wID0gMC4zXG4gICAgfVxuICAgIHJldHVybiBvcFxufVxuXG5jb25zdCBUT0tFTiA9ICdway5leUoxSWpvaVlXeGxhMjVoYldGeWRIbHVZWE1pTENKaElqb2lZMnM1TVhKcGQzUnpNREJzYUROdGJuRjZNMjlyTVhsdll5SjkuZnNxN0xFNnNDbTlTeDVadTJSNUtaUSc7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHsgZGF0YSwgZGF0YTIgfTogSVByb3BzKSB7XG4gICAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXTogYW55ID0gdXNlU3RhdGU8eyB2aXNpYmxlOiBib29sZWFuLCByZWdpb24/OiBBUEksIGNvdW50cnk/OiBib29sZWFuIHwgc3RyaW5nIH0+KHsgdmlzaWJsZTogZmFsc2UgfSlcbiAgICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XTogYW55ID0gdXNlU3RhdGUoe1xuICAgICAgICBsYXRpdHVkZTogNTAsXG4gICAgICAgIGxvbmdpdHVkZTogMCxcbiAgICAgICAgem9vbTogMixcbiAgICAgICAgdmlzaWJpbGl0eUNvbnN0cmFpbnRzOiAxXG4gICAgfSk7XG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGU8J0luZmVjdGVkJyB8ICdEZWF0aHMnIHwgJ1JlY292ZXJlZCc+KFwiSW5mZWN0ZWRcIilcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrZXItZmxleFwiID5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4JywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTE9MXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDYwcHgpJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWZmXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgcGFkZGluZzogMjAsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udEZhbWlseTogJ1BvcHBpbnMnLCBtYXJnaW5Cb3R0b206IDAgfX0+Q29yb25hdmlydXMgQ09WSUQtMTk8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdncmV5JywgZm9udEZhbWlseTogJ1BvcHBpbnMnLCBtYXJnaW5Ub3A6IDAgfX0+R2xvYmFsIENhc2VzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIHdpZHRoOiAnNTAlJywgbWFyZ2luOiAnYXV0bycsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IGNvbG9yOiAncmdiKDE5NCw0OSw1NCknLCB0ZXh0QWxpZ246ICdzdGFydCcsIG1hcmdpbjogMCB9fT5JbmZlY3RlZDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsQ29uZmlybWVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTk0LDQ5LDU0KScsIGhlaWdodDogNCwgd2lkdGg6ICc4MCUnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogNSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnYmxhY2snLCBwYWRkaW5nOiAxNSwgYm9yZGVyUmFkaXVzOiA5IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IGNvbG9yOiAncmdiKDI1MSwyMDAsMTI4KScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PkFjdGl2ZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PnsoZGF0YS50b3RhbENvbmZpcm1lZCAtIGRhdGEudG90YWxEZWF0aHMgLSBkYXRhLnRvdGFsUmVjb3ZlcmVkKS50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDI1MSwyMDAsMTI4KScsIGhlaWdodDogNCwgd2lkdGg6ICc4MCUnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogNSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnYmxhY2snLCBwYWRkaW5nOiAxNSwgYm9yZGVyUmFkaXVzOiA5IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAncmdiKDc5LDc3LDgzKScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PkRlYXRoczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsRGVhdGhzLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoNzksNzcsODMpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdibGFjaycsIHBhZGRpbmc6IDE1LCBib3JkZXJSYWRpdXM6IDkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdyZ2IoNzMsMTkzLDE3MiknLCB0ZXh0QWxpZ246ICdzdGFydCcsIG1hcmdpbjogMCB9fT5SZWNvdmVyZWQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogMCB9fT57ZGF0YS50b3RhbFJlY292ZXJlZC50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDczLDE5MywxNzIpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgZGF0YT17ZGF0YX0gdmlld3BvcnQ9e3ZpZXdwb3J0fSBzZXRWaWV3cG9ydD17c2V0Vmlld3BvcnR9IHNob3dQb3B1cD17c2hvd1BvcHVwfSBzZXRTaG93UG9wdXA9e3NldFNob3dQb3B1cH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TWFwMiBkYXRhPXtkYXRhfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoMiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Ub3RhbCBDb25maXJtZWQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAwIH19PntkYXRhLnRvdGFsQ29uZmlybWVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDE+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgdGV4dEFsaWduOiAnbGVmdCcsIHBhZGRpbmc6IDIwIH19PkNhc2VzIEluZm88L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkJhciBzZXRUeXBlPXtzZXRUeXBlfSB0eXBlPXt0eXBlfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBkYXRhPXtkYXRhfSBkYXRhMj17ZGF0YTJ9IHR5cGU9e3R5cGV9IHNldFNob3dQb3B1cD17c2V0U2hvd1BvcHVwfSBoYW5kbGVBbmltYXRlPXsobG9uZywgbGF0KSA9PiBzZXRWaWV3cG9ydCh7IC4uLnZpZXdwb3J0LCBsYXRpdHVkZTogbGF0LCBsb25naXR1ZGU6IGxvbmcsIHpvb206IDQsIHRyYW5zaXRpb25JbnRlcnBvbGF0b3I6IG5ldyBGbHlUb0ludGVycG9sYXRvcigpLCB9KX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9LCBbZGF0YSwgdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDlweDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2ID5cbiAgICApXG59XG5cblxuZnVuY3Rpb24gVGFiQmFyKHsgc2V0VHlwZSwgdHlwZSB9OiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiYmFyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFiYmFyLWl0ZW0gYCArICh0eXBlID09PSAnSW5mZWN0ZWQnICYmICdzZWxlY3RlZCcpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGFiYmFyLWl0ZW0tYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKCdJbmZlY3RlZCcpfT5JbmZlY3RlZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRhYmJhci1pdGVtIGAgKyAodHlwZSA9PT0gXCJEZWF0aHNcIiAmJiAnc2VsZWN0ZWQnKX0gPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0YWJiYXItaXRlbS1idXR0b24nIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoXCJEZWF0aHNcIil9PkRlYXRoczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRhYmJhci1pdGVtIGAgKyAodHlwZSA9PT0gXCJSZWNvdmVyZWRcIiAmJiAnc2VsZWN0ZWQnKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RhYmJhci1pdGVtLWJ1dHRvbicgb25DbGljaz17KCkgPT4gc2V0VHlwZShcIlJlY292ZXJlZFwiKX0+UmVjb3ZlcmVkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50YWJiYXItaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsIDIxLCAyMyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhci1pdGVtLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIwLCAyMSwgMjMpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhciAuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyLWl0ZW06OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhci1pdGVtOmhvdmVyOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmZ1bmN0aW9uIE1hcCh7IGRhdGEsIHZpZXdwb3J0LCBzZXRWaWV3cG9ydCwgc2hvd1BvcHVwLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBBUEksIHZpZXdwb3J0OiBhbnksIHNldFZpZXdwb3J0OiBhbnkgfSkge1xuXG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcFJlZi5jdXJyZW50LmdldE1hcCgpO1xuXG4gICAgICAgIGlmIChpc0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lOSVQnKVxuICAgICAgICAgICAgbWFwLm9uKCdtb3VzZWVudGVyJywgJ3BvaW50czIgJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTIzJylcbiAgICAgICAgICAgICAgICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFttYXBSZWYsIGlzTG9hZGVkXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uTG9hZChldnQpIHtcbiAgICAgICAgY29uc3QgbWFwID0gbWFwUmVmLmN1cnJlbnQuZ2V0TWFwKCk7XG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Lyoge3Nob3dQb3B1cC52aXNpYmxlID09PSB0cnVlICYmIDxMb2NhdGlvbkRldGFpbHMgc2hvd1BvcHVwPXtzaG93UG9wdXB9IC8+fSAqL31cbiAgICAgICAgICAgIDxSZWFjdE1hcEdMXG4gICAgICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICAgICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICAgICAgICAgIG9uTG9hZD17aGFuZGxlT25Mb2FkfVxuICAgICAgICAgICAgICAgIC8vIG9uSG92ZXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG1hcCA9IG1hcFJlZi5jdXJyZW50LmdldE1hcCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZT8uZmVhdHVyZXM/LmZpbHRlcihpdGVtID0+IGl0ZW0ubGF5ZXIuaWQgPT09ICdwb2ludHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzZXRIb3Zlcih0cnVlKVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2V0SG92ZXIoZmFsc2UpXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICAgICAgcmV1c2VNYXBzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9J2NhbGMoMTAwdmggLSAyMTBweCknXG4gICAgICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17dmlldyA9PiBzZXRWaWV3cG9ydCh2aWV3KX1cbiAgICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17VE9LRU59XG4gICAgICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYXJlYXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaXNwbGF5TmFtZSA9PT0gZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb246IGRhdGEuYXJlYXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaXNwbGF5TmFtZSA9PT0gZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpWzBdLCBjb3VudHJ5OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gZGF0YS5hcmVhcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmFyZWFzLmZpbHRlcihpdGVtMiA9PiBpdGVtMi5kaXNwbGF5TmFtZSA9PT0gZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uOiBkYXRhLmFyZWFzW2luZGV4XS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSlbMF0sIGNvdW50cnk6IGRhdGEuYXJlYXNbaW5kZXhdLmRpc3BsYXlOYW1lIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2hvd1BvcHVwLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQb3B1cCh7IHZpc2libGU6IGZhbHNlLCBsb2NhdGlvbjogbnVsbCB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U291cmNlIGlkPSdDb3VudHJpZXMnIHR5cGU9J2dlb2pzb24nIGRhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnJlZHVjZSgoc3VtLCB2YWw6IEFQSSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2VvbWV0cnknOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmxvbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydGllcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IHZhbC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpY29uJzogJ21vbnVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b3RhbCc6IHZhbC50b3RhbENvbmZpcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSA9ICEhc3VtID8gWy4uLnN1bSwgb2JqXSA6IFtvYmpdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICAgICAgICAgIH0sIFtkYXRhXSlcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdwb2ludHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICdwb2ludHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtcmFkaXVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZ2V0JywgJ3RvdGFsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCwgMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCwgMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwMCwgMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMDAsIDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMDAwLCAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwMDAwLCAzNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLWNvbG9yJzogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtb3BhY2l0eSc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2dldCcsICd0b3RhbCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCwgLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCwgLjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMDAsIDAuOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAwMCwgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NvdXJjZT5cblxuICAgICAgICAgICAgICAgIDxTb3VyY2UgaWQ9J0NpdGllcycgdHlwZT0nZ2VvanNvbicgZGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMucmVkdWNlKChzdW0sIHZhbDogQVBJKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmFyZWFzLm1hcCgoaXRlbTogQVBJKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZW9tZXRyeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24nOiAnbW9udW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBpdGVtLnRvdGFsQ29uZmlybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtID0gISFzdW0gPyBbLi4uc3VtLCBvYmpdIDogW29ial1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgICAgICAgICB9LCBbZGF0YV0pXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAncG9pbnRzMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc291cmNlJzogJ3BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydnZXQnLCAndG90YWwnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwLCA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCwgNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAsIDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCwgOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLWNvbG9yJzogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtb3BhY2l0eSc6IDAuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Tb3VyY2U+XG5cblxuICAgICAgICAgICAgICAgIHtzaG93UG9wdXAudmlzaWJsZSAmJiA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3Nob3dQb3B1cC5yZWdpb24ubGF0fVxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3Nob3dQb3B1cC5yZWdpb24ubG9uZ31cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogZmFsc2UsIGxvY2F0aW9uOiBudWxsIH0pfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBwYWRkaW5nOiA1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScsIHdpZHRoOiAyMCwgaGVpZ2h0OiAyMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuY291bnRyeWZsYWdzLmlvLyR7Y29kZXMoc2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWUgPyBzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lIDogc2hvd1BvcHVwLmNvdW50cnkpIHx8ICd1cyd9L3NoaW55LzY0LnBuZ2B9IGFsdD1cIjEyM1wiIHN0eWxlPXt7IHdpZHRoOiAnMTYwJScsIGhlaWdodDogJzE2MCUnLCBvYmplY3RGaXQ6ICdjb3ZlcicsIGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCB9fT57c2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpblRvcDogLTMwLCBtYXJnaW5Cb3R0b206IC0yMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntzaG93UG9wdXAucmVnaW9uLnRvdGFsQ29uZmlybWVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAsIG1hcmdpbjogJ2F1dG8gMCBhdXRvIGF1dG8nIH19PklORkVDVEVEPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW5Ub3A6IC0xNSwgbWFyZ2luQm90dG9tOiAtMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmdiKDUwLDIwMywxMTEpJyB9fT57c2hvd1BvcHVwLnJlZ2lvbi50b3RhbFJlY292ZXJlZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwLCBtYXJnaW46ICdhdXRvIDAgYXV0byBhdXRvJyB9fT5SRUNPVkVSRUQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpblRvcDogLTE1LCBtYXJnaW5Cb3R0b206IC0yMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PntzaG93UG9wdXAucmVnaW9uLnRvdGFsRGVhdGhzPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAsIG1hcmdpbjogJ2F1dG8gMCBhdXRvIGF1dG8nIH19PkRFQVRIUzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSAmJiA8aDMgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdibGFjaycsIGZvbnRTaXplOiAxMiwgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3B1bGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+IHtOdW1iZXIoKHNob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQgKiAxMDApIC8gZ2V0UG9wdWxhdGlvbihzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lKSkudG9GaXhlZCgyKX0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BvcHVwPn1cblxuICAgICAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIExpc3QoeyBkYXRhLCBkYXRhMiwgdHlwZSwgaGFuZGxlQW5pbWF0ZSwgc2V0U2hvd1BvcHVwIH06IHsgZGF0YTogYW55LCBkYXRhMjogQXJyYXk8QVBJMj4sIHR5cGU6IGFueSwgaGFuZGxlQW5pYW10ZTogYW55LCBzZXRTaG93UG9wdXA6IGFueSB9KSB7XG5cbiAgICBmdW5jdGlvbiBzb3J0ZWQoKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcIkluZmVjdGVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnNvcnQoKGE6IEFQSSwgYjogQVBJKSA9PiBiLnRvdGFsQ29uZmlybWVkIC0gYS50b3RhbENvbmZpcm1lZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJEZWF0aHNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMuc29ydCgoYTogQVBJLCBiOiBBUEkpID0+IGIudG90YWxEZWF0aHMgLSBhLnRvdGFsRGVhdGhzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlJlY292ZXJlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5zb3J0KChhOiBBUEksIGI6IEFQSSkgPT4gYi50b3RhbFJlY292ZXJlZCAtIGEudG90YWxSZWNvdmVyZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNvcnRlZC5sZW5ndGggPiAwKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiA8dWwgc3R5bGU9e3sgbWFyZ2luOiAwLCBwYWRkaW5nTGVmdDogMTAsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBzY3JvbGxCZWhhdmlvcjogJ3Ntb290aCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgIHtzb3J0ZWQoKS5tYXAoKGFyZWE6IEFQSSkgPT4gKFxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGRpc3BsYXk6ICctd2Via2l0LWZsZXgnLCBmbGV4OiAnMSAwIGF1dG8nLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJhY2tncm91bmQ6ICdyZ2IoMjgsIDMwLCAzNCknLCBjdXJzb3I6ICdwb2ludGVyJywgYm9yZGVyUmFkaXVzOiA4LCBtYXJnaW5Ub3A6IDEwLCBwYWRkaW5nTGVmdDogMjAsIHBhZGRpbmdSaWdodDogMjAgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbjogZGF0YS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBhcmVhLmRpc3BsYXlOYW1lKVswXSwgY291bnRyeTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIGhhbmRsZUFuaW1hdGUoYXJlYS5sb25nLCBhcmVhLmxhdClcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNTAlJywgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuY291bnRyeWZsYWdzLmlvLyR7Y29kZXMoYXJlYS5kaXNwbGF5TmFtZSkgfHwgJ3VzJ30vc2hpbnkvNjQucG5nYH0gYWx0PVwiMTIzXCIgc3R5bGU9e3sgd2lkdGg6ICcxNjAlJywgaGVpZ2h0OiAnMTYwJScsIG9iamVjdEZpdDogJ2NvdmVyJywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxNSwgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknLCBtYXJnaW46ICcwIGF1dG8gMCAwJyB9fT57YXJlYS5kaXNwbGF5TmFtZX08L2g1PlxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT57dHlwZSA9PT0gXCJJbmZlY3RlZFwiID8gYXJlYS50b3RhbENvbmZpcm1lZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgOiB0eXBlID09PSBcIlJlY292ZXJlZFwiID8gYXJlYS50b3RhbFJlY292ZXJlZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgOiB0eXBlID09PSBcIkRlYXRoc1wiICYmIGFyZWEudG90YWxEZWF0aHM/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDU+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICA8L3VsPlxufVxuXG5jb25zdCBMb2NhdGlvbkRldGFpbHMgPSAoeyBzaG93UG9wdXAgfTogYW55KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBib3R0b206IDI1LFxuICAgICAgICAgICAgbGVmdDogMjUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTk5LFxuICAgICAgICAgICAgcGFkZGluZzogMTUsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDhcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7c2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnLCB3aWR0aDogMjAsIGhlaWdodDogMjAsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtjb2RlcyhzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSA/IHNob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWUgOiBzaG93UG9wdXAuY291bnRyeSkgfHwgJ3VzJ30vc2hpbnkvNjQucG5nYH0gYWx0PVwiMTIzXCIgc3R5bGU9e3sgd2lkdGg6ICcxNjAlJywgaGVpZ2h0OiAnMTYwJScsIG9iamVjdEZpdDogJ2NvdmVyJywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAgfX0+e3Nob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PjxoMz57c2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZX0gPC9oMz4gPGxhYmVsIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA4IH19PntzaG93UG9wdXAuY291bnRyeX08L2xhYmVsPjwvc3Bhbj59XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ3JnYigyNTIsMTg0LDQ0KScsIGZvbnRTaXplOiAxMiB9fT48Yj5Db25maXJtZWQ6PC9iPiAge3Nob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQ/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpID8/IDB9PC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdyZ2IoNTAsMjAzLDExMSknLCBmb250U2l6ZTogMTIgfX0+PGI+UmVjb3ZlcmVkOjwvYj57c2hvd1BvcHVwLnJlZ2lvbi50b3RhbFJlY292ZXJlZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAxMiB9fT48Yj5EZWF0aHM6PC9iPiB7c2hvd1BvcHVwLnJlZ2lvbi50b3RhbERlYXRocz8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L3A+XG4gICAgICAgICAgICB7c2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWUgJiYgPGgzIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogMTIgfX0+PGI+UG9wdWxhdGlvbjo8L2I+ICB7TnVtYmVyKChzaG93UG9wdXAucmVnaW9uLnRvdGFsQ29uZmlybWVkICogMTAwKSAvIGdldFBvcHVsYXRpb24oc2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZSkpLnRvRml4ZWQoMil9JTwvaDM+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFJlbmRlckNvdW50cmllcyA9ICh7IGRhdGEsIHNob3dQb3B1cCwgc2V0U2hvd1BvcHVwIH06IHsgZGF0YTogYW55LCBzaG93UG9wdXA/OiBhbnksIHNldFNob3dQb3B1cD86IGFueSB9KSA9PiB7XG4gICAgcmV0dXJuIGRhdGEuYXJlYXMubWFwKHJlZ2lvbiA9PiB7XG4gICAgICAgIHJldHVybiA8UmVkQnViYmxlTWFya2VyIGtleT17cmVnaW9uLmRpc3BsYXlOYW1lfSB3aWR0aD17MTB9IHJlZ2lvbj17cmVnaW9ufSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb24sIGNvdW50cnk6IHRydWUgfSl9IHNlbGVjdGVkPXtyZWdpb24uZGlzcGxheU5hbWUgPT09IHNob3dQb3B1cC5yZWdpb24/LmRpc3BsYXlOYW1lfSAvPlxuICAgIH0pXG59XG5cbmNvbnN0IFJlbmRlckNpdGllcyA9ICh7IGRhdGEsIHNob3dQb3B1cCwgc2V0U2hvd1BvcHVwIH06IHsgZGF0YTogYW55LCBzaG93UG9wdXA/OiBhbnksIHNldFNob3dQb3B1cD86IGFueSB9KSA9PiB7XG4gICAgcmV0dXJuIGRhdGEuYXJlYXMubWFwKGMgPT4ge1xuICAgICAgICByZXR1cm4gYy5hcmVhcy5tYXAocmVnaW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UmVkQnViYmxlTWFya2VyIGtleT17cmVnaW9uLmRpc3BsYXlOYW1lfSB3aWR0aD17NX0gcmVnaW9uPXtyZWdpb259IG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbiwgY291bnRyeTogYy5kaXNwbGF5TmFtZSB9KX0gc2VsZWN0ZWQ9e3JlZ2lvbi5kaXNwbGF5TmFtZSA9PT0gc2hvd1BvcHVwLnJlZ2lvbj8uZGlzcGxheU5hbWV9IC8+XG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cblxuY29uc3QgUmVkQnViYmxlTWFya2VyID0gKHsgd2lkdGgsIHJlZ2lvbiwgb25DbGljaywgc2VsZWN0ZWQgfTogeyB3aWR0aDogbnVtYmVyLCByZWdpb246IEFQSSwgb25DbGljazogKCkgPT4gdm9pZCwgc2VsZWN0ZWQ6IGJvb2xlYW4gfSkgPT4gKFxuICAgIDxNYXJrZXIga2V5PXtyZWdpb24uZGlzcGxheU5hbWV9IGxvbmdpdHVkZT17cmVnaW9uLmxvbmd9IGxhdGl0dWRlPXtyZWdpb24ubGF0fSBjYXB0dXJlRHJhZz17ZmFsc2V9PlxuICAgICAgICA8c3ZnIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjZDAwJyxcbiAgICAgICAgICAgICAgICBzdHJva2U6ICdub25lJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogKHdpZHRoICogMikgKyAxMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICh3aWR0aCAqIDIpICsgMTAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7LXdpZHRoIC8gMn1weCwkey13aWR0aH1weClgXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9e3dpZHRoICsgNX0gY3k9e3dpZHRoICsgNX0gcj17d2lkdGh9IGZpbGw9e1wicmVkXCJ9IHN0cm9rZVdpZHRoPXtzZWxlY3RlZCA/IDMgOiAwfSBzdHJva2U9e3NlbGVjdGVkID8gXCJvcmFuZ2VcIiA6IFwicmVkXCJ9IHN0eWxlPXt7IGZpbGxPcGFjaXR5OiBvcGFjaXR5KHJlZ2lvbi50b3RhbERlYXRocykgfX0gLz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9NYXJrZXI+XG4pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2JpbmcuY29tL2NvdmlkL2RhdGEnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKCdodHRwczovL2Nvcm9uYS1hcGkuY29tL2NvdW50cmllcycpO1xuICAgIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzMi5qc29uKCk7XG5cbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhLCBkYXRhMjogZGF0YTIuZGF0YSB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIb21lUGFnZSkiXX0= */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/index.tsx */"));
}

function TabBar(_ref2) {
  var setType = _ref2.setType,
      type = _ref2.type;
  return __jsx("div", {
    className: "jsx-60989152" + " " + 'tabbar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === 'Infected' && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setType('Infected');
    },
    className: "jsx-60989152" + " " + 'tabbar-item-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "Infected")), __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === "Deaths" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setType("Deaths");
    },
    className: "jsx-60989152" + " " + 'tabbar-item-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, "Deaths")), __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === "Recovered" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setType("Recovered");
    },
    className: "jsx-60989152" + " " + 'tabbar-item-button',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, "Recovered")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "60989152",
    __self: this
  }, ".tabbar-item.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.tabbar.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background:rgb(20,21,23);border-radius:8px;padding:10px;margin-left:10px;margin-right:10px;}.tabbar-item-button.jsx-60989152{border:none;outline:none;background:rgb(20,21,23);padding:10px;border-radius:8px;color:white;font-family:Poppins;cursor:pointer;font-weight:bold;font-size:15px;}.tabbar.jsx-60989152 .selected.jsx-60989152::after{width:80%;background:red;}.tabbar-item.jsx-60989152::after{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:55px;width:80%;content:'';-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out;height:5px;}.tabbar-item.jsx-60989152:hover.jsx-60989152::after{background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa013QixBQUdrQyxBQUtBLEFBU0QsQUFZRixBQUlRLEFBU0gsVUFaQSxFQVpGLEdBeUJqQixVQXhCK0IsQUFZL0IseUJBWGlCLGFBQ0ssUUFhTCxHQTlCUyxBQUtPLE9BYWpCLFlBQ1Esb0JBQ0wsZUFDRSxpQkFDRixBQVNJLE9BOUJQLFFBc0JoQixJQXJCQSxBQThCYyxVQUNDLFdBQ21CLFlBNUJILHlCQUNULGtCQUNMLGFBQ0ksQUEwQk4sV0FDZixNQTFCc0Isa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1ub2NoZWNrXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IERlY2tHTCwgeyBUaWxlTGF5ZXIsIEJpdG1hcExheWVyIH0gZnJvbSBcImRlY2suZ2xcIjtcbmltcG9ydCBSZWFjdE1hcEdMLCB7IE1hcmtlciwgUG9wdXAsIFN0YXRpY01hcCwgU291cmNlLCBMYXllciwgRmx5VG9JbnRlcnBvbGF0b3IgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHsgZ2V0UG9wdWxhdGlvbiB9IGZyb20gJy4uL2Fzc2VzdHMvY291bnRyaWVzJ1xuaW1wb3J0IE1hcDIgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAyJ1xuaW1wb3J0IGNvZGVzIGZyb20gJy4uL2Fzc2VzdHMvY29kZXMnXG5cbmNvbnN0IHRpbGVTZXJ2ZXIgPSAnaHR0cHM6Ly9jLnRpbGUub3BlbnN0cmVldG1hcC5vcmcvJztcblxuXG5leHBvcnQgY29uc3QgSU5JVElBTF9WSUVXX1NUQVRFID0ge1xuICAgIGxhdGl0dWRlOiA0Ny42NSxcbiAgICBsb25naXR1ZGU6IDcsXG4gICAgem9vbTogNC41LFxuICAgIG1heFpvb206IDIwLFxuICAgIGJlYXJpbmc6IDBcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgYXJlYXM6IEFQSVtdO1xuICAgIHRvdGFsQ29uZmlybWVkOiBudW1iZXI7XG4gICAgdG90YWxEZWF0aHM6IG51bWJlcjtcbiAgICB0b3RhbFJlY292ZXJlZDogbnVtYmVyO1xuICAgIHRvdGFsUmVjb3ZlcmVkRGVsdGE6IG51bWJlcjtcbiAgICB0b3RhbERlYXRoc0RlbHRhOiBudW1iZXI7XG4gICAgdG90YWxDb25maXJtZWREZWx0YTogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGVkOiBEYXRlO1xuICAgIGxhdD86IG51bWJlcjtcbiAgICBsb25nPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUhpc3RvcnlEYXRhIHtcbiAgICBob3NwaXRhbGl6ZWRXaXRoU3ltcHRvbXM6IG51bWJlcjtcbiAgICBpbnRlbnNpdmVUaGVyYXB5OiBudW1iZXI7XG4gICAgdG90YWxIb3NwaXRhbGl6ZWQ6IG51bWJlcjtcbiAgICBob21lSW5zdWxhdGlvbjogbnVtYmVyO1xuICAgIHRvdGFsQ3VycmVudGx5UG9zaXRpdmU6IG51bWJlcjtcbiAgICBuZXdDdXJyZW50bHlQb3NpdGl2ZTogbnVtYmVyO1xuICAgIGRpc2NoYXJnZWRIZWFsZWQ6IG51bWJlcjtcbiAgICBkZWNlYXNlZDogbnVtYmVyO1xuICAgIHRvdGFsQ2FzZXM6IG51bWJlcjtcbiAgICB0YW1wb25pOiBudW1iZXI7XG4gICAgc291cmNlVXJsOiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZWRBdFNvdXJjZTogRGF0ZTtcbiAgICBsYXN0VXBkYXRlZEF0QXBpZnk6IERhdGU7XG4gICAgcmVhZE1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9kYXkge1xuICAgIGRlYXRoczogbnVtYmVyO1xuICAgIGNvbmZpcm1lZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGN1bGF0ZWQge1xuICAgIGRlYXRoX3JhdGU6IG51bWJlcjtcbiAgICByZWNvdmVyeV9yYXRlOiBudW1iZXI7XG4gICAgcmVjb3ZlcmVkX3ZzX2RlYXRoX3JhdGlvPzogYW55O1xuICAgIGNhc2VzX3Blcl9taWxsaW9uX3BvcHVsYXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRlc3REYXRhIHtcbiAgICBkZWF0aHM6IG51bWJlcjtcbiAgICBjb25maXJtZWQ6IG51bWJlcjtcbiAgICByZWNvdmVyZWQ6IG51bWJlcjtcbiAgICBjcml0aWNhbDogbnVtYmVyO1xuICAgIGNhbGN1bGF0ZWQ6IENhbGN1bGF0ZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJMiB7XG4gICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgcG9wdWxhdGlvbjogbnVtYmVyO1xuICAgIHVwZGF0ZWRfYXQ6IERhdGU7XG4gICAgdG9kYXk6IFRvZGF5O1xuICAgIGxhdGVzdF9kYXRhOiBMYXRlc3REYXRhO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBkYXRhOiBBUElcbiAgICBkYXRhMjogQXJyYXk8QVBJMj4sXG59XG5cbmNvbnN0IG9wYWNpdHkgPSAob3BhKSA9PiB7XG4gICAgbGV0IG9wID0gKG9wYSkgLyAyMDBcbiAgICBpZiAob3AgPCAwLjMpIHtcbiAgICAgICAgb3AgPSAwLjNcbiAgICB9XG4gICAgcmV0dXJuIG9wXG59XG5cbmNvbnN0IFRPS0VOID0gJ3BrLmV5SjFJam9pWVd4bGEyNWhiV0Z5ZEhsdVlYTWlMQ0poSWpvaVkyczVNWEpwZDNSek1EQnNhRE50Ym5GNk0yOXJNWGx2WXlKOS5mc3E3TEU2c0NtOVN4NVp1MlI1S1pRJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBkYXRhLCBkYXRhMiB9OiBJUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdOiBhbnkgPSB1c2VTdGF0ZTx7IHZpc2libGU6IGJvb2xlYW4sIHJlZ2lvbj86IEFQSSwgY291bnRyeT86IGJvb2xlYW4gfCBzdHJpbmcgfT4oeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdOiBhbnkgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGxhdGl0dWRlOiA1MCxcbiAgICAgICAgbG9uZ2l0dWRlOiAwLFxuICAgICAgICB6b29tOiAyLFxuICAgICAgICB2aXNpYmlsaXR5Q29uc3RyYWludHM6IDFcbiAgICB9KTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTwnSW5mZWN0ZWQnIHwgJ0RlYXRocycgfCAnUmVjb3ZlcmVkJz4oXCJJbmZlY3RlZFwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlci1mbGV4XCIgPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMT0xcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNjBweCknLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZmZcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBwYWRkaW5nOiAyMCwganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpbkJvdHRvbTogMCB9fT5Db3JvbmF2aXJ1cyBDT1ZJRC0xOTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpblRvcDogMCB9fT5HbG9iYWwgQ2FzZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93Jywgd2lkdGg6ICc1MCUnLCBtYXJnaW46ICdhdXRvJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICdyZ2IoMTk0LDQ5LDU0KScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PkluZmVjdGVkPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IDAgfX0+e2RhdGEudG90YWxDb25maXJtZWQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigxOTQsNDksNTQpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdibGFjaycsIHBhZGRpbmc6IDE1LCBib3JkZXJSYWRpdXM6IDkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICdyZ2IoMjUxLDIwMCwxMjgpJywgdGV4dEFsaWduOiAnc3RhcnQnLCBtYXJnaW46IDAgfX0+QWN0aXZlPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IDAgfX0+eyhkYXRhLnRvdGFsQ29uZmlybWVkIC0gZGF0YS50b3RhbERlYXRocyAtIGRhdGEudG90YWxSZWNvdmVyZWQpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMjUxLDIwMCwxMjgpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdibGFjaycsIHBhZGRpbmc6IDE1LCBib3JkZXJSYWRpdXM6IDkgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdyZ2IoNzksNzcsODMpJywgdGV4dEFsaWduOiAnc3RhcnQnLCBtYXJnaW46IDAgfX0+RGVhdGhzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IDAgfX0+e2RhdGEudG90YWxEZWF0aHMudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYig3OSw3Nyw4MyknLCBoZWlnaHQ6IDQsIHdpZHRoOiAnODAlJywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2JsYWNrJywgcGFkZGluZzogMTUsIGJvcmRlclJhZGl1czogOSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3JnYig3MywxOTMsMTcyKScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PlJlY292ZXJlZDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsUmVjb3ZlcmVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoNzMsMTkzLDE3MiknLCBoZWlnaHQ6IDQsIHdpZHRoOiAnODAlJywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1hcCBkYXRhPXtkYXRhfSB2aWV3cG9ydD17dmlld3BvcnR9IHNldFZpZXdwb3J0PXtzZXRWaWV3cG9ydH0gc2hvd1BvcHVwPXtzaG93UG9wdXB9IHNldFNob3dQb3B1cD17c2V0U2hvd1BvcHVwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxNYXAyIGRhdGE9e2RhdGF9IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRvdGFsIENvbmZpcm1lZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDAgfX0+e2RhdGEudG90YWxDb25maXJtZWQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMT4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udEZhbWlseTogJ1BvcHBpbnMnLCB0ZXh0QWxpZ246ICdsZWZ0JywgcGFkZGluZzogMjAgfX0+Q2FzZXMgSW5mbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQmFyIHNldFR5cGU9e3NldFR5cGV9IHR5cGU9e3R5cGV9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGRhdGE9e2RhdGF9IGRhdGEyPXtkYXRhMn0gdHlwZT17dHlwZX0gc2V0U2hvd1BvcHVwPXtzZXRTaG93UG9wdXB9IGhhbmRsZUFuaW1hdGU9eyhsb25nLCBsYXQpID0+IHNldFZpZXdwb3J0KHsgLi4udmlld3BvcnQsIGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG9uZywgem9vbTogNCwgdHJhbnNpdGlvbkludGVycG9sYXRvcjogbmV3IEZseVRvSW50ZXJwb2xhdG9yKCksIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0sIFtkYXRhLCB0eXBlXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOXB4OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXYgPlxuICAgIClcbn1cblxuXG5mdW5jdGlvbiBUYWJCYXIoeyBzZXRUeXBlLCB0eXBlIH06IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJiYXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0YWJiYXItaXRlbSBgICsgKHR5cGUgPT09ICdJbmZlY3RlZCcgJiYgJ3NlbGVjdGVkJyl9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0YWJiYXItaXRlbS1idXR0b24nIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ0luZmVjdGVkJyl9PkluZmVjdGVkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFiYmFyLWl0ZW0gYCArICh0eXBlID09PSBcIkRlYXRoc1wiICYmICdzZWxlY3RlZCcpfSA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RhYmJhci1pdGVtLWJ1dHRvbicgb25DbGljaz17KCkgPT4gc2V0VHlwZShcIkRlYXRoc1wiKX0+RGVhdGhzPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFiYmFyLWl0ZW0gYCArICh0eXBlID09PSBcIlJlY292ZXJlZFwiICYmICdzZWxlY3RlZCcpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGFiYmFyLWl0ZW0tYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKFwiUmVjb3ZlcmVkXCIpfT5SZWNvdmVyZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRhYmJhci1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMCwgMjEsIDIzKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyLWl0ZW0tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsIDIxLCAyMyk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyIC5zZWxlY3RlZDo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YWJiYXItaXRlbTo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyLWl0ZW06aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZnVuY3Rpb24gTWFwKHsgZGF0YSwgdmlld3BvcnQsIHNldFZpZXdwb3J0LCBzaG93UG9wdXAsIHNldFNob3dQb3B1cCB9OiB7IGRhdGE6IEFQSSwgdmlld3BvcnQ6IGFueSwgc2V0Vmlld3BvcnQ6IGFueSB9KSB7XG5cbiAgICBjb25zdCBtYXBSZWYgPSB1c2VSZWYobnVsbClcbiAgICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFwID0gbWFwUmVmLmN1cnJlbnQuZ2V0TWFwKCk7XG5cbiAgICAgICAgaWYgKGlzTG9hZGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSU5JVCcpXG4gICAgICAgICAgICBtYXAub24oJ21vdXNlZW50ZXInLCAncG9pbnRzMiAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjMnKVxuICAgICAgICAgICAgICAgIG1hcC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW21hcFJlZiwgaXNMb2FkZWRdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlT25Mb2FkKGV2dCkge1xuICAgICAgICBjb25zdCBtYXAgPSBtYXBSZWYuY3VycmVudC5nZXRNYXAoKTtcbiAgICAgICAgc2V0SXNMb2FkZWQodHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiB7c2hvd1BvcHVwLnZpc2libGUgPT09IHRydWUgJiYgPExvY2F0aW9uRGV0YWlscyBzaG93UG9wdXA9e3Nob3dQb3B1cH0gLz59ICovfVxuICAgICAgICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgICAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgICAgICAgICAgb25Mb2FkPXtoYW5kbGVPbkxvYWR9XG4gICAgICAgICAgICAgICAgLy8gb25Ib3Zlcj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgbWFwID0gbWFwUmVmLmN1cnJlbnQuZ2V0TWFwKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChlPy5mZWF0dXJlcz8uZmlsdGVyKGl0ZW0gPT4gaXRlbS5sYXllci5pZCA9PT0gJ3BvaW50cycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNldEhvdmVyKHRydWUpXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzZXRIb3ZlcihmYWxzZSlcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gfX1cbiAgICAgICAgICAgICAgICByZXVzZU1hcHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGhlaWdodD0nY2FsYygxMDB2aCAtIDIxMHB4KSdcbiAgICAgICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXt2aWV3ID0+IHNldFZpZXdwb3J0KHZpZXcpfVxuICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtUT0tFTn1cbiAgICAgICAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvZGFyay12OVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGU/LmZlYXR1cmVzPy5bMF0/LnByb3BlcnRpZXM/LnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbjogZGF0YS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSlbMF0sIGNvdW50cnk6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBkYXRhLmFyZWFzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uYXJlYXMuZmlsdGVyKGl0ZW0yID0+IGl0ZW0yLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSkubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb246IGRhdGEuYXJlYXNbaW5kZXhdLmFyZWFzLmZpbHRlcihpdGVtID0+IGl0ZW0uZGlzcGxheU5hbWUgPT09IGU/LmZlYXR1cmVzPy5bMF0/LnByb3BlcnRpZXM/LnRpdGxlKVswXSwgY291bnRyeTogZGF0YS5hcmVhc1tpbmRleF0uZGlzcGxheU5hbWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzaG93UG9wdXAudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogZmFsc2UsIGxvY2F0aW9uOiBudWxsIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTb3VyY2UgaWQ9J0NvdW50cmllcycgdHlwZT0nZ2VvanNvbicgZGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMucmVkdWNlKChzdW0sIHZhbDogQVBJKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZW9tZXRyeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ1BvaW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwubG9uZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwubGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogdmFsLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24nOiAnbW9udW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvdGFsJzogdmFsLnRvdGFsQ29uZmlybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtID0gISFzdW0gPyBbLi4uc3VtLCBvYmpdIDogW29ial1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgfSwgW2RhdGFdKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc291cmNlJzogJ3BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydnZXQnLCAndG90YWwnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwLCAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwLCAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAwLCAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwMCwgMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwMDAsIDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDAwMDAsIDM1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtY29sb3InOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1vcGFjaXR5JzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZ2V0JywgJ3RvdGFsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLCAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwLCAuNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwMCwgMC44LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMDAwLCAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU291cmNlPlxuXG4gICAgICAgICAgICAgICAgPFNvdXJjZSBpZD0nQ2l0aWVzJyB0eXBlPSdnZW9qc29uJyBkYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogdXNlTWVtbygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5yZWR1Y2UoKHN1bSwgdmFsOiBBUEkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwuYXJlYXMubWFwKChpdGVtOiBBUEkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dlb21ldHJ5Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ1BvaW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubG9uZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogaXRlbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWNvbic6ICdtb251bWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IGl0ZW0udG90YWxDb25maXJtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gPSAhIXN1bSA/IFsuLi5zdW0sIG9ial0gOiBbb2JqXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICAgICAgICAgIH0sIFtkYXRhXSlcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdwb2ludHMyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzb3VyY2UnOiAncG9pbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLXJhZGl1cyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2dldCcsICd0b3RhbCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAsIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAsIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAsIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLCA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCwgOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwLCA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtY29sb3InOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1vcGFjaXR5JzogMC41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NvdXJjZT5cblxuXG4gICAgICAgICAgICAgICAge3Nob3dQb3B1cC52aXNpYmxlICYmIDxQb3B1cFxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZT17c2hvd1BvcHVwLnJlZ2lvbi5sYXR9XG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17c2hvd1BvcHVwLnJlZ2lvbi5sb25nfVxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQ9ezEwfVxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiBmYWxzZSwgbG9jYXRpb246IG51bGwgfSl9XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBhZGRpbmc6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNTAlJywgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtjb2RlcyhzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSA/IHNob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWUgOiBzaG93UG9wdXAuY291bnRyeSkgfHwgJ3VzJ30vc2hpbnkvNjQucG5nYH0gYWx0PVwiMTIzXCIgc3R5bGU9e3sgd2lkdGg6ICcxNjAlJywgaGVpZ2h0OiAnMTYwJScsIG9iamVjdEZpdDogJ2NvdmVyJywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwIH19PntzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgbWFyZ2luVG9wOiAtMzAsIG1hcmdpbkJvdHRvbTogLTIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e3Nob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCwgbWFyZ2luOiAnYXV0byAwIGF1dG8gYXV0bycgfX0+SU5GRUNURUQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpblRvcDogLTE1LCBtYXJnaW5Cb3R0b206IC0yMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZ2IoNTAsMjAzLDExMSknIH19PntzaG93UG9wdXAucmVnaW9uLnRvdGFsUmVjb3ZlcmVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAsIG1hcmdpbjogJ2F1dG8gMCBhdXRvIGF1dG8nIH19PlJFQ09WRVJFRDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgbWFyZ2luVG9wOiAtMTUsIG1hcmdpbkJvdHRvbTogLTIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScgfX0+e3Nob3dQb3B1cC5yZWdpb24udG90YWxEZWF0aHM/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpID8/IDB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCwgbWFyZ2luOiAnYXV0byAwIGF1dG8gYXV0bycgfX0+REVBVEhTPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dQb3B1cC5jb3VudHJ5ID09PSB0cnVlICYmIDxoMyBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ2JsYWNrJywgZm9udFNpemU6IDEyLCBtYXJnaW5Ub3A6IDQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVsYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj4ge051bWJlcigoc2hvd1BvcHVwLnJlZ2lvbi50b3RhbENvbmZpcm1lZCAqIDEwMCkgLyBnZXRQb3B1bGF0aW9uKHNob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWUpKS50b0ZpeGVkKDIpfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUG9wdXA+fVxuXG4gICAgICAgICAgICA8L1JlYWN0TWFwR0w+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gTGlzdCh7IGRhdGEsIGRhdGEyLCB0eXBlLCBoYW5kbGVBbmltYXRlLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBhbnksIGRhdGEyOiBBcnJheTxBUEkyPiwgdHlwZTogYW55LCBoYW5kbGVBbmlhbXRlOiBhbnksIHNldFNob3dQb3B1cDogYW55IH0pIHtcblxuICAgIGZ1bmN0aW9uIHNvcnRlZCgpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiSW5mZWN0ZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMuc29ydCgoYTogQVBJLCBiOiBBUEkpID0+IGIudG90YWxDb25maXJtZWQgLSBhLnRvdGFsQ29uZmlybWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkRlYXRoc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5zb3J0KChhOiBBUEksIGI6IEFQSSkgPT4gYi50b3RhbERlYXRocyAtIGEudG90YWxEZWF0aHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiUmVjb3ZlcmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnNvcnQoKGE6IEFQSSwgYjogQVBJKSA9PiBiLnRvdGFsUmVjb3ZlcmVkIC0gYS50b3RhbFJlY292ZXJlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc29ydGVkLmxlbmd0aCA+IDApIHJldHVybiBudWxsXG4gICAgcmV0dXJuIDx1bCBzdHlsZT17eyBtYXJnaW46IDAsIHBhZGRpbmdMZWZ0OiAxMCwgaGVpZ2h0OiAnMTAwJScsIG92ZXJmbG93WTogJ3Njcm9sbCcsIHNjcm9sbEJlaGF2aW9yOiAnc21vb3RoJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAge3NvcnRlZCgpLm1hcCgoYXJlYTogQVBJKSA9PiAoXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJy13ZWJraXQtZmxleCcsIGZsZXg6ICcxIDAgYXV0bycsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYmFja2dyb3VuZDogJ3JnYigyOCwgMzAsIDM0KScsIGN1cnNvcjogJ3BvaW50ZXInLCBib3JkZXJSYWRpdXM6IDgsIG1hcmdpblRvcDogMTAsIHBhZGRpbmdMZWZ0OiAyMCwgcGFkZGluZ1JpZ2h0OiAyMCB9fSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uOiBkYXRhLmFyZWFzLmZpbHRlcihpdGVtID0+IGl0ZW0uZGlzcGxheU5hbWUgPT09IGFyZWEuZGlzcGxheU5hbWUpWzBdLCBjb3VudHJ5OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgaGFuZGxlQW5pbWF0ZShhcmVhLmxvbmcsIGFyZWEubGF0KVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnLCB3aWR0aDogMjAsIGhlaWdodDogMjAsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtjb2RlcyhhcmVhLmRpc3BsYXlOYW1lKSB8fCAndXMnfS9zaGlueS82NC5wbmdgfSBhbHQ9XCIxMjNcIiBzdHlsZT17eyB3aWR0aDogJzE2MCUnLCBoZWlnaHQ6ICcxNjAlJywgb2JqZWN0Rml0OiAnY292ZXInLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDE1LCBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC43KScsIG1hcmdpbjogJzAgYXV0byAwIDAnIH19PnthcmVhLmRpc3BsYXlOYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19Pnt0eXBlID09PSBcIkluZmVjdGVkXCIgPyBhcmVhLnRvdGFsQ29uZmlybWVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA6IHR5cGUgPT09IFwiUmVjb3ZlcmVkXCIgPyBhcmVhLnRvdGFsUmVjb3ZlcmVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA6IHR5cGUgPT09IFwiRGVhdGhzXCIgJiYgYXJlYS50b3RhbERlYXRocz8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oNT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgIDwvdWw+XG59XG5cbmNvbnN0IExvY2F0aW9uRGV0YWlscyA9ICh7IHNob3dQb3B1cCB9OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJvdHRvbTogMjUsXG4gICAgICAgICAgICBsZWZ0OiAyNSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgIHpJbmRleDogOTk5OTk5OTksXG4gICAgICAgICAgICBwYWRkaW5nOiAxNSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogOFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScsIHdpZHRoOiAyMCwgaGVpZ2h0OiAyMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmNvdW50cnlmbGFncy5pby8ke2NvZGVzKHNob3dQb3B1cC5jb3VudHJ5ID09PSB0cnVlID8gc2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZSA6IHNob3dQb3B1cC5jb3VudHJ5KSB8fCAndXMnfS9zaGlueS82NC5wbmdgfSBhbHQ9XCIxMjNcIiBzdHlsZT17eyB3aWR0aDogJzE2MCUnLCBoZWlnaHQ6ICcxNjAlJywgb2JqZWN0Rml0OiAnY292ZXInLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCB9fT57c2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+PGgzPntzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lfSA8L2gzPiA8bGFiZWwgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDggfX0+e3Nob3dQb3B1cC5jb3VudHJ5fTwvbGFiZWw+PC9zcGFuPn1cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAncmdiKDI1MiwxODQsNDQpJywgZm9udFNpemU6IDEyIH19PjxiPkNvbmZpcm1lZDo8L2I+ICB7c2hvd1BvcHVwLnJlZ2lvbi50b3RhbENvbmZpcm1lZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ3JnYig1MCwyMDMsMTExKScsIGZvbnRTaXplOiAxMiB9fT48Yj5SZWNvdmVyZWQ6PC9iPntzaG93UG9wdXAucmVnaW9uLnRvdGFsUmVjb3ZlcmVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAncmVkJywgZm9udFNpemU6IDEyIH19PjxiPkRlYXRoczo8L2I+IHtzaG93UG9wdXAucmVnaW9uLnRvdGFsRGVhdGhzPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvcD5cbiAgICAgICAgICAgIHtzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSAmJiA8aDMgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdibGFjaycsIGZvbnRTaXplOiAxMiB9fT48Yj5Qb3B1bGF0aW9uOjwvYj4gIHtOdW1iZXIoKHNob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQgKiAxMDApIC8gZ2V0UG9wdWxhdGlvbihzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lKSkudG9GaXhlZCgyKX0lPC9oMz59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgUmVuZGVyQ291bnRyaWVzID0gKHsgZGF0YSwgc2hvd1BvcHVwLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBhbnksIHNob3dQb3B1cD86IGFueSwgc2V0U2hvd1BvcHVwPzogYW55IH0pID0+IHtcbiAgICByZXR1cm4gZGF0YS5hcmVhcy5tYXAocmVnaW9uID0+IHtcbiAgICAgICAgcmV0dXJuIDxSZWRCdWJibGVNYXJrZXIga2V5PXtyZWdpb24uZGlzcGxheU5hbWV9IHdpZHRoPXsxMH0gcmVnaW9uPXtyZWdpb259IG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbiwgY291bnRyeTogdHJ1ZSB9KX0gc2VsZWN0ZWQ9e3JlZ2lvbi5kaXNwbGF5TmFtZSA9PT0gc2hvd1BvcHVwLnJlZ2lvbj8uZGlzcGxheU5hbWV9IC8+XG4gICAgfSlcbn1cblxuY29uc3QgUmVuZGVyQ2l0aWVzID0gKHsgZGF0YSwgc2hvd1BvcHVwLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBhbnksIHNob3dQb3B1cD86IGFueSwgc2V0U2hvd1BvcHVwPzogYW55IH0pID0+IHtcbiAgICByZXR1cm4gZGF0YS5hcmVhcy5tYXAoYyA9PiB7XG4gICAgICAgIHJldHVybiBjLmFyZWFzLm1hcChyZWdpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSZWRCdWJibGVNYXJrZXIga2V5PXtyZWdpb24uZGlzcGxheU5hbWV9IHdpZHRoPXs1fSByZWdpb249e3JlZ2lvbn0gb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uLCBjb3VudHJ5OiBjLmRpc3BsYXlOYW1lIH0pfSBzZWxlY3RlZD17cmVnaW9uLmRpc3BsYXlOYW1lID09PSBzaG93UG9wdXAucmVnaW9uPy5kaXNwbGF5TmFtZX0gLz5cblxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuXG5jb25zdCBSZWRCdWJibGVNYXJrZXIgPSAoeyB3aWR0aCwgcmVnaW9uLCBvbkNsaWNrLCBzZWxlY3RlZCB9OiB7IHdpZHRoOiBudW1iZXIsIHJlZ2lvbjogQVBJLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCBzZWxlY3RlZDogYm9vbGVhbiB9KSA9PiAoXG4gICAgPE1hcmtlciBrZXk9e3JlZ2lvbi5kaXNwbGF5TmFtZX0gbG9uZ2l0dWRlPXtyZWdpb24ubG9uZ30gbGF0aXR1ZGU9e3JlZ2lvbi5sYXR9IGNhcHR1cmVEcmFnPXtmYWxzZX0+XG4gICAgICAgIDxzdmcgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgZmlsbDogJyNkMDAnLFxuICAgICAgICAgICAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAod2lkdGggKiAyKSArIDEwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogKHdpZHRoICogMikgKyAxMCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHstd2lkdGggLyAyfXB4LCR7LXdpZHRofXB4KWBcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGNpcmNsZSBjeD17d2lkdGggKyA1fSBjeT17d2lkdGggKyA1fSByPXt3aWR0aH0gZmlsbD17XCJyZWRcIn0gc3Ryb2tlV2lkdGg9e3NlbGVjdGVkID8gMyA6IDB9IHN0cm9rZT17c2VsZWN0ZWQgPyBcIm9yYW5nZVwiIDogXCJyZWRcIn0gc3R5bGU9e3sgZmlsbE9wYWNpdHk6IG9wYWNpdHkocmVnaW9uLnRvdGFsRGVhdGhzKSB9fSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L01hcmtlcj5cbilcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmluZy5jb20vY292aWQvZGF0YScpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY29yb25hLWFwaS5jb20vY291bnRyaWVzJyk7XG4gICAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKTtcblxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEsIGRhdGEyOiBkYXRhMi5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEhvbWVQYWdlKSJdfQ== */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/index.tsx */"));
}

function Map(_ref3) {
  var _showPopup$region$tot, _showPopup$region$tot2, _showPopup$region$tot3, _showPopup$region$tot4;

  var data = _ref3.data,
      viewport = _ref3.viewport,
      setViewport = _ref3.setViewport,
      showPopup = _ref3.showPopup,
      setShowPopup = _ref3.setShowPopup;
  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoaded = _useState4[0],
      setIsLoaded = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      hover = _useState5[0],
      setHover = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var map = mapRef.current.getMap();

    if (isLoaded) {
      console.log('INIT');
      map.on('mouseenter', 'points2 ', function (e) {
        console.log('123');
        map.getCanvas().style.cursor = 'pointer';
      });
    }
  }, [mapRef, isLoaded]);

  function handleOnLoad(evt) {
    var map = mapRef.current.getMap();
    setIsLoaded(true);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, viewport, {
    ref: mapRef,
    onLoad: handleOnLoad // onHover={(e) => {
    //     const map = mapRef.current.getMap();
    //     if (e?.features?.filter(item => item.layer.id === 'points').length > 0) {
    //         setHover(true)
    //     }
    //     else {
    //         setHover(false)
    //     }
    // }}
    ,
    reuseMaps: false,
    height: "calc(100vh - 210px)",
    onViewportChange: function onViewportChange(view) {
      return setViewport(view);
    },
    mapboxApiAccessToken: TOKEN,
    mapStyle: "mapbox://styles/mapbox/dark-v9",
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
      lineNumber: 269,
      columnNumber: 13
    }
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Source"], {
    id: "Countries",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
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
      lineNumber: 303,
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
      lineNumber: 328,
      columnNumber: 21
    }
  }))), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Source"], {
    id: "Cities",
    type: "geojson",
    data: {
      'type': 'FeatureCollection',
      cluster: true,
      'features': Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
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
      lineNumber: 359,
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
      lineNumber: 386,
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
      lineNumber: 410,
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
      lineNumber: 420,
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
      lineNumber: 421,
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
      lineNumber: 422,
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
      lineNumber: 423,
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
      lineNumber: 425,
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
      lineNumber: 427,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'red'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 29
    }
  }, showPopup.region.totalConfirmed.toLocaleString('en-US')), __jsx("h2", {
    style: {
      color: 'black',
      paddingLeft: 10,
      margin: 'auto 0 auto auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 29
    }
  }, "INFECTED")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -15,
      marginBottom: -20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'rgb(50,203,111)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 29
    }
  }, (_showPopup$region$tot = (_showPopup$region$tot2 = showPopup.region.totalRecovered) === null || _showPopup$region$tot2 === void 0 ? void 0 : _showPopup$region$tot2.toLocaleString('en-US')) !== null && _showPopup$region$tot !== void 0 ? _showPopup$region$tot : 0), __jsx("h2", {
    style: {
      color: 'black',
      paddingLeft: 10,
      margin: 'auto 0 auto auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 29
    }
  }, "RECOVERED")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: -15,
      marginBottom: -20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'orange'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 29
    }
  }, (_showPopup$region$tot3 = (_showPopup$region$tot4 = showPopup.region.totalDeaths) === null || _showPopup$region$tot4 === void 0 ? void 0 : _showPopup$region$tot4.toLocaleString('en-US')) !== null && _showPopup$region$tot3 !== void 0 ? _showPopup$region$tot3 : 0), __jsx("h2", {
    style: {
      color: 'black',
      paddingLeft: 10,
      margin: 'auto 0 auto auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 29
    }
  }, "DEATHS")), showPopup.country === true && __jsx("h3", {
    style: {
      flex: 1,
      color: 'black',
      fontSize: 12,
      marginTop: 4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 56
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 29
    }
  }, "Population:"), " ", Number(showPopup.region.totalConfirmed * 100 / Object(_assests_countries__WEBPACK_IMPORTED_MODULE_7__["getPopulation"])(showPopup.region.displayName)).toFixed(2), "%")))));
}

function List(_ref4) {
  var _this2 = this;

  var data = _ref4.data,
      data2 = _ref4.data2,
      type = _ref4.type,
      handleAnimate = _ref4.handleAnimate,
      setShowPopup = _ref4.setShowPopup;

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
  return __jsx("ul", {
    style: {
      margin: 0,
      paddingLeft: 10,
      height: '100%',
      overflowY: 'scroll',
      scrollBehavior: 'smooth',
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 12
    }
  }, sorted().map(function (area) {
    var _area$totalConfirmed, _area$totalRecovered, _area$totalDeaths;

    return __jsx("li", {
      style: {
        display: '-webkit-flex',
        flex: '1 0 auto',
        flexDirection: 'row',
        alignItems: 'center',
        background: 'rgb(28, 30, 34)',
        cursor: 'pointer',
        borderRadius: 8,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
      },
      onClick: function onClick() {
        setShowPopup({
          visible: true,
          region: data.areas.filter(function (item) {
            return item.displayName === area.displayName;
          })[0],
          country: true
        });
        handleAnimate(area["long"], area.lat);
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        borderRadius: '50%',
        width: 20,
        height: 20,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 17
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
        lineNumber: 474,
        columnNumber: 21
      }
    })), __jsx("h5", {
      style: {
        paddingLeft: 15,
        color: 'rgba(255,255,255,0.7)',
        margin: '0 auto 0 0'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 17
      }
    }, area.displayName), __jsx("h5", {
      style: {
        color: 'white'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
        columnNumber: 17
      }
    }, type === "Infected" ? (_area$totalConfirmed = area.totalConfirmed) === null || _area$totalConfirmed === void 0 ? void 0 : _area$totalConfirmed.toLocaleString('en-US') : type === "Recovered" ? (_area$totalRecovered = area.totalRecovered) === null || _area$totalRecovered === void 0 ? void 0 : _area$totalRecovered.toLocaleString('en-US') : type === "Deaths" && ((_area$totalDeaths = area.totalDeaths) === null || _area$totalDeaths === void 0 ? void 0 : _area$totalDeaths.toLocaleString('en-US'))));
  }));
}

var LocationDetails = function LocationDetails(_ref5) {
  var _showPopup$region$tot5, _showPopup$region$tot6, _showPopup$region$tot7, _showPopup$region$tot8, _showPopup$region$tot9, _showPopup$region$tot10;

  var showPopup = _ref5.showPopup;
  return __jsx("div", {
    style: {
      width: 400,
      height: 200,
      position: 'absolute',
      bottom: 25,
      left: 25,
      backgroundColor: 'white',
      zIndex: 99999999,
      padding: 15,
      borderRadius: 8
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
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
      lineNumber: 499,
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
      lineNumber: 500,
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
      lineNumber: 501,
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
      lineNumber: 503,
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
      lineNumber: 506,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 111
    }
  }, showPopup.region.displayName, " "), " ", __jsx("label", {
    style: {
      paddingLeft: 8
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
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
      lineNumber: 507,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 76
    }
  }, "Confirmed:"), "  ", (_showPopup$region$tot5 = (_showPopup$region$tot6 = showPopup.region.totalConfirmed) === null || _showPopup$region$tot6 === void 0 ? void 0 : _showPopup$region$tot6.toLocaleString('en-US')) !== null && _showPopup$region$tot5 !== void 0 ? _showPopup$region$tot5 : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'rgb(50,203,111)',
      fontSize: 12
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 76
    }
  }, "Recovered:"), (_showPopup$region$tot7 = (_showPopup$region$tot8 = showPopup.region.totalRecovered) === null || _showPopup$region$tot8 === void 0 ? void 0 : _showPopup$region$tot8.toLocaleString('en-US')) !== null && _showPopup$region$tot7 !== void 0 ? _showPopup$region$tot7 : 0), __jsx("p", {
    style: {
      flex: 1,
      color: 'red',
      fontSize: 12
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 64
    }
  }, "Deaths:"), " ", (_showPopup$region$tot9 = (_showPopup$region$tot10 = showPopup.region.totalDeaths) === null || _showPopup$region$tot10 === void 0 ? void 0 : _showPopup$region$tot10.toLocaleString('en-US')) !== null && _showPopup$region$tot9 !== void 0 ? _showPopup$region$tot9 : 0), showPopup.country === true && __jsx("h3", {
    style: {
      flex: 1,
      color: 'black',
      fontSize: 12
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 44
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
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
        lineNumber: 517,
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
          lineNumber: 524,
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
      lineNumber: 533,
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
      lineNumber: 534,
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
      lineNumber: 543,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.ca7627297199e48c717e.hot-update.js.map