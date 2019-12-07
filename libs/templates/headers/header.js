'use strict';

const templateHeader = parameters => {
  const data = `
    <header>
      <img src="/logo.png">
      <h1>Mobile Spheres - the best mobile for everyone!</h1>
      <h2>Wellcome to our site</h2>
      <p>Hello everyone. We sell phones and accessories. Visit store's pages and
         you will found what you prefer.</p>
    </header>
    <nav>
       <h2>Menu</h2>
       <ul>
         <li><a href="/" target="_self">Main page</a></li>
         <li><a href="/phones" target="_self">Phones</a></li>
         <li><a href="/cases" target="_self">Cases</a></li>
       </ul>
    </nav>
  `;
  return data;
};

module.exports = templateHeader;
