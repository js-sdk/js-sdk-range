(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var charLowerRange = exports.charLowerRange = ['a'.charCodeAt(0), 'z'.charCodeAt(0)];
  var charUpperRange = exports.charUpperRange = ['A'.charCodeAt(0), 'Z'.charCodeAt(0)];
  var charNumberRange = exports.charNumberRange = ['0'.charCodeAt(0), '9'.charCodeAt(0)];

  var between = exports.between = function between(value, lower, higher) {
    return value >= lower && value <= higher;
  };

  var rangeIn = exports.rangeIn = function rangeIn(start, end, range) {
    return between(start, range[0], range[1]) && between(end, range[0], range[1]);
  };

  var rangeImpl = exports.rangeImpl = function rangeImpl(start, end, step, f) {
    var length = end - start;
    var elements = step > 1 ? length - (step == 1 ? 0 : Math.round(length / step)) : Math.round(length / step);
    var ls = new Array(elements);
    for (var i = 0; i < length && i <= elements; i++) {
      ls[i] = f(i * step + start);
    }
    return ls;
  };

  var rangeChar = exports.rangeChar = function rangeChar(start, end) {
    var x = start.charCodeAt(0);
    var y = end.charCodeAt(0);
    var ok = rangeIn(x, y, charLowerRange) || rangeIn(x, y, charUpperRange) || rangeIn(x, y, charNumberRange);
    return ok ? rangeImpl(x, y + 1, 1, String.fromCharCode) : [];
  };

  var rangeStep = exports.rangeStep = function rangeStep(start, end, step) {
    return rangeImpl(start, end, step, function (x) {
      return x;
    });
  };

  var range = exports.range = function range(start, end) {
    return rangeImpl(start, end, 1, function (x) {
      return x;
    });
  };

  var rangeInclStep = exports.rangeInclStep = function rangeInclStep(start, end, step) {
    return rangeStep(start, end + 1, step);
  };

  var rangeIncl = exports.rangeIncl = function rangeIncl(start, end) {
    return range(start, end + 1, 1);
  };
});
