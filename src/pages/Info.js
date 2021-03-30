import React from "react";

import Main from "../components/Main";
import GetStartedButton from "../components/GoToSettingsButton";
import InfoMiddel from "../components/InfoMiddel";

const Info = ({ children }) => {
  return (
    <>
      <Main></Main>
      <InfoMiddel></InfoMiddel>
      <GetStartedButton></GetStartedButton>
      
    </>
  );
};

export default Info;
