"use strict";

var _require = require('react'),
    useRef = _require.useRef;

module.exports = function () {
  return Array.prototype.slice.apply(arguments).map(function (property) {
    return useRef(property).current;
  });
};
