'use strict';

const fs = require('fs');
const indexes = require('../database/indexes');

const goods = JSON.parse(fs.readFileSync('../database/goods.json'));
const base = Object.create(null);

const addTable = (name, data, indexes) => {
  base[name] = [data];
  const arr = base[name];
  const indexObject = {};
  for (const value of indexes) {
    const index = {};
    for (const elem of data) {
      const res = elem[value];
      if (res) {
        const i = data.indexOf(elem);
        const v = elem[value];
        index[v] = i;
      }
    }
    if (Object.keys(index).length > 0) {
      indexObject[value] = index;
    }
  }
  if (Object.keys(indexObject).length > 0) {
    arr.push(indexObject);
  }
};

addTable('goods', goods, indexes['goods']);
console.log('base is: ', base);
//query 0 - table
// 1 - property
// 2 - logic
// 3 - looking for
const database = query => {
  console.log(query);
};

module.exports = database;
