webpackHotUpdate(0,{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _UserBox = __webpack_require__(114);

var _UserBox2 = _interopRequireDefault(_UserBox);

var _Form = __webpack_require__(113);

var _Form2 = _interopRequireDefault(_Form);

__webpack_require__(214);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var axios = __webpack_require__(61);

var AppReviews = function (_Component) {
  _inherits(AppReviews, _Component);

  function AppReviews(props) {
    _classCallCheck(this, AppReviews);

    var _this = _possibleConstructorReturn(this, (AppReviews.__proto__ || Object.getPrototypeOf(AppReviews)).call(this, props));

    _this.state = {
      reviews: []
    };

    return _this;
  }

  _createClass(AppReviews, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      axios.get('/reviews').then(function (response) {
        return _this2.setState({
          reviews: response.data
        });
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      axios.post('/reviews', this.state).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'reviews' },
          _react2.default.createElement(
            'h1',
            null,
            'Reviews'
          ),
          _react2.default.createElement(
            'p',
            null,
            'See what our users have been saying.'
          )
        ),
        this.renderReviews(),
        _react2.default.createElement(_Form2.default, { onSubmit: this.handleSubmit })
      );
    }
  }, {
    key: 'renderReviews',
    value: function renderReviews() {
      var reviews = this.state.reviews;

      return reviews.map(function (rev) {
        return _react2.default.createElement(_UserBox2.default, { name: rev.title, comment: rev.comment, photo: rev.avatar });
      });
    }
  }]);

  return AppReviews;
}(_react.Component);

exports.default = AppReviews;

/***/ })

})
//# sourceMappingURL=0.e0591cdae72c6e8c696f.hot-update.js.map