'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var moment = _interopDefault(require('moment'));
var lodash = require('lodash');

var createComponent = lodash.memoize(function (interval) {
  return new Vue({
    data: {
      now: moment()
    },
    created: function created() {
      var _this = this;

      setInterval(function () {
        _this.now = moment();
      }, interval);
    }
  });
});

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var defaultOptions = {
  name: 'now',
  interval: 1000
};

var index = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions,
      name = _ref.name,
      interval = _ref.interval;

  var component = createComponent(interval);

  return {
    computed: defineProperty({}, name, function () {
      return component.$data.now;
    })
  };
});

module.exports = index;
