'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createComponent = require('./create-component');

var _createComponent2 = _interopRequireDefault(_createComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  name: 'now',
  interval: 1000
};

exports.default = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions,
      name = _ref.name,
      interval = _ref.interval;

  var component = (0, _createComponent2.default)(interval);

  return {
    computed: _defineProperty({}, name, function () {
      return component.$data.now;
    })
  };
};

module.exports = exports['default'];