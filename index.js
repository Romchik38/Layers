'use strict';

const libs = require('./libs');
const http = require('http');

const { PORT } = libs.consts;
const types = libs.types;
const Page = libs.classpage;

http.createServer((req, res) => {
  const url = req.url;
  const urlValue = libs.urls[url];
  const type = typeof urlValue;
  const parse = types[type];
  const result = parse(urlValue, new Page(req));
  const { writeHead, data } = result;
  res.writeHead(...writeHead);
  res.end(data);
}).listen(PORT);
