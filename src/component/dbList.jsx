import React from "react";
import { menuList } from "./data";
const Menu = () => {
  return (
    <section className="translate-x-[8rem] translate-y-[4rem]">
      <ul className="flex items-center justify-center flex-col text-md capitalize w-[20rem] h-[50vh]  md:hidden mb-4 mt-4 animation bg-slate-100 rounded-xl">
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
