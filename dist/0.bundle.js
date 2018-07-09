(window["webpackJsonpWebBuilder"] = window["webpackJsonpWebBuilder"] || []).push([[0],{

/***/ "./src/elements/SpanElement.tsx":
/*!**************************************!*\
  !*** ./src/elements/SpanElement.tsx ***!
  \**************************************/
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





const DIV = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
`;
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_element__WEBPACK_IMPORTED_MODULE_1__["CreateElement"])({
  initialState: {}
})((_temp = _class = class SpanElement extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "element", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "handClick", e => {
      this.props.Event.onmousedown();
    });

    _defineProperty(this, "HandChange", () => {
      this.container.setStateSync({
        data: {
          text: this.ElementSpan.innerText
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
    const {
      text,
      container,
      data,
      id,
      type
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DIV, _extends({}, this.props.Event, {
      id: "cascas"
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      ref: this.element,
      onInput: this.HandChange.bind(this),
      onBlur: this.HandChange.bind(this),
      contentEditable: true
    }));
  }

}, _defineProperty(_class, "defaultProps", {
  text: 'span SCASC'
}), _defineProperty(_class, "inspector", () => {
  return {
    listComponent: [_ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__["default"], _ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__["default"], _ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__["default"], _ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__["default"], _ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__["default"], _ui_control_UIInput__WEBPACK_IMPORTED_MODULE_2__["default"]]
  };
}), _temp)));

/***/ }),

/***/ "./src/lib/element.tsx":
/*!*****************************!*\
  !*** ./src/lib/element.tsx ***!
  \*****************************/
/*! exports provided: getParent, removeElement, CreateElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateElement", function() { return CreateElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unstated-x */ "./node_modules/unstated-x/lib/unstated.es.js");
/* harmony import */ var _store_SelectedContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/SelectedContainer */ "./src/store/SelectedContainer.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





async function getParent() {
  // Do whatever shit to find its parent
  return null;
}
async function removeElement() {
  // Do whatever shit to remove element
  return true;
} // handle Element 

const CreateElement = ({
  initialState
}) => Elements => {
  return class WrapperElement extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
      super(props);

      _defineProperty(this, "DOMNodeRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

      _defineProperty(this, "elementRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

      _defineProperty(this, "styledRefs", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

      _defineProperty(this, "container", void 0);

      _defineProperty(this, "element", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

      _defineProperty(this, "HandMouseDown", () => {
        _store_SelectedContainer__WEBPACK_IMPORTED_MODULE_2__["SelectedContainer"].setState({
          selected: this,
          display: true
        });
      });

      let ArrayElement;
      this.state = _objectSpread({}, initialState);

      if (Elements.inspector) {
        ArrayElement = Elements.inspector();
      }

      const containerState = _objectSpread({}, this.state, ArrayElement);

      const A = this.props.containerElement;
      A.state = _objectSpread({}, A.state, containerState);
      this.container = A;
    }

    static get InspectorA() {
      return Elements.inspector();
    }

    componentDidMount() {
      // setState   in element  has been overide setStateSync in container 
      this.element.current.setState = this.container.setStateSync.bind(this.container); //   a bit later. inside Element, We call setState and this a here, it don't point this class a here
    }

    render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](unstated_x__WEBPACK_IMPORTED_MODULE_1__["Subscribe"], {
        to: [this.container]
      }, container => {
        console.log("Test Props ", this.props);
        console.log("csacascasc", container);
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Elements, _extends({
          Event: {
            onMouseDown: this.HandMouseDown,
            ref: this.styledRefs,
            draggable: true
          }
        }, this.props, {
          state: this.state,
          ref: this.element,
          container: container
        }));
      });
    }

  };
};

/***/ }),

/***/ "./src/ui/control/UIInput.tsx":
/*!************************************!*\
  !*** ./src/ui/control/UIInput.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");


const Field = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
    &{
        margin: 20px;
    }
    input {
        padding: 5px 10px;
        display:block;
       
    }
    input:focus{
        border: 2px solid black;
    }

`;
class UIInput extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    var flag = 'text';
    const {
      value,
      container,
      bind
    } = this.props;

    if (bind) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Field, null, " Edit Text : ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        value: value,
        onChange: e => {
          console.log(flag);
          container.setStateSync({
            data: {
              link: e.target.value
            }
          });
        }
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Field, null, " Edit Text : ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        value: value,
        onChange: e => {
          console.log(flag);
          container.setStateSync({
            data: {
              text: e.target.value
            }
          });
        }
      }));
    }
  }

}

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map