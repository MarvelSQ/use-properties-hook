const { useRef } = require('react');

module.exports = function(){
  return Array.prototype.slice.apply(arguments).map(property => useRef(property).current);
};
