'use strict';

const templateHead = parameters => {
  const { title } = parameters;
  const data = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${title}</title>
    </head>
  `;
  return data;
};

module.exports = templateHead;
