import React from "react";
import "../App.css";
import background from "../Asset/img_2.jpg";

const Mainbody = () => {
  return (
    <section>
      <div className=" flex flex-col-reverse lg:flex-col-reverse justify-between ">
        <div className="flex items-center lg:ml-24 my-8 mr-4">
          <article
            className="max-w-md text-center lg:text-left m-auto
          my-4 p-2"
          >
            <h2 className="font-bold text-3xl mb-4 capitalize">
              next generation digital banking
            </h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus fuga tempore repellendus labore quam corrupti nemo vel
              quod repellat illo, praesentium id nihil eligendi quasi provident
              nobis in delectus esse.
            </p>
            <button
              type="button"
              className="bg-green-400 rounded-3xl p-2 mt-2 hover:scale-105 transition hover:text-bold"
            >
              Request invite
            </button>
          </article>
        </div>
        <div className=" ">
          <img
            src={background}
            alt=""
            className="background rounded-bl-xl border-green-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Mainbody;