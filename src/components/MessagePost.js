import React from "react";
import style from "../module/Alert.module.css";
import {  Link } from 'react-router-dom';

const MessagePost = ({data}) => {   
  return (
    <>
      <div className={style.dirks}>
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

export default MessagePost;
