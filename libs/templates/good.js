'use strict';

const headTemplate = require('./heads/head');
const headerTemplate = require('./headers/header');
const footerTemplate = require('./footers/footer.js');

const tem = parameters => {
  const head = headTemplate(parameters);
  const header = headerTemplate(parameters);
  const footer = footerTemplate(parameters);
  const { good } = parameters;
  const data = `
  <body>
   <section>
        <article>
          <h1>${good.model}</h1>
          <p>${good.shortDescription}</p>
          <p>Price: ${good.price}$</p>
          <p>Sku: ${good.sku}</p>
          <p><img style="max-height:600px" src="${good.img}"><p>
          <h2>Description</h2>
          <p>${good.description}</p>
        </article>
   </section>
   </br>${footer}
  </body>

  `;
  const html = head.concat(header).concat(data);
  return html;
};

module.exports = tem;
