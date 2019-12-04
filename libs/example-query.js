'use strict';

const connector = require('./connector');

const callback = elem => {
  const price = elem.price;
  if (price > 400) {
    return elem;
  }
};

const data = connector('database', 'goods', callback);

console.log('result: ', data);
