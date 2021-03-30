import React from "react";
import style from "../module/Settings.module.css";
import GetFeedButton from "../components/GetFeedButton";
import FamilyButton from "../components/FamilyButton";
import PoliceButton from "../components/PoliceButton";
import GeolocationButton from "../components/GeolocationButton";
const Settings = () => {
  return (
    <>
      <div className={style.bigWrap}>
     
        <div className={style.wrap}>
          <FamilyButton></FamilyButton>
          <PoliceButton></PoliceButton>
          <GeolocationButton></GeolocationButton>
        </div>
        <div className={style.buttonsSettinsWrap}>
          <span> eIcon</span>
          <span> icon</span>
          <span> efef</span>
          <span> efef</span>
          
        </div>
        
      </div>
      <GetFeedButton></GetFeedButton>
    </>
  );
};
export default Settings;
