import { React, Component } from "react";
import logo from "../Asset/logo.svg";
import { footerList} from "./data";
import { footerContent } from "./data";

class Footer extends Component {
  render() {
    return (
      <section className="bg-blue-950 pt-24 pb-16 text-gray-100 text-center">
        <div className="lg:flex justify-around items-center ">
          <div className="lg:grid grid-cols-2 justify-around">
            <div className=" ">
              <div className="flex justify-center mb-12 h-8 ">
                <img src={logo} alt="" className="footer_logo bg-slate-300" />
              </div>
              <div className=" flex justify-center items-center">
                {footerContent.icon.map((items, idx) => {
                  return (
                    <span className="text-yellow-400 text-5xl mr-6" key={idx}>
                      {items}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="grid item-center lg:grid-cols-2 lg:ml-10 justify-center">
              {footerList.map((item, idx) => {
                return (
                  <ul
                    className="nav-links text-md  capitalize block  mt-4 "
                    key={idx}
                  >
                    <li
                      className={`hover:text-green-600  hover:rounded-xl hover:font-bold`}
                    >
                      <a href="#index.html ">{item}</a>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="md:text-right ">
            <button className="bg-green-400 hover:bg-green-600 rounded-[2rem]  p-3  mt-12 lg:mt-0  mb-4 hover:scale-105 transition text-xl capitalize ">
              request invite
            </button>
            <p className="capitalize pt-4 ">
              &copy; easybank. all rights reserved
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
