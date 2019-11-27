'use strict';

const lib = {};

const libNames = [
  'urls', 'consts', 'parseurls'
];
const libPath = './libs/';
for (const value of libNames) {
  const libFile = require(`${libPath}${value}`);
  Object.assign(lib, { [value]: libFile });
}

module.exports = lib;
