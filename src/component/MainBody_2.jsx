import React from "react";
import "../App";
import { info } from "./data";

const Mainbody_2 = () => {
  return (
    <section className="bg-slate-100">
      <div className=" pt-[5rem] text-center md:text-left xl:w-10/12 xl:m-auto">
        <div className=" mb-24 px-2 ">
          <h1 className="mb-4 text-5xl">why choose Easybank?</h1>
          <p className=" w-5/6 ">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 px-2 ">
          {info.map((item, idx) => {
            return (
              <div className="w-6/6 m-auto mb-4" key={idx}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className=" m-auto md:m-1 mb-4 px-6 md:px-0"
                />

                <article className="mt-4">
                  <h3 className="font-bold mb-4 text-xl">{item.title}</h3>
                  <p className="mr-8 m-auto">{item.content}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mainbody_2;
