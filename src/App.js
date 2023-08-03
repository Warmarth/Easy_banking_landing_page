import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from "./pages/Home";
import Header from "./component/Header";
import Body from "./component/Mainbody";
import Body2 from "./component/MainBody_2";
import Body3 from "./component/Mainbody_3";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp";

function App() {
  return (
    // <Router>
    //   <div className=" App">
    //     <Route path="/" exact component={<HomePage />} />
    //   </div>
    // </Router>
    <div className=" App">
      <Header />
      <Body />
      <Body2 />
      <Body3 />
      <Footer />
      <SignUp />
    </div>
  );
}

export default App;
