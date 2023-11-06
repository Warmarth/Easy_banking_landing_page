import { React, useState } from "react";
import Menu from "./dbList";
import logo from "../Asset/logo.svg";
import { menuList } from "./data";
import { CgMenuGridO, CgClose } from "react-icons/cg";

function Header() {
  const [MenuOpen, setIsMenuOpen] = useState(false);
  const menu = () => {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header className="bg-slate-100 text-center animation top-0 sticky">
      <nav className=" items-center justify-between p-4 sm:block md:flex cursor-pointer xl:w-10/12 xl:m-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="min-w-min self-center" />
          <button
            className="menu bg-indigo-300 font-3xl md:hidden"
            onClick={menu}
          >
            {MenuOpen ? <CgClose className="text-red-800" /> : <CgMenuGridO />}
          </button>
        </div>
        {MenuOpen && <div className="absolute">{<Menu />}</div>}
        {menuList.map((item, idx) => {
          return (
            <div
              className={`hover:border-[--primary-limeGreen] hover:border-b-2 hidden md:flex `}
              key={idx}
            >
              <p className={`mx-[-1rem] capitalize`}>{item}</p>
            </div>
          );
        })}
        <button className="bg-green-400 hover:bg-green-600 rounded-xl p-2 hover:scale-105 transition capitalize hidden md:flex ">
          request invite
        </button>
      </nav>
    </header>
  );
}

export default Header;
