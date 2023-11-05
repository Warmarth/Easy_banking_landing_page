import { React, Component } from "react";
import logo from "../Asset/logo.svg";
import { menuList } from "./data";
import { footerContent } from "./data";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <section className="bg-blue-950 pt-24 pb-16 text-gray-100 text-center">
        <div className="px-10 lg:flex justify-between items-center">
          <div className="lg:grid grid-cols-3 justify-around lg:px-12">
            <div className=" ">
              <div className="flex justify-center mb-12 h-8 ">
                <img src={logo} alt="" className="footer_logo bg-slate-300" />
              </div>
              <div className=" flex justify-center items-center ">
                {footerContent.icon.map((items, idx) => {
                  return (
                    <span className="text-yellow-400 text-5xl mr-6" key={idx}>
                      {items}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="grid item-center lg:grid-cols-2 lg:ml-12 justify-center">
              {menuList.map((item, idx) => {
                return (
                  <ul
                    className="nav-links text-md  capitalize block  mt-4 "
                    key={idx}
                  >
                    <li
                      className={`hover:text-green-600 p-2 hover:rounded-xl hover:font-bold`}
                    >
                      <a href="#index.html ">{item}</a>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className=" ">
            <button className="bg-green-400 hover:bg-green-600 rounded-3xl  p-4 px-6 mt-12 lg:mt-0  mb-4 hover:scale-105 transition text-xl capitalize font-bold ">
              request invite
            </button>
            <p className="capitalize pt-4 text-xl">
              &copy; easybank. all rights reserved
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
