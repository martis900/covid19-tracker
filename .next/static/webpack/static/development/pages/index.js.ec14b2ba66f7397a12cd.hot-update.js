webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: INITIAL_VIEW_STATE, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_VIEW_STATE", function() { return INITIAL_VIEW_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! deck.gl */ "./node_modules/deck.gl/dist/esm/index.js");






var _jsxFileName = "/Users/DEV/Desktop/covidweb/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var INITIAL_VIEW_STATE = {
  latitude: 47.65,
  longitude: 7,
  zoom: 4.5,
  maxZoom: 20,
  bearing: 0
}; // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers

var tileServer = 'https://c.tile.openstreetmap.org/';
var App = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _PureComponent);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = _super.call(this, props);
    _this.state = {};
    _this._onHover = _this._onHover.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this._renderTooltip = _this._renderTooltip.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "_onHover",
    value: function _onHover(_ref) {
      var x = _ref.x,
          y = _ref.y,
          sourceLayer = _ref.sourceLayer,
          tile = _ref.tile;
      this.setState({
        x: x,
        y: y,
        hoveredObject: {
          sourceLayer: sourceLayer,
          tile: tile
        }
      });
    }
  }, {
    key: "_renderTooltip",
    value: function _renderTooltip() {
      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y,
          hoveredObject = _this$state.hoveredObject;

      var _ref2 = hoveredObject || {},
          sourceLayer = _ref2.sourceLayer,
          tile = _ref2.tile;

      return sourceLayer && tile && __jsx("div", {
        className: "tooltip",
        style: {
          left: x,
          top: y
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }, "tile: x: ", tile.x, ", y: ", tile.y, ", z: ", tile.z);
    }
  }, {
    key: "_renderLayers",
    value: function _renderLayers() {
      var _this$props = this.props,
          _this$props$autoHighl = _this$props.autoHighlight,
          autoHighlight = _this$props$autoHighl === void 0 ? true : _this$props$autoHighl,
          _this$props$highlight = _this$props.highlightColor,
          highlightColor = _this$props$highlight === void 0 ? [60, 60, 60, 40] : _this$props$highlight;
      return [new deck_gl__WEBPACK_IMPORTED_MODULE_7__["TileLayer"]({
        pickable: true,
        onHover: this._onHover,
        autoHighlight: autoHighlight,
        highlightColor: highlightColor,
        opacity: 1,
        // https://wiki.openstreetmap.org/wiki/Zoom_levels
        minZoom: 0,
        maxZoom: 19,
        renderSubLayers: function renderSubLayers(props) {
          var _props$tile = props.tile,
              x = _props$tile.x,
              y = _props$tile.y,
              z = _props$tile.z,
              bbox = _props$tile.bbox;
          var west = bbox.west,
              south = bbox.south,
              east = bbox.east,
              north = bbox.north;
          return new deck_gl__WEBPACK_IMPORTED_MODULE_7__["BitmapLayer"](props, {
            image: "".concat(tileServer, "/").concat(z, "/").concat(x, "/").concat(y, ".png"),
            bounds: [west, south, east, north]
          });
        }
      })];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          viewState = _this$props2.viewState,
          _this$props2$controll = _this$props2.controller,
          controller = _this$props2$controll === void 0 ? true : _this$props2$controll;
      return __jsx(deck_gl__WEBPACK_IMPORTED_MODULE_7__["default"], {
        layers: this._renderLayers(),
        initialViewState: INITIAL_VIEW_STATE,
        viewState: viewState,
        controller: controller,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, this._renderTooltip);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/***/ })

})
//# sourceMappingURL=index.js.ec14b2ba66f7397a12cd.hot-update.js.map