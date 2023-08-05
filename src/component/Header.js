import { React, useState } from "react";
import Menu from "./dbList";
import "../App.css";
import "./header.css";
import logo from "../Asset/logo.svg";
import { CgMenuGridO, CgClose } from "react-icons/cg";

function Header() {
  const [MenuOpen, setIsMenuOpen] = useState(false);
  const menu = () => {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header className="bg-slate-100 text-center animation top-0 sticky">
      <nav className=" navBar items-center justify-between p-4 sm:block md:flex cursor-pointer xl:w-10/12 xl:m-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="min-w-min self-center" />
          <button
            className="menu bg-indigo-300 font-3xl md:hidden"
            onClick={menu}
          >
            {MenuOpen ? <CgClose className="text-red-800" /> : <CgMenuGridO />}
          </button>
        </div>
        {MenuOpen && <Menu />}
        <ul className="nav-links text-md hidden capitalize block md:flex md:items-center mb-4 mt-4 md:m-2">
          <li className="hover:bg-green-100 md:hover:border-green-200 p-2 hover:rounded-xl hover:font-bold animation">
            <a href="#about.html">user</a>
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
        <button className="bg-green-400 hover:bg-green-600 rounded-xl p-2 hover:scale-105 transition hover:font-bold capitalize hidden md:flex ">
          request invite
        </button>
      </nav>
    </header>
  );
}

export default Header;
