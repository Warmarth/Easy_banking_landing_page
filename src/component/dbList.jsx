import React from "react";

const Menu = () => {
  const menu = ["user", "dashboard", "delivery", "about Us"];
  return (
    <section className="flex items-center justify-center w-full h-[20rem]">
      <ul className="absolute  nav-links text-md capitalize  block md:hidden mb-4 mt-4 animation bg-slate-100">
        {menu.map((items, index) => {
          return (
            <li
              className="hover:border-b-green-900 mx-1  border-b-2  hover:font-bold"
              key={index}
            >
              <a href="#index.html" className="m-8">
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
