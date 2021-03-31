import React from "react";
import style from "../module/Alert.module.css";
import FeedsafeButton from "../components/FeedsafeButton";
import FeedAlertButton from "../components/FeedAlertButton";
import {  Link } from 'react-router-dom';

const AlertPost = ({data}) => {   
  return (
    <>
      <div className={style.dirk} key={data}>
          <div className={style.left}>
              <div className={style.circle}></div>
          </div>
          <div className={style.right}>
              <p> {data.title} </p>
              <p> {data.body} </p>
              <p> Dirk </p>
          </div>            
      </div>               
    </>   
  );
};

export default AlertPost;
