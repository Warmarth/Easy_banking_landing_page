import React from "react";
import { menuList } from "./data";
const Menu = () => {
  return (
    <section className=" ">
      <ul className="flex items-center justify-center flex-col nav-links text-md capitalize w-full h-[50vh]  md:hidden mb-4 mt-4 animation bg-slate-100">
        {menuList.map((items, index) => {
          return (
            <li
              className={`hover:border-[--primary-limeGreen] my-1  hover:border-b-2 hover:scale-130 `}
              key={index}
            >
              <a href="#index.html" className="">
                {items}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
