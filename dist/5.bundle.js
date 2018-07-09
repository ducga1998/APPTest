(window["webpackJsonpWebBuilder"] = window["webpackJsonpWebBuilder"] || []).push([[5],{

/***/ "./src/elements/Heading.tsx":
/*!**********************************!*\
  !*** ./src/elements/Heading.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/element */ "./src/lib/element.tsx");
/* harmony import */ var _ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/control/UIInput */ "./src/ui/control/UIInput.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const DIV = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div``;
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_element__WEBPACK_IMPORTED_MODULE_1__["CreateElement"])({
  initialState: {}
})((_temp = _class = class Heading extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "element", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "handClick", e => {
      this.props.Event.onmousedown();
      this.container.setStateSync({
        text: this.ElementSpan.innerText
      });
    });

    _defineProperty(this, "HandChange", () => {
      this.container.setStateSync({
        data: {
          text: this.ElementSpan.innerText + ""
        }
      }); // this.data.filter(item => item.id == this.props.id)[0].text = this.ElementSpan.innerText
    });
  }

  get container() {
    return this.props.container;
  }

  get data() {
    return this.props.data;
  }

  get ElementSpan() {
    return this.element.current;
  }

  componentDidMount() {
    this.ElementSpan.innerHTML = this.container.state.data.text;
  }

  componentDidUpdate(nextProps) {
    this.ElementSpan.innerHTML = this.container.state.data.text;
  }

  render() {
    console.log(" data props to Element", this.props.data);
    const {
      text,
      container,
      data,
      id,
      type
    } = this.props;
    console.log("props to elmement", this.props);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DIV, _extends({}, this.props.Event, {
      className: "h1",
      id: id
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "  ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      ref: this.element,
      onInput: this.HandChange.bind(this),
      onBlur: this.HandChange.bind(this),
      contentEditable: true
    })));
  }

}, _defineProperty(_class, "defaultProps", {
  text: 'HEADING 1'
}), _defineProperty(_class, "inspector", () => {
  return {
    listComponent: [_ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__["default"]]
  };
}), _temp)));

/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map