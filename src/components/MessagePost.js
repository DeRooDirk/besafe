import React from "react";
import IconHeaderButton from './IconButton';
import style from '../module/Alert.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
 

const MessagePost = () => {    
    return (
        <> 
            <div className={style.dirks}>
                <div className={style.left}>
                    <div className={style.circle}>           
                    </div>
                </div>
                <div className={style.right}>
                    <p>  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego  ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  </p>
                    <p> Dirk </p>
                    <p> Dirk </p>
                </div>            
            </div>
        </>        
    );
};

export default MessagePost;