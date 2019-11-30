'use strict';

const buildPage = require('./buildpage');

const types = {
  'string': (param) => {
    const writeHead = [
      301,
      { 'Location': `${param}` },
    ];
    return { writeHead, data: '' };
  },
  'bigint': () => {},
  'boolean': () => {},
  'function': (param, page) => {
    buildPage(page);
    const html = page.htmlTemplate();
    const writeHead = [200];
    return { writeHead, data: html };
  },
  'number': () => {},
  'object': () => {},
  undefined: (param, page) => {
    buildPage(page);
    const html = page.htmlTemplate();
    const writeHead = [404];
    return { writeHead, data: html };
  },
};

module.exports = types;
