import React from "react";
import "../App.css";
import "./header.css";
import logo from "../Asset/logo.svg";

function Header() {
  return (
    <header className="bg-gray-400 text-center animation">
      <nav className=" navBar items-center justify-between p-4 sm:block md:flex cursor-pointer xl:w-10/12 xl:m-auto">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="min-w-min self-center" />
        </div>
        <ul className="nav-links text-md font-bold capitalize block md:flex  mb-4 mt-4 md:m-2">
          <li className="hover:bg-blue-300 p-2 hover:rounded-xl animation">
            <a href="#index.html ">user</a>
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
        <button className="bg-green-400 rounded-xl p-2 hover:scale-105 transition hover:text-bold">
          request invite
        </button>
      </nav>
    </header>
  );
}

export default Header;
