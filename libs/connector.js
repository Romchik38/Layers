'use strict';

const database = require('./database');

const data = Object.create(null);
Object.assign(data, { database });

const connector = (name, query) => {
  const base = data[name];
  return base(query);
};

module.exports = connector;
