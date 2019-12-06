'use strict';

const headTemplate = require('./heads/head');
const headerTemplate = require('./headers/header');
const footerTemplate = require('./footers/footer.js');

const tem = parameters => {
  const head = headTemplate(parameters);
  const header = headerTemplate(parameters);
  const footer = footerTemplate(parameters);
  const data = `
  <body>
   <h1>Category Page </h1>
   <p>Choose on of our product.</p>
   <section>
     <article>
       <h2>Good 1</h2>
       <p>Nice choice for everyone</p>
       <p>Price: 250$</p>
     </article>
     <article>
       <h2>Good 2</h2>
       <p>Best by. One choice, one phone</p>
       <p>Price: 450$</p>
     </article>
   </section>
   </br>${footer}
  </body>

  `;
  const html = head.concat(header).concat(data);
  return html;
};

module.exports = tem;
