import React from "react";
import "../App.css";
import mockups from "../Asset/images/image-mockups.png";
import { footerContent } from "./data";

const Mainbody = () => {
  const { title, intro } = footerContent.headerPage;
  return (
    <section>
      <div className=" block lg:flex lg:flex-row-reverse justify-between transition">
        <div className=" background">
          <img src={mockups} alt="" className=" w-full lg:mb-[-8rem] " />
        </div>
        <div className="flex items-center lg:ml-24 my-8 mr-8">
          <article
            className="max-w-md text-center lg:text-left m-auto
          my-4 p-2"
          >
            <h2 className="font-bold text-3xl mb-4 capitalize">{title}</h2>
            <p className="mb-3">{intro}</p>
            <button
              type="button"
              className="bg-green-400 rounded-3xl p-2 mt-2 hover:scale-105 transition hover:text-bold"
            >
              Request invite
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Mainbody;
