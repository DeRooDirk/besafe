import React from 'react';
import {  Link } from 'react-router-dom';
import Main from '../components/Main';
import MainMiddel from "../components/MainMiddel";
import GetMoreInfoButton from "../components/GetMoreInfoButton";

const Home = ({ children }) => {
  return (
    <>
    <Main></Main>
    <MainMiddel></MainMiddel>
    <GetMoreInfoButton></GetMoreInfoButton>
    <Link to="/Info">HOME PAGE TO INFO PAGE</Link>
    </>
  );
};

export default Home;