'use strict';

const connector = require('./connector');

const data = connector('database', [
  ['goods', 'model', 'like', 'a620'],
]);

console.log(data);
