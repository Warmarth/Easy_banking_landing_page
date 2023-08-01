import React from "react";
import "../App";
import {
  FaAccessibleIcon,
  FaCcMastercard,
  FaBuyNLarge,
  FaFingerprint,
} from "react-icons/fa";

const Mainbody_2 = () => {
  return (
    <section className="bg-slate-100">
      <div className=" p-8 text-center md:text-left xl:w-11/12 xl:m-auto">
        <div className=" mb-24">
          <h1 className="mb-4 text-5xl">why choose Easybank?</h1>
          <p className=" w-5/6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            maiores nemo esse sapiente ipsum. Nostrum, molestiae.
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 fit ">
          <div className="w-6/6 m-auto mb-4 pb-2 ">
            <span className="icons m-auto md:m-1 mb-4 p-5 ">
              <FaCcMastercard />
            </span>
            <article className="mt-4">
              <h3 className="font-bold mb-4 text-xl">Online Banking</h3>
              <p className="mr-8 m-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
                eum. Soluta quia reprehenderit laboriosam, ratione, repudiandae
                dolor reiciendis voluptatum
              </p>
            </article>
          </div>
          <div className="w-6/6 m-auto mb-4 pb-2">
            <span className="icons m-auto md:m-1 mb-4 p-5 ">
              <FaBuyNLarge />
            </span>
            <article className="mt-4">
              <h3 className="font-bold mb-4 text-xl">Simple Budgeting</h3>
              <p className="mr-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
                eum. Soluta quia reprehenderit laboriosam, ratione, repudiandae
                dolor reiciendis voluptatum
              </p>
            </article>
          </div>
          <div className="w-6/6  m-auto mb-4 pb-2">
            <span className="icons m-auto md:m-1 mb-4 p-5 ">
              <FaFingerprint />
            </span>
            <article className="mt-4">
              <h3 className="font-bold mb-4 text-xl">Fast Onboarding</h3>
              <p className="mr-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
                eum. Soluta quia reprehenderit laboriosam, ratione, repudiandae
                dolor reiciendis voluptatum
              </p>
            </article>
          </div>
          <div className="w-6/6 m-auto mb-4  pb-2">
            <span className="icons m-auto md:m-1 mb-4 p-5 ">
              <FaAccessibleIcon />
            </span>
            <article className="mt-4">
              <h3 className="font-bold mb-4 text-xl">Open API</h3>
              <p className="mr-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
                eum. Soluta quia reprehenderit laboriosam, ratione, repudiandae
                dolor reiciendis voluptatum
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainbody_2;
