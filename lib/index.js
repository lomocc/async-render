'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Vincent on 2018/3/28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AsyncRender = function (_React$PureComponent) {
  _inherits(AsyncRender, _React$PureComponent);

  function AsyncRender(props) {
    _classCallCheck(this, AsyncRender);

    var _this = _possibleConstructorReturn(this, (AsyncRender.__proto__ || Object.getPrototypeOf(AsyncRender)).call(this, props));

    _this.state = {
      children: null
    };
    return _this;
  }

  _createClass(AsyncRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.requestIdleCallback();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var children = this.props.children;

      if (children !== prevProps.children) {
        this.cancelIdleCallback();
        this.requestIdleCallback();
      }
    }
  }, {
    key: 'requestIdleCallback',
    value: function (_requestIdleCallback) {
      function requestIdleCallback() {
        return _requestIdleCallback.apply(this, arguments);
      }

      requestIdleCallback.toString = function () {
        return _requestIdleCallback.toString();
      };

      return requestIdleCallback;
    }(function () {
      var _this2 = this;

      var children = this.props.children;

      this.idleCallbackId = requestIdleCallback(function () {
        return _this2.setState({ children: children });
      });
    })
  }, {
    key: 'cancelIdleCallback',
    value: function (_cancelIdleCallback) {
      function cancelIdleCallback() {
        return _cancelIdleCallback.apply(this, arguments);
      }

      cancelIdleCallback.toString = function () {
        return _cancelIdleCallback.toString();
      };

      return cancelIdleCallback;
    }(function () {
      if (this.idleCallbackId) {
        cancelIdleCallback(this.idleCallbackId);
        this.idleCallbackId = null;
      }
    })
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.cancelIdleCallback();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.state.children;

      return children || false;
    }
  }]);

  return AsyncRender;
}(_react2.default.PureComponent);

exports.default = AsyncRender;