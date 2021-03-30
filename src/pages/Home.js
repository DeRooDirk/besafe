import React from "react";

import Main from "../components/Main";
import MainMiddel from "../components/MainMiddel";
import GetMoreInfoButton from "../components/GetMoreInfoButton";

const Home = ({ children }) => {
  return (
    <>
      <Main></Main>
      <MainMiddel></MainMiddel>
      <GetMoreInfoButton></GetMoreInfoButton>
      
    </>
  );
};

export default Home;
