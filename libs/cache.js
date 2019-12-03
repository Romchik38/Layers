'use strict';

const MAX_SIZE = 100;

const makeCache = () => {
  const cache = new Map();
  const cached = (url, data) => {
    const res = cache.get(url);
    if (res) {
      return res;
    } else if (data) {
      const status = data.writeHead[0];
      if (status !== 200) return;
      if (cache.size < MAX_SIZE) {
        cache.set(url, data);
      } else {
        const keys = [...cache.keys()];
        cache.delete(keys[0]);
        cache.set(url, data);
        console.log('replaced in cache url', cache, cache.size);
      }
    }
  };
  return cached;
};

const cache = makeCache();

module.exports = cache;
