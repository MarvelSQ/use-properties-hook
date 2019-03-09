"use strict";

var _require = require('react'),
    useRef = _require.useRef;

function useProperty(prop) {
  var propInstance = useRef(prop);
  propInstance.current = prop;
  return useRef(typeof prop === 'function' ? function () {
    return propInstance.current.apply(propInstance, arguments);
  } : prop).current;
}

function useProperties() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return properties.map(useProperty);
}

module.exports = {
  useProperty: useProperty,
  useProperties: useProperties
};
