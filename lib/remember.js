'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

exports.default = function (object, path, defaultValueCallback) {
  if ((0, _lodash.has)(object, path)) {
    return (0, _lodash.get)(object, path);
  }

  var value = defaultValueCallback();
  (0, _lodash.set)(object, path, value);
  return value;
};

module.exports = exports['default'];