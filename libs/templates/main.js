'use strict';

const tem = parameters => {
  const data = `
   <head>
     <title>${parameters.title}</title>
   </head>
   <body>
     <h1>Wellcome to your Site</h1>
     <p>Hello everyone. We sell phones and accessories.</p>
     <ul>
       <li>Main page</li>
       <li><a href="/phones" target="_self">Phones</a></li>
       <li><a href="#" target="_self">Cases</a></li>
     </ul>
   </body>
  `;
  return data;
};

module.exports = tem;
