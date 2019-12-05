'use strict';

const connector = require('./connector');

const getparameters = (page, table) => {
  const callback = elem => {
    const url = elem.url;
    if (url === page.url) {
      return elem;
    }
  };
  const data = connector('database', table, callback)[0];
  page.parameters['title'] = data.title;
};

const urlsFn = {
  'main': page => {
    getparameters(page, 'pages');
  },
  'catalog': page => {
    getparameters(page, 'categories');
  },
  'good': () => 'hello',
};

module.exports = urlsFn;
