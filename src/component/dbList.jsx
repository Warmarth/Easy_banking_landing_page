import React from "react";
import { menuList } from "./data";

const Menu = () => {
  return (
    <section className="translate-x-[8rem] translate-y-[4rem] shadow-2xl">
      <ul className="flex items-center text-[--primary-grayishBlue] justify-center flex-col text-md capitalize w-[20rem] h-[50vh]  md:hidden mb-4 mt-4 animation rounded-xl bg-slate-50 shadow">
        {menuList.map((items, index) => {
          return (
            <li
              className={`hover:border-[--primary-limeGreen] border-transparent my-3  border-b-4 hover:scale-130`}
              key={index}
            >
              <p>{items}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;
