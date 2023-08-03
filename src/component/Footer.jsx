import { React, Component } from "react";
import logo from "../Asset/logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaSquareYoutube,
  FaInstagram,
} from "react-icons/fa6";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <section className="bg-blue-950 pt-24 pb-16 text-gray-100 text-center">
        <div className="px-10 lg:flex justify-between items-center">
          <div className="lg:grid grid-cols-3 justify-around lg:px-12">
            <div className=" ">
              <div className="flex justify-center mb-12 h-8 ">
                {" "}
                <img
                  src={logo}
                  alt=""
                  srcset=""
                  className="footer_logo text-white-200"
                />
              </div>
              <div className=" flex justify-center items-center ">
                <span className="text-yellow-400 text-5xl mr-6">
                  <FaFacebook />
                </span>
                <span className="text-yellow-400 text-5xl mr-6">
                  <FaTwitter />
                </span>
                <span className="text-yellow-400 text-5xl mr-6">
                  <FaPinterestP />
                </span>
                <span className="text-yellow-400 text-5xl mr-6">
                  <FaSquareYoutube />
                </span>
                <span className="text-yellow-400 text-5xl mr-6">
                  <FaInstagram />
                </span>
              </div>
            </div>
            <ul className="nav-links text-md  capitalize block  mt-4 ">
              <li className=" hover:text-green-600 p-2 hover:rounded-xl hover:font-bold">
                <a href="#index.html ">user</a>
              </li>
              <li className=" hover:text-green-600 p-2 hover:rounded-xl hover:font-bold">
                <a href="#about.html">dashbord</a>
              </li>
            </ul>
            <ul className="nav-links text-md  capitalize block mb-4 md:mt-4 ">
              <li className="hover:text-green-600 p-2 hover:rounded-xl hover:font-bold">
                <a href="#products.html">delivery</a>
              </li>
              <li className=" hover:text-green-600 p-2 hover:rounded-xl hover:font-bold">
                <a href="#contact.html">about us</a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <button className="bg-green-400 hover:bg-green-600 rounded-3xl  p-4 px-6 mt-12 lg:mt-0  mb-4 hover:scale-105 transition text-xl capitalize font-bold ">
              request invite
            </button>
            <p className="capitalize pt-4 text-xl">
              &copy; easybank. all rights reserved{" "}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
