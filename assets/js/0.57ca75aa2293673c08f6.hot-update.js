webpackHotUpdate(0,{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var axios = __webpack_require__(61);

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      title: '',
      email: '',
      comment: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      axios.post('/reviews', {
        title: this.state.title,
        comment: this.state.comment,
        email: this.state.email
      }).then(function (response) {
        return _this2.setState({
          response: response
        });
      });
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'h3',
          null,
          'POST REVIEW'
        ),
        _react2.default.createElement('input', { type: 'text', className: 'left-input', name: 'title', placeholder: 'Your Name', value: this.state.title, onChange: this.handleChange }),
        _react2.default.createElement('input', { type: 'email', className: 'right-input', name: 'email', placeholder: 'Your Email', value: this.state.email, onChange: this.handleChange }),
        _react2.default.createElement('textarea', { name: 'comment', placeholder: 'Your Message', value: this.state.comment, onChange: this.handleChange }),
        _react2.default.createElement('input', { type: 'submit', className: 'submit-button', value: 'SEND' })
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "form {\n  background: #fff;\n  color: #000;\n  width: 55%;\n  overflow: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  padding: 0.01em 1em; }\n  @media only screen and (max-width: 760px) {\n    form {\n      width: 80%;\n      padding: 1em; } }\n  form h3 {\n    margin-top: 0.7em; }\n  form .left-input, form .right-input, form textarea {\n    width: 43%;\n    margin-bottom: 1em;\n    font-size: 1.1em;\n    padding: 0.6em 1em; }\n  form .left-input {\n    float: left; }\n  form .right-input {\n    float: right; }\n  form textarea {\n    width: 95%;\n    display: block;\n    font-size: 1.4em; }\n", ""]);

// exports


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(34)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(219, function() {
			var newContent = __webpack_require__(219);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

})
//# sourceMappingURL=0.57ca75aa2293673c08f6.hot-update.js.map