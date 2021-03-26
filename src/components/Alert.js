import React from "react";
import ReactDOM from 'react-dom';
import IconHeaderButton from '../components/IconButton';
import style from '../module/Alert.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
 

const Alert = () => {    
    return (
        <div className={style.wrap}>
            <div className={style.dirk}>
                <div className={style.left}>
                    <div className={style.circle}></div>
                </div>
                <div className={style.right}>
                    <p>  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO</p> 
                    <p> Dirk </p>
                    <p> Dirk </p>
                </div>            
            </div>
            <div className={style.dirk}>
                <div className={style.left}>
                    <div className={style.circle}></div>
                </div>
                <div className={style.right}>
                    <p>  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO </p>
                    <p> Dirk </p>
                    <p> Dirk </p>
                </div>            
            </div>
            <div className={style.dirk}>
                <div className={style.left}>
                    <div className={style.circle}></div>
                </div>
                <div className={style.right}>
                    <p>  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO </p>
                    <p> Dirk </p>
                    <p> Dirk </p>
                </div>            
            </div>
        </div>
        );
};

export default Alert;