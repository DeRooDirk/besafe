import React from 'react';
import AlertPost from '../components/AlertPost';
import {  Link } from 'react-router-dom';

const Settings = ({ children }) => {
  return (
    <>
    <AlertPost></AlertPost>
      <Link to="/Feed">SETTINGS TO FEED</Link>
    </>
  );
};

export default Settings;