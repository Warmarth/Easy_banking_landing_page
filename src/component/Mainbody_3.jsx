import React from "react";
import Latest from "../Asset/img-3.jpg";
import Latest1 from "../Asset/img-4.jpg";
import Latest2 from "../Asset/img_2.jpg";
import Latest3 from "../Asset/img-1.jpg";
import "../App.css";

const Mainbody_3 = () => {
  return (
    <section>
      <div className="mb-20">
        <div className="mt-24 mb-10 py-2">
          <h2 className="text-5xl text-center capitalize">latest articles</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 transition gap-x-2">
          <div className="mb-6 p-2">
            <div className="px-6 ">
              <img src={Latest} alt="" className=" rounded-t-xl " />
            </div>
            <article className="pl-12 pt-6 mr-4 mb-4 ">
              <blockquote className="capitalize text-sm font-mono py-2 mb-1">
                by Hutton Robinson{""}
              </blockquote>
              <h1 className="font-bold ">
                Receive money in any curency with on fees
              </h1>
              <p className=" pt-2 mt-2">
                the world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </article>
          </div>
          <div className="mb-6 p-2">
            <div className="px-6">
              <img src={Latest1} alt="" className=" rounded-t-xl " />
            </div>
            <article className=" pl-12 pt-6 mr-4 mb-4 ">
              <blockquote className="capitalize text-sm font-mono py-2 mb-1">
                by claire Wilson{" "}
              </blockquote>
              <h1 className="font-bold ">
                Treat yourself without worrying about money
              </h1>
              <p className=" pt-2 mt-2">
                the world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </article>
          </div>
          <div className="mb-6 p-2">
            <div className="px-6">
              <img src={Latest2} alt="" className=" rounded-t-xl " />
            </div>
            <article className="pl-12 pt-6 mr-4 mb-4 ">
              <blockquote classNameNameName="capitalize text-sm font-mono py-2 mb-1">
                by Hutton Robinson{" "}
              </blockquote>
              <h1 className="font-bold ">
                Take your Easybank card wherever you go
              </h1>
              <p className=" pt-2 mt-2">
                the world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </article>
          </div>
          <div className="mb-6 p-2">
            <div className="px-6">
              <img src={Latest3} alt="" className=" rounded-t-xl " />
            </div>
            <article className="pl-12 pt-6 mr-4 mb-4 ">
              <blockquote className="capitalize text-sm font-mono py-2 mb-1">
                by Wilson Hutton{" "}
              </blockquote>
              <h1 className="font-bold ">
                Our invite-only Beta account are now live!
              </h1>
              <p className=" pt-2 mt-2">
                the world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainbody_3;
