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
    className: "jsx-1998574029",
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
    className: "jsx-1998574029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1998574029" + " " + "container",
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
    className: "jsx-1998574029",
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
      margin: 0
    },
    className: "jsx-1998574029",
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
    className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
    className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 76
      }
    })), __jsx("hr", {
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 45
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 45
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
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
      className: "jsx-1998574029",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }, __jsx("h4", {
      className: "jsx-1998574029",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 49
      }
    }, "Visit")))));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1998574029",
    __self: this
  }, ".news.jsx-1998574029{width:400px;min-height:200px;border-radius:8px;margin:0 auto 0 0;}.container.jsx-1998574029{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:80%;margin:auto;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:auto;}@media only screen and (max-width:1214px){.container.jsx-1998574029{width:90%;}}@media only screen and (max-width:876px){.container.jsx-1998574029{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR3dCLEFBR2dDLEFBTVcsQUFVUixBQUtDLFVBSmYsQ0FLQSxDQXJCaUIsaUJBQ0Msa0JBQ0Esa0JBQ3RCLGFBR2MsVUFDRSxZQUNDLGFBQ0EsMEVBQ1MsOEVBQ1QsWUFDakIiLCJmaWxlIjoiL1VzZXJzL0RFVi9EZXNrdG9wL2Nvdmlkd2ViL3BhZ2VzL2NvdXJzZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLy9AdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi9hcGkvcG9zdHMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcG9zdHM/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElUd2VldHMge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpbWc6IHN0cmluZyxcbiAgICBkYXRlOiBzdHJpbmcsXG4gICAgdHdlZXQ6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSU5ld3Mge1xuICAgIGxpbms6IHN0cmluZztcbiAgICBtZWRpYTogc3RyaW5nO1xuICAgIGhlYWRsaW5lOiBzdHJpbmc7XG4gICAgdGltZTogc3RyaW5nO1xuICAgIHB1YmxpY2F0aW9uOiBzdHJpbmc7XG59XG5cblxuZnVuY3Rpb24gQ291cnNlc1BhZ2UoKSB7XG5cbiAgICBjb25zdCBmZXRjaGVyID0gYXN5bmMgdXJsID0+IGF3YWl0IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9jb3Vyc2VzJywgZmV0Y2hlcilcblxuICAgIGxldCBhID0ge1xuICAgICAgICBcIkZyZWU/XCI6IFwiWUVTXCIsXG4gICAgICAgIFwiQ291cnNlIE5hbWVcIjogXCJTdWNjZXNzZnVsIE5lZ290aWF0aW9uXCIsXG4gICAgICAgIFwiQ291cnNlIExpbmtcIjogXCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvbGVhcm4vbmVnb3RpYXRpb24tc2tpbGxzXCIsXG4gICAgICAgIFwiQ291cnNlIFRvcGljIEFyZWFcIjogXCJDb21tdW5pY2F0aW9uIFNraWxsc1wiLFxuICAgICAgICBcIkNvdXJzZSBMZW5ndGhcIjogXCIxNyBIb3Vyc1wiLFxuICAgICAgICBcIk9yZ2FuaXphdGlvblwiOiBcIkNvdXJzZXJhXCIsXG4gICAgICAgIFwiT3JnYW5pemF0aW9uLWltYWdlXCI6IFwiaHR0cHM6Ly9hZGRpdGlvbmFsa25vd2xlZGdlLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxOS8wNS9haS1pcy10aGUtbmV3LWVsZWN0cmljaXR5LWZvci1idXNpbmVzcy1zb2NpZXR5LnBuZ1wiXG4gICAgfVxuXG4gICAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnQWxsJylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiIGNoYXJTZXQ9XCJ1dGYtOFwiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICdhdXRvJywgYmFja2dyb3VuZDogJ3JnYigzNCwzNyw0MSknLCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IDIwLCBhbGlnblNlbGY6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpbjogMCB9fT5PbmxpbmUgQ291cnNlcyB7c2VsZWN0ZWR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgZmxleFdyYXA6ICd3cmFwJywgbWFyZ2luVG9wOiAzNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshIWRhdGEgJiYgWy4uLm5ldyBTZXQoWydBbGwnLCAuLi5kYXRhLm1hcChpdGVtID0+IGl0ZW1bXCJDb3Vyc2UgVG9waWMgQXJlYVwiXSldKV0ubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGFiZWwgc3R5bGU9e3sgbWFyZ2luOiAnNXB4IDIwcHgnLCBwYWRkaW5nOiAxMCwgYmFja2dyb3VuZDogJ3doaXRlJywgY29sb3I6ICdibGFjaycsIGJvcmRlclJhZGl1czogMjAsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKGl0ZW0pfT57aXRlbX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGZsZXhXcmFwOiAnd3JhcCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshIWRhdGEgJiYgZGF0YS5maWx0ZXIoaXRlbSA9PiBzZWxlY3RlZCA9PT0gJ0FsbCcgPyBpdGVtIDogKGl0ZW1bXCJDb3Vyc2UgVG9waWMgQXJlYVwiXSA9PT0gc2VsZWN0ZWQpKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigzNCwzNyw0MSknLCBib3JkZXJSYWRpdXM6IDksIGFsaWduU2VsZjogJ2NlbnRlcicsIHdpZHRoOiA0MDAsIG1hcmdpbjogJzM1cHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAncm93JywgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAyMCwgbWFyZ2luUmlnaHQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46IDAsIGNvbG9yOiAnZ3JleScgfX0+e2l0ZW0uT3JnYW5pemF0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpblJpZ2h0OiAnYXV0bycsIG1hcmdpbjogMCwgZm9udFNpemU6ICcxMDAlJyB9fT57aXRlbVtcIkNvdXJzZSBOYW1lXCJdfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbVtcIk9yZ2FuaXphdGlvbi1pbWFnZVwiXSAmJiA8aW1nIHNyYz17aXRlbVtcIk9yZ2FuaXphdGlvbi1pbWFnZVwiXX0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA4LCB3aWR0aDogJzMwJScsIG9iamVjdEZpdDogJ2NvbnRhaW4nLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5EdXJhdGlvbjogPGxhYmVsPntpdGVtW1wiQ291cnNlIExlbmd0aFwiXX08L2xhYmVsPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5EdXJhdGlvbjogPGxhYmVsPntpdGVtW1wiQ291cnNlIFRvcGljIEFyZWFcIl19PC9sYWJlbD48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+RHVyYXRpb246IDxsYWJlbD57aXRlbVtcIkNvdXJzZSBMZW5ndGhcIl19PC9sYWJlbD4gPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzNyZW0nLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWydGcmVlPyddID09PSBcIllFU1wiICYmIDxoNCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5GcmVlPC9oND59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJywgYm9yZGVyOiAnMnB4IHNvbGlkIHdoaXRlJywgYm9yZGVyUmFkaXVzOiAnN3B4IDAgN3B4IDAnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihpdGVtW1wiQ291cnNlIExpbmtcIl0sICdfYmxhbmsnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VmlzaXQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzAlJywgaGVpZ2h0OiAnODAwcHgnLCBvdmVyZmxvdzogJ3Njcm9sbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR3aXR0ZXItdGltZWxpbmVcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9XSE8/cmVmX3NyYz10d3NyYyU1RXRmd1wiPlR3ZWV0cyBieSBXSE88L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm5ld3Mge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMTRweCkge1xuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODc2cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciAge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlc1BhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/courses.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (CoursesPage);

/***/ })

})
//# sourceMappingURL=courses.js.5357a3bdb5bb6696a762.hot-update.js.map