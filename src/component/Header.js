import React from "react";
import "../App.css";

function Header() {
  return (
    <header>
      <nav className="bg-gray-400 py-4">
        <div>
        </div>
        <ul className="nav-links text-xl font-bold capitalize">
          <li className="hover:bg-blue-300 p-2 hover:rounded-xl ">
            <a href="#index.html">user</a>
          </li>
          <li className="hover:bg-blue-300 p-2 hover:rounded-xl">
            <a href="#about.html">dashbord</a>
          </li>
          <li className="hover:bg-blue-300 p-2 hover:rounded-xl">
            <a href="#products.html">delivery</a>
          </li>
          <li className="hover:bg-blue-300 p-2 hover:rounded-xl">
            <a href="#contact.html">about us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
