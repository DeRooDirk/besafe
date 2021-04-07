import React from "react";
import style from "../module/Settings.module.css";
import FamilyButton from "../components/FamilyButton";
import PoliceButton from "../components/PoliceButton";
import GeolocationButton from "../components/GeolocationButton";
import { Link } from "react-router-dom";
const Settings = () => {
  return (
    <>
      <div className={style.superWrap}>
        <div className={style.bigWrap}>
          <div className={style.wrap}>
            <Link to="/FamilyTele">
              <FamilyButton></FamilyButton>
            </Link>
            <FamilyButton></FamilyButton>
            <PoliceButton></PoliceButton>
            <Link to="/GeoLocation">
              <GeolocationButton> </GeolocationButton>
            </Link>
          </div>
          <div className={style.buttonsSettinsWrap}>
            <Link to="/Settings">
              <span className="btn btn-set">
                <i className="fa fa-wrench"></i>
              </span>
            </Link>
            <Link to="/Home">
              <span className="btn btn-set">
                <i className="fa fa-home"></i>
              </span>
            </Link>
            <Link to="/Feed">
              <span className="btn btn-set">
                <i class="fa fa-comments"></i>
              </span>
            </Link>
            <Link to="/Home">
              <span className="btn btn-set">
                <i class="fa fa-phone"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
