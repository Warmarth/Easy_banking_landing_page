import React from "react";
import { article } from "./data";
import "../App.css";

const Mainbody_3 = () => {
  return (
    <section>
      <div className="mb-20">
        <div className="mt-24 mb-10 py-2">
          <h2 className="text-5xl text-center capitalize">latest articles</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-around transition ">
          {article.map((item, idx) => {
            return (
              <div className="rounded px-[2rem] md:px-2 bg-slate-100" key={idx}>
                <div className="">
                  <img
                    src={item.pic}
                    alt={item.title}
                    className={`w-full h-[20rem]`}
                  />
                </div>
                <article className="p-[1.2rem] mt-[1rem]">
                  <blockquote className="capitalize text-sm font-mono py-2 mb-1">
                    {item.author}
                  </blockquote>
                  <h1 className="font-bold hover:text-[--primary-limeGreen] cursor-pointer">
                    {item.title}
                  </h1>
                  <p className="text-[14px]">{item.content}</p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mainbody_3;
