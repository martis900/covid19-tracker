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
//@






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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      types = _useState[0],
      setTypes = _useState[1];

  var ba = new Set([1, 2, 3, 4]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return setTypes(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(ba));
  }, [data]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("script", {
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8",
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: 'auto'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("label", {
    style: {
      color: 'white'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, " ", JSON.stringify(types)), __jsx("div", {
    style: {
      flexDirection: 'column',
      width: '50%',
      margin: 'auto'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      marginRight: 'auto',
      background: 'rgb(34,37,41)',
      borderRadius: 9,
      padding: 20,
      alignSelf: 'center'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx("h3", {
    style: {
      color: 'white',
      fontFamily: 'Poppins',
      margin: 0
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, "Online Courses")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, !!data && data.map(function (item) {
    return __jsx("a", {
      target: "blank",
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 37
      }
    }, __jsx("div", {
      style: {
        background: 'rgb(34,37,41)',
        borderRadius: 9,
        alignSelf: 'center',
        width: 400,
        margin: '35px 0'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 41
      }
    }, __jsx("div", {
      style: {
        flexDirection: 'row',
        display: 'flex'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 45
      }
    }, __jsx("div", {
      style: {
        alignItems: 'center',
        padding: 20,
        marginRight: 'auto'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 49
      }
    }, __jsx("h3", {
      style: {
        margin: 0,
        color: 'grey'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 53
      }
    }, item.Organization), __jsx("h4", {
      style: {
        color: 'white',
        marginRight: 'auto',
        margin: 0,
        fontSize: '100%'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 53
      }
    }, item["Course Name"])), item["Organization-image"] && __jsx("img", {
      src: item["Organization-image"],
      style: {
        borderRadius: 8,
        width: '30%',
        objectFit: 'contain',
        background: 'white'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 80
      }
    })), __jsx("hr", {
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 45
      }
    }), __jsx("div", {
      style: {
        padding: 20
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 45
      }
    }, __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 49
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 90
      }
    }, item["Course Length"])), __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 49
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 90
      }
    }, item["Course Topic Area"])), __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 49
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 90
      }
    }, item["Course Length"]), " ")), __jsx("div", {
      style: {
        height: '3rem',
        display: 'flex',
        flexDirection: 'row'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 45
      }
    }, __jsx("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 49
      }
    }, item['Free?'] === "YES" && __jsx("h4", {
      style: {
        color: 'white'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 81
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
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 49
      }
    }, __jsx("h4", {
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 53
      }
    }, "Visit")))));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "686428231",
    __self: this
  }, ".news.jsx-686428231{width:400px;min-height:200px;border-radius:8px;margin:0 auto 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR3dCLEFBR2dDLFlBQ00saUJBQ0Msa0JBQ0Esa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vQFxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi9hcGkvcG9zdHMnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcG9zdHM/OiBhbnlcbn1cblxuaW50ZXJmYWNlIElUd2VldHMge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpbWc6IHN0cmluZyxcbiAgICBkYXRlOiBzdHJpbmcsXG4gICAgdHdlZXQ6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSU5ld3Mge1xuICAgIGxpbms6IHN0cmluZztcbiAgICBtZWRpYTogc3RyaW5nO1xuICAgIGhlYWRsaW5lOiBzdHJpbmc7XG4gICAgdGltZTogc3RyaW5nO1xuICAgIHB1YmxpY2F0aW9uOiBzdHJpbmc7XG59XG5cblxuZnVuY3Rpb24gQ291cnNlc1BhZ2UoKSB7XG5cbiAgICBjb25zdCBmZXRjaGVyID0gYXN5bmMgdXJsID0+IGF3YWl0IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9jb3Vyc2VzJywgZmV0Y2hlcilcblxuICAgIGxldCBhID0ge1xuICAgICAgICBcIkZyZWU/XCI6IFwiWUVTXCIsXG4gICAgICAgIFwiQ291cnNlIE5hbWVcIjogXCJTdWNjZXNzZnVsIE5lZ290aWF0aW9uXCIsXG4gICAgICAgIFwiQ291cnNlIExpbmtcIjogXCJodHRwczovL3d3dy5jb3Vyc2VyYS5vcmcvbGVhcm4vbmVnb3RpYXRpb24tc2tpbGxzXCIsXG4gICAgICAgIFwiQ291cnNlIFRvcGljIEFyZWFcIjogXCJDb21tdW5pY2F0aW9uIFNraWxsc1wiLFxuICAgICAgICBcIkNvdXJzZSBMZW5ndGhcIjogXCIxNyBIb3Vyc1wiLFxuICAgICAgICBcIk9yZ2FuaXphdGlvblwiOiBcIkNvdXJzZXJhXCIsXG4gICAgICAgIFwiT3JnYW5pemF0aW9uLWltYWdlXCI6IFwiaHR0cHM6Ly9hZGRpdGlvbmFsa25vd2xlZGdlLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxOS8wNS9haS1pcy10aGUtbmV3LWVsZWN0cmljaXR5LWZvci1idXNpbmVzcy1zb2NpZXR5LnBuZ1wiXG4gICAgfVxuXG4gICAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSB1c2VTdGF0ZTxhbnk+KFtdKVxuICAgIGNvbnN0IGJhID0gbmV3IFNldChbMSwgMiwgMywgNF0pXG4gICAgdXNlTWVtbygoKSA9PiBzZXRUeXBlcyhbLi4uYmFdKSwgW2RhdGFdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiIGNoYXJTZXQ9XCJ1dGYtOFwiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6ICcxMDAlJywgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT4ge0pTT04uc3RyaW5naWZ5KHR5cGVzKX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCB3aWR0aDogJzUwJScsIG1hcmdpbjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogJ2F1dG8nLCBiYWNrZ3JvdW5kOiAncmdiKDM0LDM3LDQxKScsIGJvcmRlclJhZGl1czogOSwgcGFkZGluZzogMjAsIGFsaWduU2VsZjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpbjogMCB9fT5PbmxpbmUgQ291cnNlczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgZmxleFdyYXA6ICd3cmFwJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFkYXRhICYmIGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMzQsMzcsNDEpJywgYm9yZGVyUmFkaXVzOiA5LCBhbGlnblNlbGY6ICdjZW50ZXInLCB3aWR0aDogNDAwLCBtYXJnaW46ICczNXB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdyb3cnLCBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAyMCwgbWFyZ2luUmlnaHQ6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwLCBjb2xvcjogJ2dyZXknIH19PntpdGVtLk9yZ2FuaXphdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luUmlnaHQ6ICdhdXRvJywgbWFyZ2luOiAwLCBmb250U2l6ZTogJzEwMCUnIH19PntpdGVtW1wiQ291cnNlIE5hbWVcIl19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bXCJPcmdhbml6YXRpb24taW1hZ2VcIl0gJiYgPGltZyBzcmM9e2l0ZW1bXCJPcmdhbml6YXRpb24taW1hZ2VcIl19IHN0eWxlPXt7IGJvcmRlclJhZGl1czogOCwgd2lkdGg6ICczMCUnLCBvYmplY3RGaXQ6ICdjb250YWluJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkR1cmF0aW9uOiA8bGFiZWw+e2l0ZW1bXCJDb3Vyc2UgTGVuZ3RoXCJdfTwvbGFiZWw+PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5EdXJhdGlvbjogPGxhYmVsPntpdGVtW1wiQ291cnNlIFRvcGljIEFyZWFcIl19PC9sYWJlbD48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkR1cmF0aW9uOiA8bGFiZWw+e2l0ZW1bXCJDb3Vyc2UgTGVuZ3RoXCJdfTwvbGFiZWw+IDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzNyZW0nLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1bJ0ZyZWU/J10gPT09IFwiWUVTXCIgJiYgPGg0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PkZyZWU8L2g0Pn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScsIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZScsIGJvcmRlclJhZGl1czogJzdweCAwIDdweCAwJywgYmFja2dyb3VuZDogJ3doaXRlJywgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oaXRlbVtcIkNvdXJzZSBMaW5rXCJdLCAnX2JsYW5rJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5WaXNpdDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzAlJywgaGVpZ2h0OiAnODAwcHgnLCBvdmVyZmxvdzogJ3Njcm9sbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR3aXR0ZXItdGltZWxpbmVcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9XSE8/cmVmX3NyYz10d3NyYyU1RXRmd1wiPlR3ZWV0cyBieSBXSE88L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm5ld3Mge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICAgICAgICAgICAgICAgIH1gfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzUGFnZVxuIl19 */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/courses.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (CoursesPage);

/***/ })

})
//# sourceMappingURL=courses.js.bacb2cea9dfa59d0256c.hot-update.js.map