import React from "react";
import style from "../module/Settings.module.css";
import GetFeedButton from "../components/GetFeedButton";
const Settings = () => {
  return (
    <>
    <div className={style.bigWrap}>
      <div className={style.wrap}>
        <div className={style.dirk}>
          <p className = {style.feedbtn}> Family button </p>
        </div>
        <div className={style.dirk}>
          <p className = {style.feedbtn}>Geo location Button</p>
        </div>
        <div className={style.dirk}>
          <p className = {style.feedbtn}>Police number button </p>
        </div>
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
