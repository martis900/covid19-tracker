webpackHotUpdate("static/development/pages/courses.js",{

/***/ "./pages/courses.tsx":
/*!***************************!*\
  !*** ./pages/courses.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/courses.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function CoursesPage() {
  var _this = this;

  var fetcher = function fetcher(url) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetcher$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url).then(function (r) {
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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])('/api/courses', fetcher),
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
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("script", {
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8",
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 49,
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
      lineNumber: 50,
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
      lineNumber: 52,
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
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Online Courses")), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, !!data && data.map(function (item) {
    return __jsx("a", {
      target: "blank",
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    }, __jsx("div", {
      style: {
        background: 'rgb(34,37,41)',
        borderRadius: 9,
        alignSelf: 'center',
        width: 400,
        margin: '35px 20px'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
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
        lineNumber: 61,
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
        lineNumber: 62,
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
        lineNumber: 63,
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
        lineNumber: 64,
        columnNumber: 53
      }
    }, item["Course Name"])), __jsx("img", {
      src: item["Organization-image"],
      style: {
        borderRadius: 8,
        width: 100,
        objectFit: 'contain'
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 49
      }
    })), __jsx("div", {
      style: {
        padding: 20
      },
      className: "jsx-686428231",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 45
      }
    })));
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "686428231",
    __self: this
  }, ".news.jsx-686428231{width:400px;min-height:200px;border-radius:8px;margin:0 auto 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRndCLEFBR2dDLFlBQ00saUJBQ0Msa0JBQ0Esa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9jb3Vyc2VzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJy4vYXBpL3Bvc3RzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHBvc3RzPzogYW55XG59XG5cbmludGVyZmFjZSBJVHdlZXRzIHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaW1nOiBzdHJpbmcsXG4gICAgZGF0ZTogc3RyaW5nLFxuICAgIHR3ZWV0OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElOZXdzIHtcbiAgICBsaW5rOiBzdHJpbmc7XG4gICAgbWVkaWE6IHN0cmluZztcbiAgICBoZWFkbGluZTogc3RyaW5nO1xuICAgIHRpbWU6IHN0cmluZztcbiAgICBwdWJsaWNhdGlvbjogc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIENvdXJzZXNQYWdlKCkge1xuXG4gICAgY29uc3QgZmV0Y2hlciA9IGFzeW5jIHVybCA9PiBhd2FpdCBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvY291cnNlcycsIGZldGNoZXIpXG5cbiAgICBsZXQgYSA9IHtcbiAgICAgICAgXCJGcmVlP1wiOiBcIllFU1wiLFxuICAgICAgICBcIkNvdXJzZSBOYW1lXCI6IFwiU3VjY2Vzc2Z1bCBOZWdvdGlhdGlvblwiLFxuICAgICAgICBcIkNvdXJzZSBMaW5rXCI6IFwiaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2xlYXJuL25lZ290aWF0aW9uLXNraWxsc1wiLFxuICAgICAgICBcIkNvdXJzZSBUb3BpYyBBcmVhXCI6IFwiQ29tbXVuaWNhdGlvbiBTa2lsbHNcIixcbiAgICAgICAgXCJDb3Vyc2UgTGVuZ3RoXCI6IFwiMTcgSG91cnNcIixcbiAgICAgICAgXCJPcmdhbml6YXRpb25cIjogXCJDb3Vyc2VyYVwiLFxuICAgICAgICBcIk9yZ2FuaXphdGlvbi1pbWFnZVwiOiBcImh0dHBzOi8vYWRkaXRpb25hbGtub3dsZWRnZS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTkvMDUvYWktaXMtdGhlLW5ldy1lbGVjdHJpY2l0eS1mb3ItYnVzaW5lc3Mtc29jaWV0eS5wbmdcIlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIiBjaGFyU2V0PVwidXRmLThcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnMTAwJScsIG1hcmdpbjogJ2F1dG8nIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOiAnNTAlJywgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnYXV0bycsIGJhY2tncm91bmQ6ICdyZ2IoMzQsMzcsNDEpJywgYm9yZGVyUmFkaXVzOiA5LCBwYWRkaW5nOiAyMCwgYWxpZ25TZWxmOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRGYW1pbHk6ICdQb3BwaW5zJywgbWFyZ2luOiAwIH19Pk9ubGluZSBDb3Vyc2VzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIWRhdGEgJiYgZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigzNCwzNyw0MSknLCBib3JkZXJSYWRpdXM6IDksIGFsaWduU2VsZjogJ2NlbnRlcicsIHdpZHRoOiA0MDAsIG1hcmdpbjogJzM1cHggMjBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6IDIwLCBtYXJnaW5SaWdodDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46IDAsIGNvbG9yOiAnZ3JleScgfX0+e2l0ZW0uT3JnYW5pemF0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5SaWdodDogJ2F1dG8nLCBtYXJnaW46IDAsIGZvbnRTaXplOiAnMTAwJScgfX0+e2l0ZW1bXCJDb3Vyc2UgTmFtZVwiXX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbVtcIk9yZ2FuaXphdGlvbi1pbWFnZVwiXX0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA4LCB3aWR0aDogMTAwLCBvYmplY3RGaXQ6ICdjb250YWluJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScsIGhlaWdodDogJzgwMHB4Jywgb3ZlcmZsb3c6ICdzY3JvbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vV0hPP3JlZl9zcmM9dHdzcmMlNUV0ZndcIj5Ud2VldHMgYnkgV0hPPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5uZXdzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICAgICAgICAgICAgICB9YH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlc1BhZ2VcbiJdfQ== */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/courses.tsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (CoursesPage);

/***/ })

})
//# sourceMappingURL=courses.js.60ef88b978e76b2b8bfc.hot-update.js.map