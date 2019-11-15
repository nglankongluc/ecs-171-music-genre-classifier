"use strict";

var ajaxRequests = _interopRequireWildcard(require("./ajaxRequests.js"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//creaate main page for our application
var MainPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainPage, _React$Component);

  //create constructor for class that holds the page states
  function MainPage(props) {
    var _this;

    _classCallCheck(this, MainPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainPage).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "gotolandingPage", function () {
      _this.setState({
        landingPage: true,
        secondPageState: false,
        thirdPageState: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "gotoPageTwoState", function () {
      _this.setState({
        landingPage: false,
        secondPageState: true,
        thirdPageState: false
      }); //call ajaxrequest, must wait for page to render.


      var song = _this.state.songTitle;
      setTimeout(function () {
        ajaxRequests.sbm(song);
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "gotoPageThreeState", function () {
      _this.setState({
        landingPage: false,
        secondPageState: false,
        thirdPageState: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTextChange", function (event) {
      _this.setState({
        songTitle: event.target.value
      });
    });

    _this.state = {
      landingPage: true,
      secondPageState: false,
      thirdPageSate: false,
      songTitle: ' '
    };
    return _this;
  } //create goto page state functions
  //in here setState will rerender the dom


  _createClass(MainPage, [{
    key: "render",
    value: function render() {
      if (this.state.landingPage === true) {
        return _react.default.createElement("main", null, _react.default.createElement("div", {
          className: "pageContainer"
        }, _react.default.createElement("p", {
          id: "LandingPage"
        }, "Please enter in a song title to find its genre"), _react.default.createElement("div", {
          id: "textInput"
        }, _react.default.createElement("p", {
          id: "songInputP"
        }, "song title"), _react.default.createElement("input", {
          style: {
            height: 40,
            fontSize: 40
          },
          placholder: "enter in song title",
          onChange: this.handleTextChange,
          value: this.state.songTitle
        }), _react.default.createElement("button", {
          id: "buttonStyle",
          onClick: this.gotoPageTwoState
        }, " Search "))));
      } else if (this.state.secondPageState === true) {
        return _react.default.createElement("main", null, _react.default.createElement("div", {
          className: "pageContainer"
        }, _react.default.createElement("p", {
          id: "placeGenreHere"
        }), _react.default.createElement("button", {
          id: "SecondPageButton",
          onClick: this.gotoPageThreeState
        }, "goto 3rd page")));
      } else if (this.state.thirdPageState === true) {
        return _react.default.createElement("main", null, _react.default.createElement("div", {
          className: "pageContainer"
        }, _react.default.createElement("p", {
          id: "ThirdPage"
        }, "page 3"), _react.default.createElement("button", {
          id: "ThirdPageButton",
          onClick: this.gotolandingPage
        }, "goto 1st page")));
      }
    }
  }]);

  return MainPage;
}(_react.default.Component);

_reactDom.default.render(_react.default.createElement(MainPage, null), document.getElementById('root'));