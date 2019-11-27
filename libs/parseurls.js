'use strict';

const types = (type, par) => {
  if (type === 'string') return par;
  if (type === 'function') return par();
};

const parseUrl = param  => {
  if (!param) return { statusCode: 404, data: 'Page not found' };
  const type = typeof param;
  const data = types(type, param);
  return { statusCode: 200, data };
};

module.exports = parseUrl;
