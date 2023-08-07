import React from "react";

const Menu = () => {
  return (
    <section className="flex justify-center">
      <ul className="nav-links text-md capitalize block md:hidden mb-4 mt-4 animation bg-slate-100">
        <li className="hover:border-b-green-900 mx-1  border-b-2   hover:font-bold">
          <a href="#index.html" className="m-8">user</a>
        </li>
        <li className="hover:border-b-green-900 mx-1 border-b-2  hover:font-bold">
          <a href="#about.html">dashbord</a>
        </li>
        <li className="hover:border-b-green-900 mx-1 border-b-2  hover:font-bold">
          <a href="#products.html">delivery</a>
        </li>
        <li className="hover:border-b-green-900 mx-1 border-b-2   hover:font-bold">
          <a href="#contact.html">about us</a>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
