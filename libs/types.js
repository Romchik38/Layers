'use strict';

const types = {
  'string': (param) => {
    const writeHead = [
      301,
      { 'Location': `http://localhost${param}` },
    ];
    return { writeHead, data: '' };
  },
  'bigint': () => {},
  'boolean': () => {},
  'function': (param) => {
    const writeHead = [200];
    return { writeHead, data: param() };
  },
  'number': () => {},
  'object': () => {},
  undefined: () => {
    const writeHead = [404];
    return { writeHead, data: 'Page not found' };
  },
};

module.exports = types;
