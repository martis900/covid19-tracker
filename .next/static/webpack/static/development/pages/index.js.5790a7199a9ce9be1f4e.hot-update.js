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
    className: "tracker-flex",
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "LOL",
    style: {
      display: 'flex',
      position: 'relative',
      height: 'calc(100vh - 60px)',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "aff",
    style: {
      display: 'flex',
      flexDirection: 'row',
      padding: 20,
      width: '50%',
      justifyContent: 'space-around'
    },
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "Global Cases")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 29
    }
  }, __jsx("div", {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  })), __jsx("div", {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  })), __jsx("div", {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 37
    }
  })), __jsx("div", {
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
      className: "list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 28
      }
    }, __jsx("h3", {
      style: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'left'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    }, "Cases Info"), __jsx(TabBar, {
      setType: setType,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
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
        lineNumber: 166,
        columnNumber: 25
      }
    }));
  }, [data, type]));
}

function TabBar(_ref2) {
  var setType = _ref2.setType,
      type = _ref2.type;
  return __jsx("div", {
    className: "jsx-60989152" + " " + 'tabbar',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === 'Infected' && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 180,
      columnNumber: 17
    }
  }, "Infected")), __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === "Deaths" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 183,
      columnNumber: 17
    }
  }, "Deaths")), __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === "Recovered" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
      lineNumber: 186,
      columnNumber: 17
    }
  }, "Recovered")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "60989152",
    __self: this
  }, ".tabbar-item.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.tabbar.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background:rgb(20,21,23);border-radius:8px;padding:10px;margin-left:10px;margin-right:10px;}.tabbar-item-button.jsx-60989152{border:none;outline:none;background:rgb(20,21,23);padding:10px;border-radius:8px;color:white;font-family:Poppins;cursor:pointer;font-weight:bold;font-size:15px;}.tabbar.jsx-60989152 .selected.jsx-60989152::after{width:80%;background:red;}.tabbar-item.jsx-60989152::after{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:55px;width:80%;content:'';-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out;height:5px;}.tabbar-item.jsx-60989152:hover.jsx-60989152::after{background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEx3QixBQUdrQyxBQUtBLEFBU0QsQUFZRixBQUlRLEFBU0gsVUFaQSxFQVpGLEdBeUJqQixVQXhCK0IsQUFZL0IseUJBWGlCLGFBQ0ssUUFhTCxHQTlCUyxBQUtPLE9BYWpCLFlBQ1Esb0JBQ0wsZUFDRSxpQkFDRixBQVNJLE9BOUJQLFFBc0JoQixJQXJCQSxBQThCYyxVQUNDLFdBQ21CLFlBNUJILHlCQUNULGtCQUNMLGFBQ0ksQUEwQk4sV0FDZixNQTFCc0Isa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1ub2NoZWNrXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IERlY2tHTCwgeyBUaWxlTGF5ZXIsIEJpdG1hcExheWVyIH0gZnJvbSBcImRlY2suZ2xcIjtcbmltcG9ydCBSZWFjdE1hcEdMLCB7IE1hcmtlciwgUG9wdXAsIFN0YXRpY01hcCwgU291cmNlLCBMYXllciwgRmx5VG9JbnRlcnBvbGF0b3IgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHsgZ2V0UG9wdWxhdGlvbiB9IGZyb20gJy4uL2Fzc2VzdHMvY291bnRyaWVzJ1xuaW1wb3J0IE1hcDIgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAyJ1xuaW1wb3J0IGNvZGVzIGZyb20gJy4uL2Fzc2VzdHMvY29kZXMnXG5cbmNvbnN0IHRpbGVTZXJ2ZXIgPSAnaHR0cHM6Ly9jLnRpbGUub3BlbnN0cmVldG1hcC5vcmcvJztcblxuXG5leHBvcnQgY29uc3QgSU5JVElBTF9WSUVXX1NUQVRFID0ge1xuICAgIGxhdGl0dWRlOiA0Ny42NSxcbiAgICBsb25naXR1ZGU6IDcsXG4gICAgem9vbTogNC41LFxuICAgIG1heFpvb206IDIwLFxuICAgIGJlYXJpbmc6IDBcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgYXJlYXM6IEFQSVtdO1xuICAgIHRvdGFsQ29uZmlybWVkOiBudW1iZXI7XG4gICAgdG90YWxEZWF0aHM6IG51bWJlcjtcbiAgICB0b3RhbFJlY292ZXJlZDogbnVtYmVyO1xuICAgIHRvdGFsUmVjb3ZlcmVkRGVsdGE6IG51bWJlcjtcbiAgICB0b3RhbERlYXRoc0RlbHRhOiBudW1iZXI7XG4gICAgdG90YWxDb25maXJtZWREZWx0YTogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGVkOiBEYXRlO1xuICAgIGxhdD86IG51bWJlcjtcbiAgICBsb25nPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUhpc3RvcnlEYXRhIHtcbiAgICBob3NwaXRhbGl6ZWRXaXRoU3ltcHRvbXM6IG51bWJlcjtcbiAgICBpbnRlbnNpdmVUaGVyYXB5OiBudW1iZXI7XG4gICAgdG90YWxIb3NwaXRhbGl6ZWQ6IG51bWJlcjtcbiAgICBob21lSW5zdWxhdGlvbjogbnVtYmVyO1xuICAgIHRvdGFsQ3VycmVudGx5UG9zaXRpdmU6IG51bWJlcjtcbiAgICBuZXdDdXJyZW50bHlQb3NpdGl2ZTogbnVtYmVyO1xuICAgIGRpc2NoYXJnZWRIZWFsZWQ6IG51bWJlcjtcbiAgICBkZWNlYXNlZDogbnVtYmVyO1xuICAgIHRvdGFsQ2FzZXM6IG51bWJlcjtcbiAgICB0YW1wb25pOiBudW1iZXI7XG4gICAgc291cmNlVXJsOiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZWRBdFNvdXJjZTogRGF0ZTtcbiAgICBsYXN0VXBkYXRlZEF0QXBpZnk6IERhdGU7XG4gICAgcmVhZE1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9kYXkge1xuICAgIGRlYXRoczogbnVtYmVyO1xuICAgIGNvbmZpcm1lZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGN1bGF0ZWQge1xuICAgIGRlYXRoX3JhdGU6IG51bWJlcjtcbiAgICByZWNvdmVyeV9yYXRlOiBudW1iZXI7XG4gICAgcmVjb3ZlcmVkX3ZzX2RlYXRoX3JhdGlvPzogYW55O1xuICAgIGNhc2VzX3Blcl9taWxsaW9uX3BvcHVsYXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRlc3REYXRhIHtcbiAgICBkZWF0aHM6IG51bWJlcjtcbiAgICBjb25maXJtZWQ6IG51bWJlcjtcbiAgICByZWNvdmVyZWQ6IG51bWJlcjtcbiAgICBjcml0aWNhbDogbnVtYmVyO1xuICAgIGNhbGN1bGF0ZWQ6IENhbGN1bGF0ZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJMiB7XG4gICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgcG9wdWxhdGlvbjogbnVtYmVyO1xuICAgIHVwZGF0ZWRfYXQ6IERhdGU7XG4gICAgdG9kYXk6IFRvZGF5O1xuICAgIGxhdGVzdF9kYXRhOiBMYXRlc3REYXRhO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBkYXRhOiBBUElcbiAgICBkYXRhMjogQXJyYXk8QVBJMj4sXG59XG5cbmNvbnN0IG9wYWNpdHkgPSAob3BhKSA9PiB7XG4gICAgbGV0IG9wID0gKG9wYSkgLyAyMDBcbiAgICBpZiAob3AgPCAwLjMpIHtcbiAgICAgICAgb3AgPSAwLjNcbiAgICB9XG4gICAgcmV0dXJuIG9wXG59XG5cbmNvbnN0IFRPS0VOID0gJ3BrLmV5SjFJam9pWVd4bGEyNWhiV0Z5ZEhsdVlYTWlMQ0poSWpvaVkyczVNWEpwZDNSek1EQnNhRE50Ym5GNk0yOXJNWGx2WXlKOS5mc3E3TEU2c0NtOVN4NVp1MlI1S1pRJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBkYXRhLCBkYXRhMiB9OiBJUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdOiBhbnkgPSB1c2VTdGF0ZTx7IHZpc2libGU6IGJvb2xlYW4sIHJlZ2lvbj86IEFQSSwgY291bnRyeT86IGJvb2xlYW4gfCBzdHJpbmcgfT4oeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdOiBhbnkgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGxhdGl0dWRlOiA1MCxcbiAgICAgICAgbG9uZ2l0dWRlOiAwLFxuICAgICAgICB6b29tOiAyLFxuICAgICAgICB2aXNpYmlsaXR5Q29uc3RyYWludHM6IDFcbiAgICB9KTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTwnSW5mZWN0ZWQnIHwgJ0RlYXRocycgfCAnUmVjb3ZlcmVkJz4oXCJJbmZlY3RlZFwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlci1mbGV4XCIgPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMT0xcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNjBweCknLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZmZcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBwYWRkaW5nOiAyMCwgd2lkdGg6ICc1MCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgbWFyZ2luQm90dG9tOiAwIH19PkNvcm9uYXZpcnVzIENPVklELTE5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgbWFyZ2luVG9wOiAwIH19Pkdsb2JhbCBDYXNlczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IGNvbG9yOiAncmdiKDE5NCw0OSw1NCknLCB0ZXh0QWxpZ246ICdzdGFydCcsIG1hcmdpbjogMCB9fT5JbmZlY3RlZDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsQ29uZmlybWVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTk0LDQ5LDU0KScsIGhlaWdodDogNCwgd2lkdGg6ICc4MCUnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogNSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICdyZ2IoMjUxLDIwMCwxMjgpJywgdGV4dEFsaWduOiAnc3RhcnQnLCBtYXJnaW46IDAgfX0+QWN0aXZlPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IDAgfX0+eyhkYXRhLnRvdGFsQ29uZmlybWVkIC0gZGF0YS50b3RhbERlYXRocyAtIGRhdGEudG90YWxSZWNvdmVyZWQpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMjUxLDIwMCwxMjgpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3JnYig3OSw3Nyw4MyknLCB0ZXh0QWxpZ246ICdzdGFydCcsIG1hcmdpbjogMCB9fT5EZWF0aHM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogMCB9fT57ZGF0YS50b3RhbERlYXRocy50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDc5LDc3LDgzKScsIGhlaWdodDogNCwgd2lkdGg6ICc4MCUnLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblRvcDogNSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdyZ2IoNzMsMTkzLDE3MiknLCB0ZXh0QWxpZ246ICdzdGFydCcsIG1hcmdpbjogMCB9fT5SZWNvdmVyZWQ8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogMCB9fT57ZGF0YS50b3RhbFJlY292ZXJlZC50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDczLDE5MywxNzIpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgZGF0YT17ZGF0YX0gdmlld3BvcnQ9e3ZpZXdwb3J0fSBzZXRWaWV3cG9ydD17c2V0Vmlld3BvcnR9IHNob3dQb3B1cD17c2hvd1BvcHVwfSBzZXRTaG93UG9wdXA9e3NldFNob3dQb3B1cH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TWFwMiBkYXRhPXtkYXRhfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlRvdGFsIENvbmZpcm1lZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDAgfX0+e2RhdGEudG90YWxDb25maXJtZWQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMT4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udEZhbWlseTogJ1BvcHBpbnMnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5DYXNlcyBJbmZvPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJCYXIgc2V0VHlwZT17c2V0VHlwZX0gdHlwZT17dHlwZX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgZGF0YT17ZGF0YX0gZGF0YTI9e2RhdGEyfSB0eXBlPXt0eXBlfSBzZXRTaG93UG9wdXA9e3NldFNob3dQb3B1cH0gaGFuZGxlQW5pbWF0ZT17KGxvbmcsIGxhdCkgPT4gc2V0Vmlld3BvcnQoeyAuLi52aWV3cG9ydCwgbGF0aXR1ZGU6IGxhdCwgbG9uZ2l0dWRlOiBsb25nLCB6b29tOiA0LCB0cmFuc2l0aW9uSW50ZXJwb2xhdG9yOiBuZXcgRmx5VG9JbnRlcnBvbGF0b3IoKSwgfSl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSwgW2RhdGEsIHR5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZnVuY3Rpb24gVGFiQmFyKHsgc2V0VHlwZSwgdHlwZSB9OiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiYmFyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGFiYmFyLWl0ZW0gYCArICh0eXBlID09PSAnSW5mZWN0ZWQnICYmICdzZWxlY3RlZCcpfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGFiYmFyLWl0ZW0tYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKCdJbmZlY3RlZCcpfT5JbmZlY3RlZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRhYmJhci1pdGVtIGAgKyAodHlwZSA9PT0gXCJEZWF0aHNcIiAmJiAnc2VsZWN0ZWQnKX0gPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0YWJiYXItaXRlbS1idXR0b24nIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoXCJEZWF0aHNcIil9PkRlYXRoczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRhYmJhci1pdGVtIGAgKyAodHlwZSA9PT0gXCJSZWNvdmVyZWRcIiAmJiAnc2VsZWN0ZWQnKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RhYmJhci1pdGVtLWJ1dHRvbicgb25DbGljaz17KCkgPT4gc2V0VHlwZShcIlJlY292ZXJlZFwiKX0+UmVjb3ZlcmVkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50YWJiYXItaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjAsIDIxLCAyMyk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhci1pdGVtLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIwLCAyMSwgMjMpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhciAuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFiYmFyLWl0ZW06OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhci1pdGVtOmhvdmVyOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmZ1bmN0aW9uIE1hcCh7IGRhdGEsIHZpZXdwb3J0LCBzZXRWaWV3cG9ydCwgc2hvd1BvcHVwLCBzZXRTaG93UG9wdXAgfTogeyBkYXRhOiBBUEksIHZpZXdwb3J0OiBhbnksIHNldFZpZXdwb3J0OiBhbnkgfSkge1xuXG4gICAgY29uc3QgbWFwUmVmID0gdXNlUmVmKG51bGwpXG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRJc0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcFJlZi5jdXJyZW50LmdldE1hcCgpO1xuXG4gICAgICAgIGlmIChpc0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lOSVQnKVxuICAgICAgICAgICAgbWFwLm9uKCdtb3VzZWVudGVyJywgJ3BvaW50czIgJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTIzJylcbiAgICAgICAgICAgICAgICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFttYXBSZWYsIGlzTG9hZGVkXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU9uTG9hZChldnQpIHtcbiAgICAgICAgY29uc3QgbWFwID0gbWFwUmVmLmN1cnJlbnQuZ2V0TWFwKCk7XG4gICAgICAgIHNldElzTG9hZGVkKHRydWUpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Lyoge3Nob3dQb3B1cC52aXNpYmxlID09PSB0cnVlICYmIDxMb2NhdGlvbkRldGFpbHMgc2hvd1BvcHVwPXtzaG93UG9wdXB9IC8+fSAqL31cbiAgICAgICAgICAgIDxSZWFjdE1hcEdMXG4gICAgICAgICAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICAgICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICAgICAgICAgIG9uTG9hZD17aGFuZGxlT25Mb2FkfVxuICAgICAgICAgICAgICAgIC8vIG9uSG92ZXI9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG1hcCA9IG1hcFJlZi5jdXJyZW50LmdldE1hcCgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZT8uZmVhdHVyZXM/LmZpbHRlcihpdGVtID0+IGl0ZW0ubGF5ZXIuaWQgPT09ICdwb2ludHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBzZXRIb3Zlcih0cnVlKVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2V0SG92ZXIoZmFsc2UpXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIH19XG4gICAgICAgICAgICAgICAgcmV1c2VNYXBzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9J2NhbGMoMTAwdmggLSAxODBweCknXG4gICAgICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17dmlldyA9PiBzZXRWaWV3cG9ydCh2aWV3KX1cbiAgICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17VE9LRU59XG4gICAgICAgICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2RhcmstdjlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYXJlYXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaXNwbGF5TmFtZSA9PT0gZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb246IGRhdGEuYXJlYXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaXNwbGF5TmFtZSA9PT0gZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpWzBdLCBjb3VudHJ5OiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gZGF0YS5hcmVhcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmFyZWFzLmZpbHRlcihpdGVtMiA9PiBpdGVtMi5kaXNwbGF5TmFtZSA9PT0gZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uOiBkYXRhLmFyZWFzW2luZGV4XS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBlPy5mZWF0dXJlcz8uWzBdPy5wcm9wZXJ0aWVzPy50aXRsZSlbMF0sIGNvdW50cnk6IGRhdGEuYXJlYXNbaW5kZXhdLmRpc3BsYXlOYW1lIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2hvd1BvcHVwLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQb3B1cCh7IHZpc2libGU6IGZhbHNlLCBsb2NhdGlvbjogbnVsbCB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U291cmNlIGlkPSdDb3VudHJpZXMnIHR5cGU9J2dlb2pzb24nIGRhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnJlZHVjZSgoc3VtLCB2YWw6IEFQSSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2VvbWV0cnknOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmxvbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydGllcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IHZhbC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpY29uJzogJ21vbnVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b3RhbCc6IHZhbC50b3RhbENvbmZpcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSA9ICEhc3VtID8gWy4uLnN1bSwgb2JqXSA6IFtvYmpdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pXG4gICAgICAgICAgICAgICAgICAgIH0sIFtkYXRhXSlcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZCc6ICdwb2ludHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICdwb2ludHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtcmFkaXVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZ2V0JywgJ3RvdGFsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMCwgMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCwgMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwMCwgMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMDAsIDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMDAwLCAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAwMDAwLCAzNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLWNvbG9yJzogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtb3BhY2l0eSc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2dldCcsICd0b3RhbCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCwgLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCwgLjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMDAsIDAuOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAwMCwgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NvdXJjZT5cblxuICAgICAgICAgICAgICAgIDxTb3VyY2UgaWQ9J0NpdGllcycgdHlwZT0nZ2VvanNvbicgZGF0YT17e1xuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMucmVkdWNlKChzdW0sIHZhbDogQVBJKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmFyZWFzLm1hcCgoaXRlbTogQVBJKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZW9tZXRyeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxvbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ljb24nOiAnbW9udW1lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBpdGVtLnRvdGFsQ29uZmlybWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtID0gISFzdW0gPyBbLi4uc3VtLCBvYmpdIDogW29ial1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgICAgICAgICB9LCBbZGF0YV0pXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAncG9pbnRzMicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc291cmNlJzogJ3BvaW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydnZXQnLCAndG90YWwnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwLCA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwLCA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwLCA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCwgNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAsIDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMCwgOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLWNvbG9yJzogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtb3BhY2l0eSc6IDAuNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Tb3VyY2U+XG5cblxuICAgICAgICAgICAgICAgIHtzaG93UG9wdXAudmlzaWJsZSAmJiA8UG9wdXBcbiAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3Nob3dQb3B1cC5yZWdpb24ubGF0fVxuICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3Nob3dQb3B1cC5yZWdpb24ubG9uZ31cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b249e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXsxMH1cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogZmFsc2UsIGxvY2F0aW9uOiBudWxsIH0pfVxuICAgICAgICAgICAgICAgICAgICBhbmNob3I9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBwYWRkaW5nOiA1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScsIHdpZHRoOiAyMCwgaGVpZ2h0OiAyMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuY291bnRyeWZsYWdzLmlvLyR7Y29kZXMoc2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWUgPyBzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lIDogc2hvd1BvcHVwLmNvdW50cnkpIHx8ICd1cyd9L3NoaW55LzY0LnBuZ2B9IGFsdD1cIjEyM1wiIHN0eWxlPXt7IHdpZHRoOiAnMTYwJScsIGhlaWdodDogJzE2MCUnLCBvYmplY3RGaXQ6ICdjb3ZlcicsIGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCB9fT57c2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpblRvcDogLTMwLCBtYXJnaW5Cb3R0b206IC0yMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntzaG93UG9wdXAucmVnaW9uLnRvdGFsQ29uZmlybWVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAsIG1hcmdpbjogJ2F1dG8gMCBhdXRvIGF1dG8nIH19PklORkVDVEVEPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW5Ub3A6IC0xNSwgbWFyZ2luQm90dG9tOiAtMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmdiKDUwLDIwMywxMTEpJyB9fT57c2hvd1BvcHVwLnJlZ2lvbi50b3RhbFJlY292ZXJlZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwLCBtYXJnaW46ICdhdXRvIDAgYXV0byBhdXRvJyB9fT5SRUNPVkVSRUQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpblRvcDogLTE1LCBtYXJnaW5Cb3R0b206IC0yMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PntzaG93UG9wdXAucmVnaW9uLnRvdGFsRGVhdGhzPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAsIG1hcmdpbjogJ2F1dG8gMCBhdXRvIGF1dG8nIH19PkRFQVRIUzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSAmJiA8aDMgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdibGFjaycsIGZvbnRTaXplOiAxMiwgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3B1bGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+IHtOdW1iZXIoKHNob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQgKiAxMDApIC8gZ2V0UG9wdWxhdGlvbihzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lKSkudG9GaXhlZCgyKX0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1BvcHVwPn1cblxuICAgICAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIExpc3QoeyBkYXRhLCBkYXRhMiwgdHlwZSwgaGFuZGxlQW5pbWF0ZSwgc2V0U2hvd1BvcHVwIH06IHsgZGF0YTogYW55LCBkYXRhMjogQXJyYXk8QVBJMj4sIHR5cGU6IGFueSwgaGFuZGxlQW5pYW10ZTogYW55LCBzZXRTaG93UG9wdXA6IGFueSB9KSB7XG5cbiAgICBmdW5jdGlvbiBzb3J0ZWQoKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBcIkluZmVjdGVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnNvcnQoKGE6IEFQSSwgYjogQVBJKSA9PiBiLnRvdGFsQ29uZmlybWVkIC0gYS50b3RhbENvbmZpcm1lZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJEZWF0aHNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMuc29ydCgoYTogQVBJLCBiOiBBUEkpID0+IGIudG90YWxEZWF0aHMgLSBhLnRvdGFsRGVhdGhzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlJlY292ZXJlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5zb3J0KChhOiBBUEksIGI6IEFQSSkgPT4gYi50b3RhbFJlY292ZXJlZCAtIGEudG90YWxSZWNvdmVyZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNvcnRlZC5sZW5ndGggPiAwKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiA8dWwgc3R5bGU9e3sgbWFyZ2luOiAwLCBwYWRkaW5nTGVmdDogMTAsIGhlaWdodDogJzEwMCUnLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBzY3JvbGxCZWhhdmlvcjogJ3Ntb290aCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgIHtzb3J0ZWQoKS5tYXAoKGFyZWE6IEFQSSkgPT4gKFxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGRpc3BsYXk6ICctd2Via2l0LWZsZXgnLCBmbGV4OiAnMSAwIGF1dG8nLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJhY2tncm91bmQ6ICdyZ2IoMjgsIDMwLCAzNCknLCBjdXJzb3I6ICdwb2ludGVyJywgYm9yZGVyUmFkaXVzOiA4LCBtYXJnaW5Ub3A6IDEwLCBwYWRkaW5nTGVmdDogMjAsIHBhZGRpbmdSaWdodDogMjAgfX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbjogZGF0YS5hcmVhcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXlOYW1lID09PSBhcmVhLmRpc3BsYXlOYW1lKVswXSwgY291bnRyeTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIGhhbmRsZUFuaW1hdGUoYXJlYS5sb25nLCBhcmVhLmxhdClcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNTAlJywgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuY291bnRyeWZsYWdzLmlvLyR7Y29kZXMoYXJlYS5kaXNwbGF5TmFtZSkgfHwgJ3VzJ30vc2hpbnkvNjQucG5nYH0gYWx0PVwiMTIzXCIgc3R5bGU9e3sgd2lkdGg6ICcxNjAlJywgaGVpZ2h0OiAnMTYwJScsIG9iamVjdEZpdDogJ2NvdmVyJywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxNSwgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknLCBtYXJnaW46ICcwIGF1dG8gMCAwJyB9fT57YXJlYS5kaXNwbGF5TmFtZX08L2g1PlxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT57dHlwZSA9PT0gXCJJbmZlY3RlZFwiID8gYXJlYS50b3RhbENvbmZpcm1lZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgOiB0eXBlID09PSBcIlJlY292ZXJlZFwiID8gYXJlYS50b3RhbFJlY292ZXJlZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgOiB0eXBlID09PSBcIkRlYXRoc1wiICYmIGFyZWEudG90YWxEZWF0aHM/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDU+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICA8L3VsPlxufVxuXG5jb25zdCBMb2NhdGlvbkRldGFpbHMgPSAoeyBzaG93UG9wdXAgfTogYW55KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBib3R0b206IDI1LFxuICAgICAgICAgICAgbGVmdDogMjUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTk5LFxuICAgICAgICAgICAgcGFkZGluZzogMTUsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDhcbiAgICAgICAgfX0+XG4gICAgICAgICAgICB7c2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnLCB3aWR0aDogMjAsIGhlaWdodDogMjAsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3d3dy5jb3VudHJ5ZmxhZ3MuaW8vJHtjb2RlcyhzaG93UG9wdXAuY291bnRyeSA9PT0gdHJ1ZSA/IHNob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWUgOiBzaG93UG9wdXAuY291bnRyeSkgfHwgJ3VzJ30vc2hpbnkvNjQucG5nYH0gYWx0PVwiMTIzXCIgc3R5bGU9e3sgd2lkdGg6ICcxNjAlJywgaGVpZ2h0OiAnMTYwJScsIG9iamVjdEZpdDogJ2NvdmVyJywgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAgfX0+e3Nob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PjxoMz57c2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZX0gPC9oMz4gPGxhYmVsIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA4IH19PntzaG93UG9wdXAuY291bnRyeX08L2xhYmVsPjwvc3Bhbj59XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ3JnYigyNTIsMTg0LDQ0KScsIGZvbnRTaXplOiAxMiB9fT48Yj5Db25maXJtZWQ6PC9iPiAge3Nob3dQb3B1cC5yZWdpb24udG90YWxDb25maXJtZWQ/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpID8/IDB9PC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdyZ2IoNTAsMjAzLDExMSknLCBmb250U2l6ZTogMTIgfX0+PGI+UmVjb3ZlcmVkOjwvYj57c2hvd1BvcHVwLnJlZ2lvbi50b3RhbFJlY292ZXJlZD8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ3JlZCcsIGZvbnRTaXplOiAxMiB9fT48Yj5EZWF0aHM6PC9iPiB7c2hvd1BvcHVwLnJlZ2lvbi50b3RhbERlYXRocz8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L3A+XG4gICAgICAgICAgICB7c2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWUgJiYgPGgzIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogMTIgfX0+PGI+UG9wdWxhdGlvbjo8L2I+ICB7TnVtYmVyKChzaG93UG9wdXAucmVnaW9uLnRvdGFsQ29uZmlybWVkICogMTAwKSAvIGdldFBvcHVsYXRpb24oc2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZSkpLnRvRml4ZWQoMil9JTwvaDM+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IFJlbmRlckNvdW50cmllcyA9ICh7IGRhdGEsIHNob3dQb3B1cCwgc2V0U2hvd1BvcHVwIH06IHsgZGF0YTogYW55LCBzaG93UG9wdXA/OiBhbnksIHNldFNob3dQb3B1cD86IGFueSB9KSA9PiB7XG4gICAgcmV0dXJuIGRhdGEuYXJlYXMubWFwKHJlZ2lvbiA9PiB7XG4gICAgICAgIHJldHVybiA8UmVkQnViYmxlTWFya2VyIGtleT17cmVnaW9uLmRpc3BsYXlOYW1lfSB3aWR0aD17MTB9IHJlZ2lvbj17cmVnaW9ufSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb24sIGNvdW50cnk6IHRydWUgfSl9IHNlbGVjdGVkPXtyZWdpb24uZGlzcGxheU5hbWUgPT09IHNob3dQb3B1cC5yZWdpb24/LmRpc3BsYXlOYW1lfSAvPlxuICAgIH0pXG59XG5cbmNvbnN0IFJlbmRlckNpdGllcyA9ICh7IGRhdGEsIHNob3dQb3B1cCwgc2V0U2hvd1BvcHVwIH06IHsgZGF0YTogYW55LCBzaG93UG9wdXA/OiBhbnksIHNldFNob3dQb3B1cD86IGFueSB9KSA9PiB7XG4gICAgcmV0dXJuIGRhdGEuYXJlYXMubWFwKGMgPT4ge1xuICAgICAgICByZXR1cm4gYy5hcmVhcy5tYXAocmVnaW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UmVkQnViYmxlTWFya2VyIGtleT17cmVnaW9uLmRpc3BsYXlOYW1lfSB3aWR0aD17NX0gcmVnaW9uPXtyZWdpb259IG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbiwgY291bnRyeTogYy5kaXNwbGF5TmFtZSB9KX0gc2VsZWN0ZWQ9e3JlZ2lvbi5kaXNwbGF5TmFtZSA9PT0gc2hvd1BvcHVwLnJlZ2lvbj8uZGlzcGxheU5hbWV9IC8+XG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cblxuY29uc3QgUmVkQnViYmxlTWFya2VyID0gKHsgd2lkdGgsIHJlZ2lvbiwgb25DbGljaywgc2VsZWN0ZWQgfTogeyB3aWR0aDogbnVtYmVyLCByZWdpb246IEFQSSwgb25DbGljazogKCkgPT4gdm9pZCwgc2VsZWN0ZWQ6IGJvb2xlYW4gfSkgPT4gKFxuICAgIDxNYXJrZXIga2V5PXtyZWdpb24uZGlzcGxheU5hbWV9IGxvbmdpdHVkZT17cmVnaW9uLmxvbmd9IGxhdGl0dWRlPXtyZWdpb24ubGF0fSBjYXB0dXJlRHJhZz17ZmFsc2V9PlxuICAgICAgICA8c3ZnIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjZDAwJyxcbiAgICAgICAgICAgICAgICBzdHJva2U6ICdub25lJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogKHdpZHRoICogMikgKyAxMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICh3aWR0aCAqIDIpICsgMTAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7LXdpZHRoIC8gMn1weCwkey13aWR0aH1weClgXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9e3dpZHRoICsgNX0gY3k9e3dpZHRoICsgNX0gcj17d2lkdGh9IGZpbGw9e1wicmVkXCJ9IHN0cm9rZVdpZHRoPXtzZWxlY3RlZCA/IDMgOiAwfSBzdHJva2U9e3NlbGVjdGVkID8gXCJvcmFuZ2VcIiA6IFwicmVkXCJ9IHN0eWxlPXt7IGZpbGxPcGFjaXR5OiBvcGFjaXR5KHJlZ2lvbi50b3RhbERlYXRocykgfX0gLz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9NYXJrZXI+XG4pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2JpbmcuY29tL2NvdmlkL2RhdGEnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKCdodHRwczovL2Nvcm9uYS1hcGkuY29tL2NvdW50cmllcycpO1xuICAgIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzMi5qc29uKCk7XG5cbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhLCBkYXRhMjogZGF0YTIuZGF0YSB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIb21lUGFnZSkiXX0= */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/index.tsx */"));
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
    height: "calc(100vh - 180px)",
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
      lineNumber: 263,
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
      lineNumber: 297,
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
      lineNumber: 322,
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
      lineNumber: 353,
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
      lineNumber: 380,
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
      lineNumber: 404,
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
      lineNumber: 414,
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
      lineNumber: 415,
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
      lineNumber: 416,
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
      lineNumber: 417,
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
      lineNumber: 419,
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
      lineNumber: 421,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'red'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
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
      lineNumber: 423,
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
      lineNumber: 425,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'rgb(50,203,111)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
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
      lineNumber: 427,
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
      lineNumber: 429,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'orange'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
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
      lineNumber: 431,
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
      lineNumber: 433,
      columnNumber: 56
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
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
      lineNumber: 461,
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
        lineNumber: 463,
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
        lineNumber: 467,
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
        lineNumber: 468,
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
        lineNumber: 471,
        columnNumber: 17
      }
    }, area.displayName), __jsx("h5", {
      style: {
        color: 'white'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
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
      lineNumber: 480,
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
      lineNumber: 493,
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
      lineNumber: 494,
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
      lineNumber: 495,
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
      lineNumber: 497,
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
      lineNumber: 500,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 111
    }
  }, showPopup.region.displayName, " "), " ", __jsx("label", {
    style: {
      paddingLeft: 8
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
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
      lineNumber: 501,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
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
      lineNumber: 502,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
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
      lineNumber: 503,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
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
      lineNumber: 504,
      columnNumber: 44
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
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
        lineNumber: 511,
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
          lineNumber: 518,
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
      lineNumber: 527,
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
      lineNumber: 528,
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
      lineNumber: 537,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.5790a7199a9ce9be1f4e.hot-update.js.map