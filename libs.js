'use strict';

const lib = {};

const libNames = [
  'cache', 'classpage', 'consts', 'types', 'urls',
];
const libPath = './libs/';
for (const value of libNames) {
  const libFile = require(`${libPath}${value}`);
  Object.assign(lib, { [value]: libFile });
}

module.exports = lib;
