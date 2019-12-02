'use strict';

let counter = 0;

const makeCache = () => {
  const cache = Object.create(null);
  const cached = (url, data) => {
    const res = cache[url];
    if (res) {
      console.log('from cache, url', url, Object.keys(cache).length);
      return res;
    } else if (data) {
      cache[url] = data;
      console.log(++counter);
      console.log('added to cache url', url, Object.keys(cache).length);
    }
  };
  return cached;
};

const cache = makeCache();

module.exports = cache;
