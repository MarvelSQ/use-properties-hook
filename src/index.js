const { useRef } = require('react');

function useProperty(prop) {
  const propInstance = useRef(prop);
  propInstance.current = prop;
  return useRef(
    typeof prop === 'function' ? (...all) => propInstance.current(...all) : prop
  ).current;
}

function useProperties(...properties) {
  return properties.map(useProperty);
}

module.exports = {
  useProperty,
  useProperties
};
