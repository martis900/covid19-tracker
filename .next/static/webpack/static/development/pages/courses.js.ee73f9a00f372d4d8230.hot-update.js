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
    className: "jsx-4061155460",
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
    className: "jsx-4061155460",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
    className: "jsx-4061155460",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      flexDirection: 'column',
      width: '50%',
      margin: 'auto'
    },
    className: "jsx-4061155460",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
    className: "jsx-4061155460",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("h3", {
    style: {
      color: 'white',
      fontFamily: 'Poppins',
      margin: 0
    },
    className: "jsx-4061155460",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "Online Courses ", selected)), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 35
    },
    className: "jsx-4061155460",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
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
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 40
      }
    }, item);
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    },
    className: "jsx-4061155460",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, !!data && data.filter(function (item) {
    return selected === 'All' ? item : item["Course Topic Area"] === selected;
  }).map(function (item) {
    return __jsx("a", {
      target: "blank",
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
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
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 41
      }
    }, __jsx("div", {
      style: {
        flexDirection: 'row',
        display: 'flex'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 45
      }
    }, __jsx("div", {
      style: {
        alignItems: 'center',
        padding: 20,
        marginRight: 'auto'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 49
      }
    }, __jsx("h3", {
      style: {
        margin: 0,
        color: 'grey'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 53
      }
    }, item.Organization), __jsx("h4", {
      style: {
        color: 'white',
        marginRight: 'auto',
        margin: 0,
        fontSize: '100%'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
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
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 80
      }
    })), __jsx("hr", {
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 45
      }
    }), __jsx("div", {
      style: {
        padding: 20
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }, __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 49
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 90
      }
    }, item["Course Length"])), __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 49
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 90
      }
    }, item["Course Topic Area"])), __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 49
      }
    }, "Duration: ", __jsx("label", {
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 90
      }
    }, item["Course Length"]), " ")), __jsx("div", {
      style: {
        height: '3rem',
        display: 'flex',
        flexDirection: 'row'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 45
      }
    }, __jsx("div", {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 49
      }
    }, item['Free?'] === "YES" && __jsx("h4", {
      style: {
        color: 'white'
      },
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
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
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 49
      }
    }, __jsx("h4", {
      className: "jsx-4061155460",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 53
      }
    }, "Visit")))));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4061155460",
    __self: this
  }, ".news.jsx-4061155460{width:400px;min-height:200px;border-radius:8px;margin:0 auto 0 0;}@media only screen and (max-width:796px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R3dCLEFBR2dDLFlBQ00saUJBQ0Msa0JBQ0Esa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJy4vYXBpL3Bvc3RzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHBvc3RzPzogYW55XG59XG5cbmludGVyZmFjZSBJVHdlZXRzIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaW1nOiBzdHJpbmcsXG4gICAgZGF0ZTogc3RyaW5nLFxuICAgIHR3ZWV0OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElOZXdzIHtcbiAgICBsaW5rOiBzdHJpbmc7XG4gICAgbWVkaWE6IHN0cmluZztcbiAgICBoZWFkbGluZTogc3RyaW5nO1xuICAgIHRpbWU6IHN0cmluZztcbiAgICBwdWJsaWNhdGlvbjogc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIENvdXJzZXNQYWdlKCkge1xuXG4gICAgY29uc3QgZmV0Y2hlciA9IGFzeW5jIHVybCA9PiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvY291cnNlcycsIGZldGNoZXIpXG5cbiAgICBsZXQgYSA9IHtcbiAgICAgICAgXCJGcmVlP1wiOiBcIllFU1wiLFxuICAgICAgICBcIkNvdXJzZSBOYW1lXCI6IFwiU3VjY2Vzc2Z1bCBOZWdvdGlhdGlvblwiLFxuICAgICAgICBcIkNvdXJzZSBMaW5rXCI6IFwiaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2xlYXJuL25lZ290aWF0aW9uLXNraWxsc1wiLFxuICAgICAgICBcIkNvdXJzZSBUb3BpYyBBcmVhXCI6IFwiQ29tbXVuaWNhdGlvbiBTa2lsbHNcIixcbiAgICAgICAgXCJDb3Vyc2UgTGVuZ3RoXCI6IFwiMTcgSG91cnNcIixcbiAgICAgICAgXCJPcmdhbml6YXRpb25cIjogXCJDb3Vyc2VyYVwiLFxuICAgICAgICBcIk9yZ2FuaXphdGlvbi1pbWFnZVwiOiBcImh0dHBzOi8vYWRkaXRpb25hbGtub3dsZWRnZS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTkvMDUvYWktaXMtdGhlLW5ldy1lbGVjdHJpY2l0eS1mb3ItYnVzaW5lc3Mtc29jaWV0eS5wbmdcIlxuICAgIH1cblxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoJ0FsbCcpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIiBjaGFyU2V0PVwidXRmLThcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnMTAwJScsIG1hcmdpbjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCB3aWR0aDogJzUwJScsIG1hcmdpbjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogJ2F1dG8nLCBiYWNrZ3JvdW5kOiAncmdiKDM0LDM3LDQxKScsIGJvcmRlclJhZGl1czogOSwgcGFkZGluZzogMjAsIGFsaWduU2VsZjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpbjogMCB9fT5PbmxpbmUgQ291cnNlcyB7c2VsZWN0ZWR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBmbGV4V3JhcDogJ3dyYXAnLCBtYXJnaW5Ub3A6IDM1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIWRhdGEgJiYgWy4uLm5ldyBTZXQoWydBbGwnLCAuLi5kYXRhLm1hcChpdGVtID0+IGl0ZW1bXCJDb3Vyc2UgVG9waWMgQXJlYVwiXSldKV0ubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxhYmVsIHN0eWxlPXt7IG1hcmdpbjogJzVweCAyMHB4JywgcGFkZGluZzogMTAsIGJhY2tncm91bmQ6ICd3aGl0ZScsIGNvbG9yOiAnYmxhY2snLCBib3JkZXJSYWRpdXM6IDIwLCBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChpdGVtKX0+e2l0ZW19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBmbGV4V3JhcDogJ3dyYXAnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhZGF0YSAmJiBkYXRhLmZpbHRlcihpdGVtID0+IHNlbGVjdGVkID09PSAnQWxsJyA/IGl0ZW0gOiAoaXRlbVtcIkNvdXJzZSBUb3BpYyBBcmVhXCJdID09PSBzZWxlY3RlZCkpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDM0LDM3LDQxKScsIGJvcmRlclJhZGl1czogOSwgYWxpZ25TZWxmOiAnY2VudGVyJywgd2lkdGg6IDQwMCwgbWFyZ2luOiAnMzVweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAncm93JywgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogMjAsIG1hcmdpblJpZ2h0OiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbjogMCwgY29sb3I6ICdncmV5JyB9fT57aXRlbS5Pcmdhbml6YXRpb259PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG1hcmdpblJpZ2h0OiAnYXV0bycsIG1hcmdpbjogMCwgZm9udFNpemU6ICcxMDAlJyB9fT57aXRlbVtcIkNvdXJzZSBOYW1lXCJdfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtW1wiT3JnYW5pemF0aW9uLWltYWdlXCJdICYmIDxpbWcgc3JjPXtpdGVtW1wiT3JnYW5pemF0aW9uLWltYWdlXCJdfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDgsIHdpZHRoOiAnMzAlJywgb2JqZWN0Rml0OiAnY29udGFpbicsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5EdXJhdGlvbjogPGxhYmVsPntpdGVtW1wiQ291cnNlIExlbmd0aFwiXX08L2xhYmVsPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+RHVyYXRpb246IDxsYWJlbD57aXRlbVtcIkNvdXJzZSBUb3BpYyBBcmVhXCJdfTwvbGFiZWw+PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5EdXJhdGlvbjogPGxhYmVsPntpdGVtW1wiQ291cnNlIExlbmd0aFwiXX08L2xhYmVsPiA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczcmVtJywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtWydGcmVlPyddID09PSBcIllFU1wiICYmIDxoNCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5GcmVlPC9oND59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnLCBib3JkZXI6ICcycHggc29saWQgd2hpdGUnLCBib3JkZXJSYWRpdXM6ICc3cHggMCA3cHggMCcsIGJhY2tncm91bmQ6ICd3aGl0ZScsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGl0ZW1bXCJDb3Vyc2UgTGlua1wiXSwgJ19ibGFuaycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VmlzaXQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScsIGhlaWdodDogJzgwMHB4Jywgb3ZlcmZsb3c6ICdzY3JvbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vV0hPP3JlZl9zcmM9dHdzcmMlNUV0ZndcIj5Ud2VldHMgYnkgV0hPPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5uZXdzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTZweCkge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzUGFnZVxuIl19 */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/courses.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (CoursesPage);

/***/ })

})
//# sourceMappingURL=courses.js.ee73f9a00f372d4d8230.hot-update.js.map