'use strict';

const libs = require('./libs');
const http = require('http');

const { PORT } = libs.consts;
const types = libs.types;
const Page = libs.classpage;
const { urls, matching } = libs.urls;
const cache = libs.cache;

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

const serialize = req => {
  const urlValue = routing(req.url);
  const type = typeof urlValue;
  const result = types[type];
  return result(urlValue, new Page(req));
};

const server = http.createServer((req, res) => {
  const cacheResult = cache(req.url);
  let result;
  if (cacheResult) result = cacheResult;
  else {
    result = serialize(req);
    cache(req.url, result);
  }
  const { writeHead, data } = result;
  res.writeHead(...writeHead);
  res.end(data);
});

server.listen(PORT);

server.on('error', err => {
  console.log(err);
});
