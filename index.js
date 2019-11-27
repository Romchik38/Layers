'use strict';

const libs = require('./libs');
const http = require('http');

const { PORT } = libs.consts;
const parseUrls = libs.parseurls;

http.createServer((req, res) => {
  const url = req.url;
  const result = parseUrls(libs.urls[url]);
  res.statusCode = result.statusCode;
  res.end(result.data);
}).listen(PORT);
