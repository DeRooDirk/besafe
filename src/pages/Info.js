import React from 'react';
import {  Link } from 'react-router-dom';
import Main from '../components/Main';
import GetFeedButton from '../components/GetFeedButton';
import InfoMiddel from '../components/InfoMiddel';

const Info = ({ children }) => {
  return (
    <>
     <Main></Main>
     <InfoMiddel></InfoMiddel>
     <GetFeedButton></GetFeedButton>
      <Link to="/Settings">INFO PÄGE TO SETTINGS</Link>
    </>
  );
};

export default Info;