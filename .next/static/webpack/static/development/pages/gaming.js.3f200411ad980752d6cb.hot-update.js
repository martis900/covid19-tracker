webpackHotUpdate("static/development/pages/gaming.js",{

/***/ "./pages/gaming.tsx":
/*!**************************!*\
  !*** ./pages/gaming.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/gaming.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function StocksPage(_ref) {
  var _this = this;

  var data = _ref.data;
  // const fetcher = async url => await fetch(url).then(r => r.json())
  // const { data, error } = useSWR('/api/news?type=gaming', fetcher)
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
  }, __jsx("title", {
    className: "jsx-686428231",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Gaming News")), __jsx("div", {
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
      lineNumber: 40,
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
      lineNumber: 41,
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
      lineNumber: 43,
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
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 29
    }
  }, "Gaming News"), __jsx("h5", {
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
      lineNumber: 46,
      columnNumber: 29
    }
  }, "Global")), !!data ? data.map(function (item) {
    return __jsx("a", {
      target: "blank",
      href: item.link,
      style: {
        padding: 0
      },
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
        marginTop: 35,
        width: '100%'
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
      columnNumber: 29
    }
  }, error)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "686428231",
    __self: this
  }, ".news.jsx-686428231{width:400px;min-height:200px;border-radius:8px;margin:0 auto 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ERVYvRGVza3RvcC9jb3ZpZHdlYi9wYWdlcy9nYW1pbmcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFd0IsQUFHZ0MsWUFDTSxpQkFDQyxrQkFDQSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL0RFVi9EZXNrdG9wL2Nvdmlkd2ViL3BhZ2VzL2dhbWluZy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICcuL2FwaS9wb3N0cyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBwb3N0cz86IGFueVxufVxuXG5pbnRlcmZhY2UgSVR3ZWV0cyB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGltZzogc3RyaW5nLFxuICAgIGRhdGU6IHN0cmluZyxcbiAgICB0d2VldDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJTmV3cyB7XG4gICAgbGluazogc3RyaW5nO1xuICAgIG1lZGlhOiBzdHJpbmc7XG4gICAgaGVhZGxpbmU6IHN0cmluZztcbiAgICB0aW1lOiBzdHJpbmc7XG4gICAgcHVibGljYXRpb246IHN0cmluZztcbn1cblxuXG5mdW5jdGlvbiBTdG9ja3NQYWdlKHsgZGF0YSB9KSB7XG5cbiAgICAvLyBjb25zdCBmZXRjaGVyID0gYXN5bmMgdXJsID0+IGF3YWl0IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxuICAgIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9uZXdzP3R5cGU9Z2FtaW5nJywgZmV0Y2hlcilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+R2FtaW5nIE5ld3M8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6ICcxMDAlJywgbWFyZ2luOiAnYXV0bycgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6ICc1MCUnLCBtYXJnaW46ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICdhdXRvJywgYmFja2dyb3VuZDogJ3JnYigzNCwzNyw0MSknLCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IDIwLCBhbGlnblNlbGY6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udEZhbWlseTogJ1BvcHBpbnMnLCBtYXJnaW46IDAgfX0+R2FtaW5nIE5ld3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCBmb250RmFtaWx5OiAnUG9wcGlucycsIG1hcmdpbjogMCwgcGFkZGluZzogMCB9fT5HbG9iYWw8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHshIWRhdGEgPyBkYXRhLm1hcCgoaXRlbTogSU5ld3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e2l0ZW0ubGlua30gc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICdhdXRvJywgYmFja2dyb3VuZDogJ3JnYigzNCwzNyw0MSknLCBib3JkZXJSYWRpdXM6IDksIHBhZGRpbmc6IDIwLCBhbGlnblNlbGY6ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDM1LCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleERpcmVjdGlvbjogJ3JvdycsIGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBtYXJnaW5SaWdodDogJ2F1dG8nIH19PntpdGVtLmhlYWRsaW5lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIWl0ZW0ubWVkaWEgJiYgPGltZyBzcmM9e2l0ZW0ubWVkaWF9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogOCwgd2lkdGg6IDEwMCwgb2JqZWN0Rml0OiAnZmlsbCcgfX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PntpdGVtLnB1YmxpY2F0aW9ufSA8c3BhbiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMjAgfX0gLz4ge2l0ZW0udGltZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA6PGgzIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PntlcnJvcn08L2gzPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17eyB3aWR0aDogJzMwJScsIGhlaWdodDogJzgwMHB4Jywgb3ZlcmZsb3c6ICdzY3JvbGwnIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vV0hPP3JlZl9zcmM9dHdzcmMlNUV0ZndcIj5Ud2VldHMgYnkgV0hPPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5uZXdzIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMDtcbiAgICAgICAgICAgICAgICB9YH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jb3JvbmExOS5ub3cuc2gvYXBpL25ld3MnKVxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgICAgICBkYXRhXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBTdG9ja3NQYWdlXG4iXX0= */\n/*@ sourceURL=/Users/DEV/Desktop/covidweb/pages/gaming.tsx */"));
} // export async function getServerSideProps(context) {
//     const res = await fetch('https://corona19.now.sh/api/news')
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (StocksPage);

/***/ })

})
//# sourceMappingURL=gaming.js.3f200411ad980752d6cb.hot-update.js.map