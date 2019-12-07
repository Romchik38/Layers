'use strict';

const headTemplate = require('./heads/head');
const headerTemplate = require('./headers/header');
const footerTemplate = require('./footers/footer.js');

const tem = parameters => {
  const head = headTemplate(parameters);
  const header = headerTemplate(parameters);
  const footer = footerTemplate(parameters);
  const { categoryGoods, categoryName } = parameters;
  let data = `
  <body>
   <h1>${categoryName}</h1>
   <p>Choose on of our product.</p>
   <section>`;
     for (const good of categoryGoods) {
      data += `
        <article>
          <h2>${good.model}</h2>
          <p>${good.shortDescription}</p>
          <p>Price: ${good.price}$</p>
          <p>Sku: ${good.sku}</p>
        </article>
      `;
     }
     data += `
   </section>
   </br>${footer}
  </body>

  `;
  const html = head.concat(header).concat(data);
  return html;
};

module.exports = tem;
