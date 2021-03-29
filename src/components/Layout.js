import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <div className="Left">
        <Header />
        <Footer />
      </div>
      <div className="Right">{props.children}</div>
    </>
  );
};

export default Layout;
