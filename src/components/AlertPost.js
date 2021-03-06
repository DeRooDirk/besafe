import React from "react";
import style from "../module/Alert.module.css";

const AlertPost = ({data}) => {   
  return (
    <>
      <div className={style.dirk}>
          <div className={style.left}>
              <div className={style.circle}></div>
          </div>
          <div className={style.right}>
              <p> {data.title} </p>
              <p> {data.content} </p>
              <p> Dirk </p>
          </div>            
      </div>               
    </>   
  );
};

export default AlertPost;
