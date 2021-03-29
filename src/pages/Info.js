import React from "react";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import GetStartedButton from "../components/GoToSettingsButton";
import InfoMiddel from "../components/InfoMiddel";

const Info = ({ children }) => {
  return (
    <>
      <Main></Main>
      <InfoMiddel></InfoMiddel>
      <GetStartedButton></GetStartedButton>
      <Link to="/Settings"> TO SETTINGS</Link>
    </>
  );
};

export default Info;
