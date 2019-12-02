'use strict';

const tem = () => {
  const data = `
   <h1>Category Page </h1>
   <p>Choose on of our product.</p>
   <ul>
     <li><a href="/" target="_self">Main page</a></li>
     <li>Phones</li>
     <li><a href="#" target="_self">Cases</a></li>
   </ul>
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

  `;
  return data;
};

module.exports = tem;
