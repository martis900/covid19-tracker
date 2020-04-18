webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news.tsx":
/*!************************!*\
  !*** ./pages/news.tsx ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/news.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function HomePage(_ref) {
  var _this = this;

  var data = _ref.data;
  // const fetcher = async url => await fetch(url).then(r => r.json())
  // const { data, error } = useSWR('/api/news', fetcher)
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("script", {
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8",
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("title", {
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Latest News")), __jsx("div", {
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
      lineNumber: 41,
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
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      flexDirection: 'column',
      width: '50%',
      margin: 'auto'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 29
    }
  }, "Lastest News"), __jsx("h5", {
    style: {
      color: 'grey',
      fontFamily: 'Poppins',
      margin: 0,
      padding: 0
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Global")), !!data ? data.map(function (item) {
    return __jsx("a", {
      target: "blank",
      href: item.link,
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: {
        marginRight: 'auto',
        background: 'rgb(34,37,41)',
        borderRadius: 9,
        padding: 20,
        alignSelf: 'center',
        marginTop: 35
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
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
        lineNumber: 53,
        columnNumber: 41
      }
    }, __jsx("h4", {
      style: {
        color: 'white',
        marginRight: 'auto'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 45
      }
    }, item.headline), !!item.media && __jsx("img", {
      src: item.media,
      style: {
        borderRadius: 8,
        width: 100,
        objectFit: 'fill'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 62
      }
    })), __jsx("h5", {
      style: {
        color: 'white'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 41
      }
    }, item.publication, " ", __jsx("span", {
      style: {
        paddingLeft: 20
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 91
      }
    }), " ", item.time)));
  }) : __jsx("h3", {
    style: {
      color: 'white',
      textAlign: 'center'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 30
    }
  }, "loading...")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "686428231",
    __self: this
  }, ".news.jsx-686428231{width:400px;min-height:200px;border-radius:8px;margin:0 auto 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9uZXdzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXdCLEFBR2dDLFlBQ00saUJBQ0Msa0JBQ0Esa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9uZXdzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJy4vYXBpL3Bvc3RzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHBvc3RzPzogYW55XG59XG5cbmludGVyZmFjZSBJVHdlZXRzIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaW1nOiBzdHJpbmcsXG4gICAgZGF0ZTogc3RyaW5nLFxuICAgIHR3ZWV0OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElOZXdzIHtcbiAgICBsaW5rOiBzdHJpbmc7XG4gICAgbWVkaWE6IHN0cmluZztcbiAgICBoZWFkbGluZTogc3RyaW5nO1xuICAgIHRpbWU6IHN0cmluZztcbiAgICBwdWJsaWNhdGlvbjogc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHsgZGF0YSB9OiBhbnkpIHtcblxuICAgIC8vIGNvbnN0IGZldGNoZXIgPSBhc3luYyB1cmwgPT4gYXdhaXQgZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL25ld3MnLCBmZXRjaGVyKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCIgY2hhclNldD1cInV0Zi04XCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxhdGVzdCBOZXdzPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnMTAwJScsIG1hcmdpbjogJ2F1dG8nIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnNTAlJywgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnYXV0bycsIGJhY2tncm91bmQ6ICdyZ2IoMzQsMzcsNDEpJywgYm9yZGVyUmFkaXVzOiA5LCBwYWRkaW5nOiAyMCwgYWxpZ25TZWxmOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgbWFyZ2luOiAwIH19Pkxhc3Rlc3QgTmV3czwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgbWFyZ2luOiAwLCBwYWRkaW5nOiAwIH19Pkdsb2JhbDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshIWRhdGEgPyBkYXRhLm1hcCgoaXRlbTogSU5ld3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e2l0ZW0ubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnYXV0bycsIGJhY2tncm91bmQ6ICdyZ2IoMzQsMzcsNDEpJywgYm9yZGVyUmFkaXVzOiA5LCBwYWRkaW5nOiAyMCwgYWxpZ25TZWxmOiAnY2VudGVyJywgbWFyZ2luVG9wOiAzNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdyb3cnLCBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luUmlnaHQ6ICdhdXRvJyB9fT57aXRlbS5oZWFkbGluZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFpdGVtLm1lZGlhICYmIDxpbWcgc3JjPXtpdGVtLm1lZGlhfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6IDgsIHdpZHRoOiAxMDAsIG9iamVjdEZpdDogJ2ZpbGwnIH19IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT57aXRlbS5wdWJsaWNhdGlvbn0gPHNwYW4gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDIwIH19IC8+IHtpdGVtLnRpbWV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiA8aDMgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+bG9hZGluZy4uLjwvaDM+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzAlJywgaGVpZ2h0OiAnODAwcHgnLCBvdmVyZmxvdzogJ3Njcm9sbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR3aXR0ZXItdGltZWxpbmVcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9XSE8/cmVmX3NyYz10d3NyYyU1RXRmd1wiPlR3ZWV0cyBieSBXSE88L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm5ld3Mge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xuICAgICAgICAgICAgICAgIH1gfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jb3JvbmExOS5ub3cuc2gvYXBpL25ld3MnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl19 */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/news.tsx */"));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=news.js.2548e7bb496ca820855d.hot-update.js.map