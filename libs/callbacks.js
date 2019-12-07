'use strict';

const callbacks = Object.create(null);

callbacks.url = function(elem) {
  const url = elem.url;
  if (url === this.url) {
    return elem;
  }
};

callbacks.sku = function(elem) {
  const url = elem.sku;
  if (url === this.sku) {
    return elem;
  }
};

module.exports = callbacks;
