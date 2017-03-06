webpackHotUpdate(0,{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(221);

var _Valuation = __webpack_require__(123);

var _Valuation2 = _interopRequireDefault(_Valuation);

var _axios = __webpack_require__(65);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialState = { title: '', email: '', comment: '' };

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = initialState;

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

            var _state = this.state,
                title = _state.title,
                comment = _state.comment,
                email = _state.email;
            var onNewReview = this.props.onNewReview;

            event.preventDefault();
            _axios2.default.post('/review', { title: title, comment: comment, email: email }).then(function (response) {
                if (typeof onNewReview === 'function') {
                    onNewReview(response.data);
                    _this2.setState(initialState);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                title = _state2.title,
                email = _state2.email,
                comment = _state2.comment;

            return _react2.default.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                _react2.default.createElement(
                    'h1',
                    { className: 'slds-text-heading--large slds-m-bottom--small' },
                    'POST'
                ),
                _react2.default.createElement(
                    'fieldset',
                    { className: 'slds-form--compound' },
                    _react2.default.createElement(
                        'div',
                        { className: 'slds-form-element__group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'slds-form-element__row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'slds-form-element slds-size--1-of-2' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'slds-form-element__label', htmlFor: 'text-input-01' },
                                    'Your Name'
                                ),
                                _react2.default.createElement('input', { type: 'text', name: 'title', id: 'text-input-01', className: 'slds-input', value: title, onChange: this.handleChange })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'slds-form-element slds-size--1-of-2' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'slds-form-element__label', htmlFor: 'text-input-02' },
                                    'Your Email'
                                ),
                                _react2.default.createElement('input', { type: 'email', name: 'email', id: 'text-input-0', className: 'slds-input', value: email, onChange: this.handleChange })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'slds-form-element' },
                            _react2.default.createElement(
                                'label',
                                { className: 'slds-form-element__label', htmlFor: 'textarea-input-01' },
                                'Your Message'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'slds-form-element__control' },
                                _react2.default.createElement('textarea', { name: 'comment', id: 'textarea-input-01', className: 'slds-textarea', value: comment, onChange: this.handleChange })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'slds-m-top--medium' },
                            _react2.default.createElement(
                                'label',
                                { className: 'slds-form-element__label' },
                                'Your Valuation'
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(_Valuation2.default, null)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'submit-button slds-m-top--large' },
                            _react2.default.createElement(
                                'button',
                                { type: 'submit', className: 'slds-button slds-button--brand' },
                                'Send'
                            )
                        ),
                        _react2.default.createElement('div', { className: 'g-recaptcha', 'data-sitekey': '6LehsxcUAAAAAFGJqyqEmbPvUBtmy755NOuXJalz' })
                    )
                )
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ })

})
//# sourceMappingURL=0.7c4fe6b773bbbcd64958.hot-update.js.map