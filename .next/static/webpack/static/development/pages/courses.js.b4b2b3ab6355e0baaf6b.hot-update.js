webpackHotUpdate("static/development/pages/courses.js",{

/***/ "./pages/courses.tsx":
/*!***************************!*\
  !*** ./pages/courses.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/courses.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
//@ts-nocheck






function CoursesPage() {
  var _this = this;

  var fetcher = function fetcher(url) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetcher$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url).then(function (r) {
              return r.json();
            }));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_6__["default"])('/api/courses', fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  var a = {
    "Free?": "YES",
    "Course Name": "Successful Negotiation",
    "Course Link": "https://www.coursera.org/learn/negotiation-skills",
    "Course Topic Area": "Communication Skills",
    "Course Length": "17 Hours",
    "Organization": "Coursera",
    "Organization-image": "https://additionalknowledge.files.wordpress.com/2019/05/ai-is-the-new-electricity-for-business-society.png"
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('All'),
      selected = _useState[0],
      setSelected = _useState[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("script", {
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8",
    className: "jsx-3554762820",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    className: "jsx-3554762820",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3554762820" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      marginRight: 'auto',
      background: 'rgb(34,37,41)',
      borderRadius: 9,
      padding: 20,
      alignSelf: 'center'
    },
    className: "jsx-3554762820",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("h3", {
    style: {
      color: 'white',
      fontFamily: 'Poppins',
      margin: 0,
      wid: wid
    },
    className: "jsx-3554762820",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Online Courses ", selected)), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 35
    },
    className: "jsx-3554762820",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, !!data && Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(['All'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.map(function (item) {
    return item["Course Topic Area"];
  }))))).map(function (item) {
    return __jsx("label", {
      style: {
        margin: '5px 20px',
        padding: 10,
        background: 'white',
        color: 'black',
        borderRadius: 20,
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return setSelected(item);
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 36
      }
    }, item);
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    },
    className: "jsx-3554762820",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, !!data && data.filter(function (item) {
    return selected === 'All' ? item : item["Course Topic Area"] === selected;
  }).map(function (item) {
    return __jsx("a", {
      target: "blank",
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: {
        background: 'rgb(34,37,41)',
        borderRadius: 9,
        alignSelf: 'center',
        width: 400,
        margin: '35px 0'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 37
      }
    }, __jsx("div", {
      style: {
        flexDirection: 'row',
        display: 'flex'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 41
      }
    }, __jsx("div", {
      style: {
        alignItems: 'center',
        padding: 20,
        marginRight: 'auto'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 45
      }
    }, __jsx("h3", {
      style: {
        margin: 0,
        color: 'grey'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 49
      }
    }, item.Organization), __jsx("h4", {
      style: {
        color: 'white',
        marginRight: 'auto',
        margin: 0,
        fontSize: '100%'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 49
      }
    }, item["Course Name"])), item["Organization-image"] && __jsx("img", {
      src: item["Organization-image"],
      style: {
        borderRadius: 8,
        width: '30%',
        objectFit: 'contain',
        background: 'white'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 76
      }
    })), __jsx("hr", {
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }), __jsx("div", {
      style: {
        padding: 20
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 41
      }
    }, __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 86
      }
    }, item["Course Length"])), __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 45
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 86
      }
    }, item["Course Topic Area"])), __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 45
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 86
      }
    }, item["Course Length"]), " ")), __jsx("div", {
      style: {
        height: '3rem',
        display: 'flex',
        flexDirection: 'row'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 41
      }
    }, __jsx("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 45
      }
    }, item['Free?'] === "YES" && __jsx("h4", {
      style: {
        color: 'white'
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 77
      }
    }, "Free")), __jsx("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        border: '2px solid white',
        borderRadius: '7px 0 7px 0',
        background: 'white',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return window.open(item["Course Link"], '_blank');
      },
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }, __jsx("h4", {
      className: "jsx-3554762820",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 49
      }
    }, "Visit")))));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3554762820",
    __self: this
  }, ".news.jsx-3554762820{width:400px;min-height:200px;border-radius:8px;margin:0 auto 0 0;}.container.jsx-3554762820{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:80%;margin:auto;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}@media only screen and (max-width:1214px){.container.jsx-3554762820{width:90%;}}@media only screen and (max-width:876px){.container.jsx-3554762820{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR3dCLEFBR2dDLEFBTVcsQUFVUixBQUtDLFVBSmYsQ0FLQSxDQXJCaUIsaUJBQ0Msa0JBQ0Esa0JBQ3RCLGFBR2MsVUFDRSxZQUNDLGFBQ0EsMEVBQ1MsOEVBQ1YsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL0RFVi9EZXNrdG9wL2Nvdmlkd2ViL3BhZ2VzL2NvdXJzZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy9AdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi9hcGkvcG9zdHMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcG9zdHM/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElUd2VldHMge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpbWc6IHN0cmluZyxcbiAgICBkYXRlOiBzdHJpbmcsXG4gICAgdHdlZXQ6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSU5ld3Mge1xuICAgIGxpbms6IHN0cmluZztcbiAgICBtZWRpYTogc3RyaW5nO1xuICAgIGhlYWRsaW5lOiBzdHJpbmc7XG4gICAgdGltZTogc3RyaW5nO1xuICAgIHB1YmxpY2F0aW9uOiBzdHJpbmc7XG59XG5cblxuZnVuY3Rpb24gQ291cnNlc1BhZ2UoKSB7XG5cbiAgICBjb25zdCBmZXRjaGVyID0gYXN5bmMgdXJsID0+IGF3YWl0IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9jb3Vyc2VzJywgZmV0Y2hlcilcblxuICAgIGxldCBhID0ge1xuICAgICAgICBcIkZyZWU/XCI6IFwiWUVTXCIsXG4gICAgICAgIFwiQ291cnNlIE5hbWVcIjogXCJTdWNjZXNzZnVsIE5lZ290aWF0aW9uXCIsXG4gICAgICAgIFwiQ291cnNlIExpbmtcIjogXCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvbGVhcm4vbmVnb3RpYXRpb24tc2tpbGxzXCIsXG4gICAgICAgIFwiQ291cnNlIFRvcGljIEFyZWFcIjogXCJDb21tdW5pY2F0aW9uIFNraWxsc1wiLFxuICAgICAgICBcIkNvdXJzZSBMZW5ndGhcIjogXCIxNyBIb3Vyc1wiLFxuICAgICAgICBcIk9yZ2FuaXphdGlvblwiOiBcIkNvdXJzZXJhXCIsXG4gICAgICAgIFwiT3JnYW5pemF0aW9uLWltYWdlXCI6IFwiaHR0cHM6Ly9hZGRpdGlvbmFsa25vd2xlZGdlLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxOS8wNS9haS1pcy10aGUtbmV3LWVsZWN0cmljaXR5LWZvci1idXNpbmVzcy1zb2NpZXR5LnBuZ1wiXG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnQWxsJylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiIGNoYXJTZXQ9XCJ1dGYtOFwiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICdhdXRvJywgYmFja2dyb3VuZDogJ3JnYigzNCwzNyw0MSknLCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IDIwLCBhbGlnblNlbGY6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpbjogMCAsd2lkfX0+T25saW5lIENvdXJzZXMge3NlbGVjdGVkfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGZsZXhXcmFwOiAnd3JhcCcsIG1hcmdpblRvcDogMzUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ISFkYXRhICYmIFsuLi5uZXcgU2V0KFsnQWxsJywgLi4uZGF0YS5tYXAoaXRlbSA9PiBpdGVtW1wiQ291cnNlIFRvcGljIEFyZWFcIl0pXSldLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxhYmVsIHN0eWxlPXt7IG1hcmdpbjogJzVweCAyMHB4JywgcGFkZGluZzogMTAsIGJhY2tncm91bmQ6ICd3aGl0ZScsIGNvbG9yOiAnYmxhY2snLCBib3JkZXJSYWRpdXM6IDIwLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChpdGVtKX0+e2l0ZW19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBmbGV4V3JhcDogJ3dyYXAnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ISFkYXRhICYmIGRhdGEuZmlsdGVyKGl0ZW0gPT4gc2VsZWN0ZWQgPT09ICdBbGwnID8gaXRlbSA6IChpdGVtW1wiQ291cnNlIFRvcGljIEFyZWFcIl0gPT09IHNlbGVjdGVkKSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMzQsMzcsNDEpJywgYm9yZGVyUmFkaXVzOiA5LCBhbGlnblNlbGY6ICdjZW50ZXInLCB3aWR0aDogNDAwLCBtYXJnaW46ICczNXB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogMjAsIG1hcmdpblJpZ2h0OiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwLCBjb2xvcjogJ2dyZXknIH19PntpdGVtLk9yZ2FuaXphdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5SaWdodDogJ2F1dG8nLCBtYXJnaW46IDAsIGZvbnRTaXplOiAnMTAwJScgfX0+e2l0ZW1bXCJDb3Vyc2UgTmFtZVwiXX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bXCJPcmdhbml6YXRpb24taW1hZ2VcIl0gJiYgPGltZyBzcmM9e2l0ZW1bXCJPcmdhbml6YXRpb24taW1hZ2VcIl19IHN0eWxlPXt7IGJvcmRlclJhZGl1czogOCwgd2lkdGg6ICczMCUnLCBvYmplY3RGaXQ6ICdjb250YWluJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+RHVyYXRpb246IDxsYWJlbD57aXRlbVtcIkNvdXJzZSBMZW5ndGhcIl19PC9sYWJlbD48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+RHVyYXRpb246IDxsYWJlbD57aXRlbVtcIkNvdXJzZSBUb3BpYyBBcmVhXCJdfTwvbGFiZWw+PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkR1cmF0aW9uOiA8bGFiZWw+e2l0ZW1bXCJDb3Vyc2UgTGVuZ3RoXCJdfTwvbGFiZWw+IDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczcmVtJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVsnRnJlZT8nXSA9PT0gXCJZRVNcIiAmJiA8aDQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+RnJlZTwvaDQ+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScsIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZScsIGJvcmRlclJhZGl1czogJzdweCAwIDdweCAwJywgYmFja2dyb3VuZDogJ3doaXRlJywgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oaXRlbVtcIkNvdXJzZSBMaW5rXCJdLCAnX2JsYW5rJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlZpc2l0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScsIGhlaWdodDogJzgwMHB4Jywgb3ZlcmZsb3c6ICdzY3JvbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vV0hPP3JlZl9zcmM9dHdzcmMlNUV0ZndcIj5Ud2VldHMgYnkgV0hPPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5uZXdzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMTRweCkge1xuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODc2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlc1BhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/courses.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (CoursesPage);

/***/ })

})
//# sourceMappingURL=courses.js.b4b2b3ab6355e0baaf6b.hot-update.js.map