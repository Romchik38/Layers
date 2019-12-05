'use strict';

const fs = require('fs');
const path = require('path');
const urlsTemplate = require('./urlstemplate');
const PATH_TEMPLATE = './libs/templates';

const names = fs.readdirSync(PATH_TEMPLATE, 'utf8');
const templates = Object.create(null);

for (const name of names) {
  const onlyName = path.parse(name)['name'];
  templates[onlyName] = require(`./templates/${name}`);
}

const getTemplate = page => {
  let template = urlsTemplate[page.url];
  if (!template) template = '404';
  page.htmlTemplate = templates[template];
};

module.exports = getTemplate;
