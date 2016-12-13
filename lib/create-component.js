'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _lodash.memoize)(function (interval) {
  return new _vue2.default({
    data: {
      now: (0, _moment2.default)()
    },
    created: function created() {
      var _this = this;

      setInterval(function () {
        _this.now = (0, _moment2.default)();
      }, interval);
    }
  });
});
module.exports = exports['default'];