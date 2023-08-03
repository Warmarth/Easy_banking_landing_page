import React from "react";

const Menu = () => {
  return (
    <section className="flex justify-center">
      <ul className="nav-links w-80 text-md capitalize block  mb-4 mt-4 animation bg-green-800">
        <li className="hover:bg-green-100 md:hover:border-green-200 p-2 hover:rounded-xl hover:font-bold ">
          <a href="#index.html ">user</a>
        </li>
        <li className="hover:bg-green-100 p-2 hover:rounded-xl hover:font-bold">
          <a href="#about.html">dashbord</a>
        </li>
        <li className="hover:bg-green-100  p-2 hover:rounded-xl hover:font-bold">
          <a href="#products.html">delivery</a>
        </li>
        <li className="hover:bg-green-100 p-2 hover:rounded-xl hover:font-bold">
          <a href="#contact.html">about us</a>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
