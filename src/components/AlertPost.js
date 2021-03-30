import React from "react";
import IconHeaderButton from './IconButton';
import style from "../module/Alert.module.css";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
 

const AlertPost = ({data}) => {   
    //const {repo} = {props};
  
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