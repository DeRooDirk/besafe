import React from 'react';
import {  Link } from 'react-router-dom';
import SettingsRight from '../components/SettingsRight';


const Settings = ({ children }) => {
  return (
    <>
    <SettingsRight></SettingsRight>
      <Link to="/Feed">SETTINGS TO FEED</Link>
    </>
  );
};

export default Settings;