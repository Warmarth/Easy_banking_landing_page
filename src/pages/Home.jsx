import React from "react";
import Header from "../component/Header";
import Body from "../component/Mainbody";
import Body2 from "../component/MainBody_2";
import Body3 from "../component/Mainbody_3";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <div className=" App">
      <Header/>
      <Body />
      <Body2 />
      <Body3 />
      <Footer />
    </div>
  );
}

export default HomePage;
