'use strict';

const libs = require('./libs');
const http = require('http');

const { PORT } = libs.consts;
const types = libs.types;

http.createServer((req, res) => {
  const url = req.url;
  const urlValue = libs.urls[url];
  const type = typeof urlValue;
  const parse = types[type];
  const result = parse(urlValue);
  const { writeHead, data } = result;
  res.writeHead(...writeHead);
  res.end(data);
}).listen(PORT);
