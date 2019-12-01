'use strict';

const libs = require('./libs');
const http = require('http');

const { PORT } = libs.consts;
const types = libs.types;
const Page = libs.classpage;
const { urls, matching } = libs.urls;

const routing = url => {
  const urlValue = urls[url];
  if (!urlValue) {
    for (const route of matching) {
      const match = url.match(route[0]);
      if (match) return route[1];
    }
  }
  return urlValue;
};

const server = http.createServer((req, res) => {
  const url = req.url;
  const urlValue = routing(url);
  const type = typeof urlValue;
  const parse = types[type];
  const result = parse(urlValue, new Page(req));
  const { writeHead, data } = result;
  res.writeHead(...writeHead);
  res.end(data);
});

server.listen(PORT);

server.on('error', err => {
  console.log(err);
});
