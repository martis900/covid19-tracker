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
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 33
    }
  }, "Global Cases")), __jsx("div", {
    style: {
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
      lineNumber: 128,
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
      lineNumber: 129,
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
      lineNumber: 130,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      paddingLeft: 50
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 133,
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
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      paddingLeft: 50
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 138,
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
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 37
    }
  })), __jsx("div", {
    style: {
      paddingLeft: 50
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 143,
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
      lineNumber: 144,
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
      lineNumber: 145,
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
      lineNumber: 149,
      columnNumber: 25
    }
  })))), Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return __jsx("div", {
      className: "list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 28
      }
    }, __jsx("h2", {
      style: {
        color: 'white',
        textAlign: 'center'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }
    }, "Total Confirmed"), __jsx("h1", {
      style: {
        color: 'red',
        textAlign: 'center',
        marginTop: 0
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 25
      }
    }, data.totalConfirmed.toLocaleString('en-US')), __jsx("h3", {
      style: {
        color: 'white',
        fontFamily: 'Poppins',
        textAlign: 'left'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    }, "Cases Info"), __jsx(TabBar, {
      setType: setType,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
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
        lineNumber: 164,
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
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === 'Infected' && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
      lineNumber: 178,
      columnNumber: 17
    }
  }, "Infected")), __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === "Deaths" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
      lineNumber: 181,
      columnNumber: 17
    }
  }, "Deaths")), __jsx("div", {
    className: "jsx-60989152" + " " + ("tabbar-item " + (type === "Recovered" && 'selected') || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 184,
      columnNumber: 17
    }
  }, "Recovered")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "60989152",
    __self: this
  }, ".tabbar-item.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;}.tabbar.jsx-60989152{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background:rgb(20,21,23);border-radius:8px;padding:10px;margin-left:10px;margin-right:10px;}.tabbar-item-button.jsx-60989152{border:none;outline:none;background:rgb(20,21,23);padding:10px;border-radius:8px;color:white;font-family:Poppins;cursor:pointer;font-weight:bold;font-size:15px;}.tabbar.jsx-60989152 .selected.jsx-60989152::after{width:80%;background:red;}.tabbar-item.jsx-60989152::after{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:55px;width:80%;content:'';-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out;height:5px;}.tabbar-item.jsx-60989152:hover.jsx-60989152::after{background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEx3QixBQUdrQyxBQUtBLEFBU0QsQUFZRixBQUlRLEFBU0gsVUFaQSxFQVpGLEdBeUJqQixVQXhCK0IsQUFZL0IseUJBWGlCLGFBQ0ssUUFhTCxHQTlCUyxBQUtPLE9BYWpCLFlBQ1Esb0JBQ0wsZUFDRSxpQkFDRixBQVNJLE9BOUJQLFFBc0JoQixJQXJCQSxBQThCYyxVQUNDLFdBQ21CLFlBNUJILHlCQUNULGtCQUNMLGFBQ0ksQUEwQk4sV0FDZixNQTFCc0Isa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvL0B0cy1ub2NoZWNrXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IERlY2tHTCwgeyBUaWxlTGF5ZXIsIEJpdG1hcExheWVyIH0gZnJvbSBcImRlY2suZ2xcIjtcbmltcG9ydCBSZWFjdE1hcEdMLCB7IE1hcmtlciwgUG9wdXAsIFN0YXRpY01hcCwgU291cmNlLCBMYXllciwgRmx5VG9JbnRlcnBvbGF0b3IgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHsgZ2V0UG9wdWxhdGlvbiB9IGZyb20gJy4uL2Fzc2VzdHMvY291bnRyaWVzJ1xuaW1wb3J0IE1hcDIgZnJvbSAnLi4vY29tcG9uZW50cy9NYXAyJ1xuaW1wb3J0IGNvZGVzIGZyb20gJy4uL2Fzc2VzdHMvY29kZXMnXG5cbmNvbnN0IHRpbGVTZXJ2ZXIgPSAnaHR0cHM6Ly9jLnRpbGUub3BlbnN0cmVldG1hcC5vcmcvJztcblxuXG5leHBvcnQgY29uc3QgSU5JVElBTF9WSUVXX1NUQVRFID0ge1xuICAgIGxhdGl0dWRlOiA0Ny42NSxcbiAgICBsb25naXR1ZGU6IDcsXG4gICAgem9vbTogNC41LFxuICAgIG1heFpvb206IDIwLFxuICAgIGJlYXJpbmc6IDBcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgYXJlYXM6IEFQSVtdO1xuICAgIHRvdGFsQ29uZmlybWVkOiBudW1iZXI7XG4gICAgdG90YWxEZWF0aHM6IG51bWJlcjtcbiAgICB0b3RhbFJlY292ZXJlZDogbnVtYmVyO1xuICAgIHRvdGFsUmVjb3ZlcmVkRGVsdGE6IG51bWJlcjtcbiAgICB0b3RhbERlYXRoc0RlbHRhOiBudW1iZXI7XG4gICAgdG90YWxDb25maXJtZWREZWx0YTogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGVkOiBEYXRlO1xuICAgIGxhdD86IG51bWJlcjtcbiAgICBsb25nPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUhpc3RvcnlEYXRhIHtcbiAgICBob3NwaXRhbGl6ZWRXaXRoU3ltcHRvbXM6IG51bWJlcjtcbiAgICBpbnRlbnNpdmVUaGVyYXB5OiBudW1iZXI7XG4gICAgdG90YWxIb3NwaXRhbGl6ZWQ6IG51bWJlcjtcbiAgICBob21lSW5zdWxhdGlvbjogbnVtYmVyO1xuICAgIHRvdGFsQ3VycmVudGx5UG9zaXRpdmU6IG51bWJlcjtcbiAgICBuZXdDdXJyZW50bHlQb3NpdGl2ZTogbnVtYmVyO1xuICAgIGRpc2NoYXJnZWRIZWFsZWQ6IG51bWJlcjtcbiAgICBkZWNlYXNlZDogbnVtYmVyO1xuICAgIHRvdGFsQ2FzZXM6IG51bWJlcjtcbiAgICB0YW1wb25pOiBudW1iZXI7XG4gICAgc291cmNlVXJsOiBzdHJpbmc7XG4gICAgbGFzdFVwZGF0ZWRBdFNvdXJjZTogRGF0ZTtcbiAgICBsYXN0VXBkYXRlZEF0QXBpZnk6IERhdGU7XG4gICAgcmVhZE1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xuICAgIGxhdGl0dWRlOiBudW1iZXI7XG4gICAgbG9uZ2l0dWRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9kYXkge1xuICAgIGRlYXRoczogbnVtYmVyO1xuICAgIGNvbmZpcm1lZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGN1bGF0ZWQge1xuICAgIGRlYXRoX3JhdGU6IG51bWJlcjtcbiAgICByZWNvdmVyeV9yYXRlOiBudW1iZXI7XG4gICAgcmVjb3ZlcmVkX3ZzX2RlYXRoX3JhdGlvPzogYW55O1xuICAgIGNhc2VzX3Blcl9taWxsaW9uX3BvcHVsYXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYXRlc3REYXRhIHtcbiAgICBkZWF0aHM6IG51bWJlcjtcbiAgICBjb25maXJtZWQ6IG51bWJlcjtcbiAgICByZWNvdmVyZWQ6IG51bWJlcjtcbiAgICBjcml0aWNhbDogbnVtYmVyO1xuICAgIGNhbGN1bGF0ZWQ6IENhbGN1bGF0ZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQVBJMiB7XG4gICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgcG9wdWxhdGlvbjogbnVtYmVyO1xuICAgIHVwZGF0ZWRfYXQ6IERhdGU7XG4gICAgdG9kYXk6IFRvZGF5O1xuICAgIGxhdGVzdF9kYXRhOiBMYXRlc3REYXRhO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBkYXRhOiBBUElcbiAgICBkYXRhMjogQXJyYXk8QVBJMj4sXG59XG5cbmNvbnN0IG9wYWNpdHkgPSAob3BhKSA9PiB7XG4gICAgbGV0IG9wID0gKG9wYSkgLyAyMDBcbiAgICBpZiAob3AgPCAwLjMpIHtcbiAgICAgICAgb3AgPSAwLjNcbiAgICB9XG4gICAgcmV0dXJuIG9wXG59XG5cbmNvbnN0IFRPS0VOID0gJ3BrLmV5SjFJam9pWVd4bGEyNWhiV0Z5ZEhsdVlYTWlMQ0poSWpvaVkyczVNWEpwZDNSek1EQnNhRE50Ym5GNk0yOXJNWGx2WXlKOS5mc3E3TEU2c0NtOVN4NVp1MlI1S1pRJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBkYXRhLCBkYXRhMiB9OiBJUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdOiBhbnkgPSB1c2VTdGF0ZTx7IHZpc2libGU6IGJvb2xlYW4sIHJlZ2lvbj86IEFQSSwgY291bnRyeT86IGJvb2xlYW4gfCBzdHJpbmcgfT4oeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdOiBhbnkgPSB1c2VTdGF0ZSh7XG4gICAgICAgIGxhdGl0dWRlOiA1MCxcbiAgICAgICAgbG9uZ2l0dWRlOiAwLFxuICAgICAgICB6b29tOiAyLFxuICAgICAgICB2aXNpYmlsaXR5Q29uc3RyYWludHM6IDFcbiAgICB9KTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTwnSW5mZWN0ZWQnIHwgJ0RlYXRocycgfCAnUmVjb3ZlcmVkJz4oXCJJbmZlY3RlZFwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tlci1mbGV4XCIgPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMT0xcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNjBweCknLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWZmXCIgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpbkJvdHRvbTogMCB9fT5Db3JvbmF2aXJ1cyBDT1ZJRC0xOTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpblRvcDogMCB9fT5HbG9iYWwgQ2FzZXM8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMCBhdXRvJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgcGFkZGluZ1RvcDogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgY29sb3I6ICdyZ2IoMTk0LDQ5LDU0KScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PkluZmVjdGVkPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IDAgfX0+e2RhdGEudG90YWxDb25maXJtZWQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigxOTQsNDksNTQpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBjb2xvcjogJ3JnYigyNTEsMjAwLDEyOCknLCB0ZXh0QWxpZ246ICdzdGFydCcsIG1hcmdpbjogMCB9fT5BY3RpdmU8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogMCB9fT57KGRhdGEudG90YWxDb25maXJtZWQgLSBkYXRhLnRvdGFsRGVhdGhzIC0gZGF0YS50b3RhbFJlY292ZXJlZCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigyNTEsMjAwLDEyOCknLCBoZWlnaHQ6IDQsIHdpZHRoOiAnODAlJywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAncmdiKDc5LDc3LDgzKScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PkRlYXRoczwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsRGVhdGhzLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoNzksNzcsODMpJywgaGVpZ2h0OiA0LCB3aWR0aDogJzgwJScsIGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luVG9wOiA1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3JnYig3MywxOTMsMTcyKScsIHRleHRBbGlnbjogJ3N0YXJ0JywgbWFyZ2luOiAwIH19PlJlY292ZXJlZDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAwIH19PntkYXRhLnRvdGFsUmVjb3ZlcmVkLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoNzMsMTkzLDE3MiknLCBoZWlnaHQ6IDQsIHdpZHRoOiAnODAlJywgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6IDUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAgZGF0YT17ZGF0YX0gdmlld3BvcnQ9e3ZpZXdwb3J0fSBzZXRWaWV3cG9ydD17c2V0Vmlld3BvcnR9IHNob3dQb3B1cD17c2hvd1BvcHVwfSBzZXRTaG93UG9wdXA9e3NldFNob3dQb3B1cH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TWFwMiBkYXRhPXtkYXRhfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+VG90YWwgQ29uZmlybWVkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogMCB9fT57ZGF0YS50b3RhbENvbmZpcm1lZC50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+Q2FzZXMgSW5mbzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQmFyIHNldFR5cGU9e3NldFR5cGV9IHR5cGU9e3R5cGV9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGRhdGE9e2RhdGF9IGRhdGEyPXtkYXRhMn0gdHlwZT17dHlwZX0gc2V0U2hvd1BvcHVwPXtzZXRTaG93UG9wdXB9IGhhbmRsZUFuaW1hdGU9eyhsb25nLCBsYXQpID0+IHNldFZpZXdwb3J0KHsgLi4udmlld3BvcnQsIGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG9uZywgem9vbTogNCwgdHJhbnNpdGlvbkludGVycG9sYXRvcjogbmV3IEZseVRvSW50ZXJwb2xhdG9yKCksIH0pfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH0sIFtkYXRhLCB0eXBlXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmZ1bmN0aW9uIFRhYkJhcih7IHNldFR5cGUsIHR5cGUgfTogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYmJhcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRhYmJhci1pdGVtIGAgKyAodHlwZSA9PT0gJ0luZmVjdGVkJyAmJiAnc2VsZWN0ZWQnKX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RhYmJhci1pdGVtLWJ1dHRvbicgb25DbGljaz17KCkgPT4gc2V0VHlwZSgnSW5mZWN0ZWQnKX0+SW5mZWN0ZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0YWJiYXItaXRlbSBgICsgKHR5cGUgPT09IFwiRGVhdGhzXCIgJiYgJ3NlbGVjdGVkJyl9ID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGFiYmFyLWl0ZW0tYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKFwiRGVhdGhzXCIpfT5EZWF0aHM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0YWJiYXItaXRlbSBgICsgKHR5cGUgPT09IFwiUmVjb3ZlcmVkXCIgJiYgJ3NlbGVjdGVkJyl9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0YWJiYXItaXRlbS1idXR0b24nIG9uQ2xpY2s9eygpID0+IHNldFR5cGUoXCJSZWNvdmVyZWRcIil9PlJlY292ZXJlZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudGFiYmFyLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YWJiYXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIwLCAyMSwgMjMpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YWJiYXItaXRlbS1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMCwgMjEsIDIzKTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YWJiYXIgLnNlbGVjdGVkOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhYmJhci1pdGVtOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YWJiYXItaXRlbTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5mdW5jdGlvbiBNYXAoeyBkYXRhLCB2aWV3cG9ydCwgc2V0Vmlld3BvcnQsIHNob3dQb3B1cCwgc2V0U2hvd1BvcHVwIH06IHsgZGF0YTogQVBJLCB2aWV3cG9ydDogYW55LCBzZXRWaWV3cG9ydDogYW55IH0pIHtcblxuICAgIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKVxuICAgIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBtYXAgPSBtYXBSZWYuY3VycmVudC5nZXRNYXAoKTtcblxuICAgICAgICBpZiAoaXNMb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJTklUJylcbiAgICAgICAgICAgIG1hcC5vbignbW91c2VlbnRlcicsICdwb2ludHMyICcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzEyMycpXG4gICAgICAgICAgICAgICAgbWFwLmdldENhbnZhcygpLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbbWFwUmVmLCBpc0xvYWRlZF0pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVPbkxvYWQoZXZ0KSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG1hcFJlZi5jdXJyZW50LmdldE1hcCgpO1xuICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIHtzaG93UG9wdXAudmlzaWJsZSA9PT0gdHJ1ZSAmJiA8TG9jYXRpb25EZXRhaWxzIHNob3dQb3B1cD17c2hvd1BvcHVwfSAvPn0gKi99XG4gICAgICAgICAgICA8UmVhY3RNYXBHTFxuICAgICAgICAgICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgICAgICAgICByZWY9e21hcFJlZn1cbiAgICAgICAgICAgICAgICBvbkxvYWQ9e2hhbmRsZU9uTG9hZH1cbiAgICAgICAgICAgICAgICAvLyBvbkhvdmVyPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBtYXAgPSBtYXBSZWYuY3VycmVudC5nZXRNYXAoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGU/LmZlYXR1cmVzPy5maWx0ZXIoaXRlbSA9PiBpdGVtLmxheWVyLmlkID09PSAncG9pbnRzJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2V0SG92ZXIodHJ1ZSlcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNldEhvdmVyKGZhbHNlKVxuICAgICAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB9fVxuICAgICAgICAgICAgICAgIHJldXNlTWFwcz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PSdjYWxjKDEwMHZoIC0gMTgwcHgpJ1xuICAgICAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3ZpZXcgPT4gc2V0Vmlld3BvcnQodmlldyl9XG4gICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e1RPS0VOfVxuICAgICAgICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9kYXJrLXY5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmFyZWFzLmZpbHRlcihpdGVtID0+IGl0ZW0uZGlzcGxheU5hbWUgPT09IGU/LmZlYXR1cmVzPy5bMF0/LnByb3BlcnRpZXM/LnRpdGxlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uOiBkYXRhLmFyZWFzLmZpbHRlcihpdGVtID0+IGl0ZW0uZGlzcGxheU5hbWUgPT09IGU/LmZlYXR1cmVzPy5bMF0/LnByb3BlcnRpZXM/LnRpdGxlKVswXSwgY291bnRyeTogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGRhdGEuYXJlYXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5hcmVhcy5maWx0ZXIoaXRlbTIgPT4gaXRlbTIuZGlzcGxheU5hbWUgPT09IGU/LmZlYXR1cmVzPy5bMF0/LnByb3BlcnRpZXM/LnRpdGxlKS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQb3B1cCh7IHZpc2libGU6IHRydWUsIHJlZ2lvbjogZGF0YS5hcmVhc1tpbmRleF0uYXJlYXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaXNwbGF5TmFtZSA9PT0gZT8uZmVhdHVyZXM/LlswXT8ucHJvcGVydGllcz8udGl0bGUpWzBdLCBjb3VudHJ5OiBkYXRhLmFyZWFzW2luZGV4XS5kaXNwbGF5TmFtZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNob3dQb3B1cC52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiBmYWxzZSwgbG9jYXRpb246IG51bGwgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNvdXJjZSBpZD0nQ291bnRyaWVzJyB0eXBlPSdnZW9qc29uJyBkYXRhPXt7XG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2x1c3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzogdXNlTWVtbygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5yZWR1Y2UoKHN1bSwgdmFsOiBBUEkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dlb21ldHJ5Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnUG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5sb25nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5sYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiB2YWwuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWNvbic6ICdtb251bWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG90YWwnOiB2YWwudG90YWxDb25maXJtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gPSAhIXN1bSA/IFsuLi5zdW0sIG9ial0gOiBbb2JqXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdW1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKVxuICAgICAgICAgICAgICAgICAgICB9LCBbZGF0YV0pXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWQnOiAncG9pbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzb3VyY2UnOiAncG9pbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLXJhZGl1cyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsIFsnbGluZWFyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2dldCcsICd0b3RhbCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCwgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAsIDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDAsIDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwMDAsIDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDAwLCAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMDAwMCwgMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwMDAwMCwgMzVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1jb2xvcic6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLW9wYWNpdHknOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJwb2xhdGUnLCBbJ2xpbmVhciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydnZXQnLCAndG90YWwnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsIC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDAsIC42LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDAwLCAwLjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwMDAsIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Tb3VyY2U+XG5cbiAgICAgICAgICAgICAgICA8U291cmNlIGlkPSdDaXRpZXMnIHR5cGU9J2dlb2pzb24nIGRhdGE9e3tcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnJlZHVjZSgoc3VtLCB2YWw6IEFQSSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5hcmVhcy5tYXAoKGl0ZW06IEFQSSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ2VvbWV0cnknOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnUG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sb25nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvcGVydGllcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBpdGVtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpY29uJzogJ21vbnVtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogaXRlbS50b3RhbENvbmZpcm1lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSA9ICEhc3VtID8gWy4uLnN1bSwgb2JqXSA6IFtvYmpdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VtXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgfSwgW2RhdGFdKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3BvaW50czInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NvdXJjZSc6ICdwb2ludHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaXJjbGUtcmFkaXVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVycG9sYXRlJywgWydsaW5lYXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZ2V0JywgJ3RvdGFsJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MCwgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMCwgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUwMCwgNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsIDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1MDAwLCA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMDAsIDlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NpcmNsZS1jb2xvcic6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2lyY2xlLW9wYWNpdHknOiAwLjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU291cmNlPlxuXG5cbiAgICAgICAgICAgICAgICB7c2hvd1BvcHVwLnZpc2libGUgJiYgPFBvcHVwXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtzaG93UG9wdXAucmVnaW9uLmxhdH1cbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtzaG93UG9wdXAucmVnaW9uLmxvbmd9XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRUb3A9ey0xMH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdD17MTB9XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGljaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dQb3B1cCh7IHZpc2libGU6IGZhbHNlLCBsb2NhdGlvbjogbnVsbCB9KX1cbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yPVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcGFkZGluZzogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnLCB3aWR0aDogMjAsIGhlaWdodDogMjAsIG92ZXJmbG93OiAnaGlkZGVuJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmNvdW50cnlmbGFncy5pby8ke2NvZGVzKHNob3dQb3B1cC5jb3VudHJ5ID09PSB0cnVlID8gc2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZSA6IHNob3dQb3B1cC5jb3VudHJ5KSB8fCAndXMnfS9zaGlueS82NC5wbmdgfSBhbHQ9XCIxMjNcIiBzdHlsZT17eyB3aWR0aDogJzE2MCUnLCBoZWlnaHQ6ICcxNjAlJywgb2JqZWN0Rml0OiAnY292ZXInLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBwYWRkaW5nTGVmdDogMTAgfX0+e3Nob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW5Ub3A6IC0zMCwgbWFyZ2luQm90dG9tOiAtMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57c2hvd1BvcHVwLnJlZ2lvbi50b3RhbENvbmZpcm1lZC50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwLCBtYXJnaW46ICdhdXRvIDAgYXV0byBhdXRvJyB9fT5JTkZFQ1RFRDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgbWFyZ2luVG9wOiAtMTUsIG1hcmdpbkJvdHRvbTogLTIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JnYig1MCwyMDMsMTExKScgfX0+e3Nob3dQb3B1cC5yZWdpb24udG90YWxSZWNvdmVyZWQ/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpID8/IDB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHBhZGRpbmdMZWZ0OiAxMCwgbWFyZ2luOiAnYXV0byAwIGF1dG8gYXV0bycgfX0+UkVDT1ZFUkVEPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW5Ub3A6IC0xNSwgbWFyZ2luQm90dG9tOiAtMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJyB9fT57c2hvd1BvcHVwLnJlZ2lvbi50b3RhbERlYXRocz8udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJykgPz8gMH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwLCBtYXJnaW46ICdhdXRvIDAgYXV0byBhdXRvJyB9fT5ERUFUSFM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWUgJiYgPGgzIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAnYmxhY2snLCBmb250U2l6ZTogMTIsIG1hcmdpblRvcDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9wdWxhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPiB7TnVtYmVyKChzaG93UG9wdXAucmVnaW9uLnRvdGFsQ29uZmlybWVkICogMTAwKSAvIGdldFBvcHVsYXRpb24oc2hvd1BvcHVwLnJlZ2lvbi5kaXNwbGF5TmFtZSkpLnRvRml4ZWQoMil9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Qb3B1cD59XG5cbiAgICAgICAgICAgIDwvUmVhY3RNYXBHTD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBMaXN0KHsgZGF0YSwgZGF0YTIsIHR5cGUsIGhhbmRsZUFuaW1hdGUsIHNldFNob3dQb3B1cCB9OiB7IGRhdGE6IGFueSwgZGF0YTI6IEFycmF5PEFQSTI+LCB0eXBlOiBhbnksIGhhbmRsZUFuaWFtdGU6IGFueSwgc2V0U2hvd1BvcHVwOiBhbnkgfSkge1xuXG4gICAgZnVuY3Rpb24gc29ydGVkKCkge1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJJbmZlY3RlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5hcmVhcy5zb3J0KChhOiBBUEksIGI6IEFQSSkgPT4gYi50b3RhbENvbmZpcm1lZCAtIGEudG90YWxDb25maXJtZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRGVhdGhzXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmFyZWFzLnNvcnQoKGE6IEFQSSwgYjogQVBJKSA9PiBiLnRvdGFsRGVhdGhzIC0gYS50b3RhbERlYXRocyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJSZWNvdmVyZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuYXJlYXMuc29ydCgoYTogQVBJLCBiOiBBUEkpID0+IGIudG90YWxSZWNvdmVyZWQgLSBhLnRvdGFsUmVjb3ZlcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzb3J0ZWQubGVuZ3RoID4gMCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gPHVsIHN0eWxlPXt7IG1hcmdpbjogMCwgcGFkZGluZ0xlZnQ6IDEwLCBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgc2Nyb2xsQmVoYXZpb3I6ICdzbW9vdGgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgICB7c29ydGVkKCkubWFwKChhcmVhOiBBUEkpID0+IChcbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnLXdlYmtpdC1mbGV4JywgZmxleDogJzEgMCBhdXRvJywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBiYWNrZ3JvdW5kOiAncmdiKDI4LCAzMCwgMzQpJywgY3Vyc29yOiAncG9pbnRlcicsIGJvcmRlclJhZGl1czogOCwgbWFyZ2luVG9wOiAxMCwgcGFkZGluZ0xlZnQ6IDIwLCBwYWRkaW5nUmlnaHQ6IDIwIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb246IGRhdGEuYXJlYXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaXNwbGF5TmFtZSA9PT0gYXJlYS5kaXNwbGF5TmFtZSlbMF0sIGNvdW50cnk6IHRydWUgfSlcbiAgICAgICAgICAgICAgICBoYW5kbGVBbmltYXRlKGFyZWEubG9uZywgYXJlYS5sYXQpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScsIHdpZHRoOiAyMCwgaGVpZ2h0OiAyMCwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vd3d3LmNvdW50cnlmbGFncy5pby8ke2NvZGVzKGFyZWEuZGlzcGxheU5hbWUpIHx8ICd1cyd9L3NoaW55LzY0LnBuZ2B9IGFsdD1cIjEyM1wiIHN0eWxlPXt7IHdpZHRoOiAnMTYwJScsIGhlaWdodDogJzE2MCUnLCBvYmplY3RGaXQ6ICdjb3ZlcicsIGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTUsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJywgbWFyZ2luOiAnMCBhdXRvIDAgMCcgfX0+e2FyZWEuZGlzcGxheU5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+e3R5cGUgPT09IFwiSW5mZWN0ZWRcIiA/IGFyZWEudG90YWxDb25maXJtZWQ/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpIDogdHlwZSA9PT0gXCJSZWNvdmVyZWRcIiA/IGFyZWEudG90YWxSZWNvdmVyZWQ/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpIDogdHlwZSA9PT0gXCJEZWF0aHNcIiAmJiBhcmVhLnRvdGFsRGVhdGhzPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKX08L2g1PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgPC91bD5cbn1cblxuY29uc3QgTG9jYXRpb25EZXRhaWxzID0gKHsgc2hvd1BvcHVwIH06IGFueSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYm90dG9tOiAyNSxcbiAgICAgICAgICAgIGxlZnQ6IDI1LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgekluZGV4OiA5OTk5OTk5OSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1LFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4XG4gICAgICAgIH19PlxuICAgICAgICAgICAge3Nob3dQb3B1cC5jb3VudHJ5ID09PSB0cnVlXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNTAlJywgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCBvdmVyZmxvdzogJ2hpZGRlbicsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly93d3cuY291bnRyeWZsYWdzLmlvLyR7Y29kZXMoc2hvd1BvcHVwLmNvdW50cnkgPT09IHRydWUgPyBzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lIDogc2hvd1BvcHVwLmNvdW50cnkpIHx8ICd1cyd9L3NoaW55LzY0LnBuZ2B9IGFsdD1cIjEyM1wiIHN0eWxlPXt7IHdpZHRoOiAnMTYwJScsIGhlaWdodDogJzE2MCUnLCBvYmplY3RGaXQ6ICdjb3ZlcicsIGJvcmRlclJhZGl1czogJzUwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgcGFkZGluZ0xlZnQ6IDEwIH19PntzaG93UG9wdXAucmVnaW9uLmRpc3BsYXlOYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT48aDM+e3Nob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWV9IDwvaDM+IDxsYWJlbCBzdHlsZT17eyBwYWRkaW5nTGVmdDogOCB9fT57c2hvd1BvcHVwLmNvdW50cnl9PC9sYWJlbD48L3NwYW4+fVxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdyZ2IoMjUyLDE4NCw0NCknLCBmb250U2l6ZTogMTIgfX0+PGI+Q29uZmlybWVkOjwvYj4gIHtzaG93UG9wdXAucmVnaW9uLnRvdGFsQ29uZmlybWVkPy50b0xvY2FsZVN0cmluZygnZW4tVVMnKSA/PyAwfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZsZXg6IDEsIGNvbG9yOiAncmdiKDUwLDIwMywxMTEpJywgZm9udFNpemU6IDEyIH19PjxiPlJlY292ZXJlZDo8L2I+e3Nob3dQb3B1cC5yZWdpb24udG90YWxSZWNvdmVyZWQ/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpID8/IDB9PC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZmxleDogMSwgY29sb3I6ICdyZWQnLCBmb250U2l6ZTogMTIgfX0+PGI+RGVhdGhzOjwvYj4ge3Nob3dQb3B1cC5yZWdpb24udG90YWxEZWF0aHM/LnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpID8/IDB9PC9wPlxuICAgICAgICAgICAge3Nob3dQb3B1cC5jb3VudHJ5ID09PSB0cnVlICYmIDxoMyBzdHlsZT17eyBmbGV4OiAxLCBjb2xvcjogJ2JsYWNrJywgZm9udFNpemU6IDEyIH19PjxiPlBvcHVsYXRpb246PC9iPiAge051bWJlcigoc2hvd1BvcHVwLnJlZ2lvbi50b3RhbENvbmZpcm1lZCAqIDEwMCkgLyBnZXRQb3B1bGF0aW9uKHNob3dQb3B1cC5yZWdpb24uZGlzcGxheU5hbWUpKS50b0ZpeGVkKDIpfSU8L2gzPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBSZW5kZXJDb3VudHJpZXMgPSAoeyBkYXRhLCBzaG93UG9wdXAsIHNldFNob3dQb3B1cCB9OiB7IGRhdGE6IGFueSwgc2hvd1BvcHVwPzogYW55LCBzZXRTaG93UG9wdXA/OiBhbnkgfSkgPT4ge1xuICAgIHJldHVybiBkYXRhLmFyZWFzLm1hcChyZWdpb24gPT4ge1xuICAgICAgICByZXR1cm4gPFJlZEJ1YmJsZU1hcmtlciBrZXk9e3JlZ2lvbi5kaXNwbGF5TmFtZX0gd2lkdGg9ezEwfSByZWdpb249e3JlZ2lvbn0gb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKHsgdmlzaWJsZTogdHJ1ZSwgcmVnaW9uLCBjb3VudHJ5OiB0cnVlIH0pfSBzZWxlY3RlZD17cmVnaW9uLmRpc3BsYXlOYW1lID09PSBzaG93UG9wdXAucmVnaW9uPy5kaXNwbGF5TmFtZX0gLz5cbiAgICB9KVxufVxuXG5jb25zdCBSZW5kZXJDaXRpZXMgPSAoeyBkYXRhLCBzaG93UG9wdXAsIHNldFNob3dQb3B1cCB9OiB7IGRhdGE6IGFueSwgc2hvd1BvcHVwPzogYW55LCBzZXRTaG93UG9wdXA/OiBhbnkgfSkgPT4ge1xuICAgIHJldHVybiBkYXRhLmFyZWFzLm1hcChjID0+IHtcbiAgICAgICAgcmV0dXJuIGMuYXJlYXMubWFwKHJlZ2lvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFJlZEJ1YmJsZU1hcmtlciBrZXk9e3JlZ2lvbi5kaXNwbGF5TmFtZX0gd2lkdGg9ezV9IHJlZ2lvbj17cmVnaW9ufSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAoeyB2aXNpYmxlOiB0cnVlLCByZWdpb24sIGNvdW50cnk6IGMuZGlzcGxheU5hbWUgfSl9IHNlbGVjdGVkPXtyZWdpb24uZGlzcGxheU5hbWUgPT09IHNob3dQb3B1cC5yZWdpb24/LmRpc3BsYXlOYW1lfSAvPlxuXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG5cbmNvbnN0IFJlZEJ1YmJsZU1hcmtlciA9ICh7IHdpZHRoLCByZWdpb24sIG9uQ2xpY2ssIHNlbGVjdGVkIH06IHsgd2lkdGg6IG51bWJlciwgcmVnaW9uOiBBUEksIG9uQ2xpY2s6ICgpID0+IHZvaWQsIHNlbGVjdGVkOiBib29sZWFuIH0pID0+IChcbiAgICA8TWFya2VyIGtleT17cmVnaW9uLmRpc3BsYXlOYW1lfSBsb25naXR1ZGU9e3JlZ2lvbi5sb25nfSBsYXRpdHVkZT17cmVnaW9uLmxhdH0gY2FwdHVyZURyYWc9e2ZhbHNlfT5cbiAgICAgICAgPHN2ZyBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2QwMCcsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICh3aWR0aCAqIDIpICsgMTAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAod2lkdGggKiAyKSArIDEwLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgkey13aWR0aCAvIDJ9cHgsJHstd2lkdGh9cHgpYFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PXt3aWR0aCArIDV9IGN5PXt3aWR0aCArIDV9IHI9e3dpZHRofSBmaWxsPXtcInJlZFwifSBzdHJva2VXaWR0aD17c2VsZWN0ZWQgPyAzIDogMH0gc3Ryb2tlPXtzZWxlY3RlZCA/IFwib3JhbmdlXCIgOiBcInJlZFwifSBzdHlsZT17eyBmaWxsT3BhY2l0eTogb3BhY2l0eShyZWdpb24udG90YWxEZWF0aHMpIH19IC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIDwvTWFya2VyPlxuKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iaW5nLmNvbS9jb3ZpZC9kYXRhJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jb3JvbmEtYXBpLmNvbS9jb3VudHJpZXMnKTtcbiAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlczIuanNvbigpO1xuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSwgZGF0YTI6IGRhdGEyLmRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSG9tZVBhZ2UpIl19 */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/index.tsx */"));
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
      lineNumber: 261,
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
      lineNumber: 295,
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
      lineNumber: 320,
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
      lineNumber: 351,
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
      lineNumber: 378,
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
      lineNumber: 402,
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
      lineNumber: 412,
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
      lineNumber: 413,
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
      lineNumber: 414,
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
      lineNumber: 415,
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
      lineNumber: 417,
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
      lineNumber: 419,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'red'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
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
      lineNumber: 421,
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
      lineNumber: 423,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'rgb(50,203,111)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
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
      lineNumber: 425,
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
      lineNumber: 427,
      columnNumber: 25
    }
  }, __jsx("h2", {
    style: {
      color: 'orange'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
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
      lineNumber: 429,
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
      lineNumber: 431,
      columnNumber: 56
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
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
      lineNumber: 459,
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
        lineNumber: 461,
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
        lineNumber: 465,
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
        lineNumber: 466,
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
        lineNumber: 469,
        columnNumber: 17
      }
    }, area.displayName), __jsx("h5", {
      style: {
        color: 'white'
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
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
      lineNumber: 478,
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
      lineNumber: 491,
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
      lineNumber: 492,
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
      lineNumber: 493,
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
      lineNumber: 495,
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
      lineNumber: 498,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 111
    }
  }, showPopup.region.displayName, " "), " ", __jsx("label", {
    style: {
      paddingLeft: 8
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
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
      lineNumber: 499,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
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
      lineNumber: 500,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
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
      lineNumber: 501,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
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
      lineNumber: 502,
      columnNumber: 44
    }
  }, __jsx("b", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
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
        lineNumber: 509,
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
          lineNumber: 516,
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
      lineNumber: 525,
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
      lineNumber: 526,
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
      lineNumber: 535,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.a88ec2e4b6861d1a140d.hot-update.js.map