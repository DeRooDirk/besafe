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
 

const AlertPost = () => {    
    return (
        <div className={style.bigWrap}>
            <div className={style.wrap}>
                <div className={style.inputWrap}>      
                    <input type="text" id="text" name='text' placeholder="Talk" />
                </div>
                <div className={style.buttonWrap}>
                    <button>Safe </button>
                    <button>Alert </button>
                </div>
                <div class= 'dirk'>
                    <div className={style.left}>
                        <div className={style.circle}></div>
                    </div>
                    <div className={style.right}>
                        <p>  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego     ejgoîejugoIEGO   Dirk ergego ejgoîejugoIEGO </p>
                        <p> Dirk </p>
                        <p> Dirk </p>
                    </div>            
                </div>
                <div class= 'dirk'>
                    <div className={style.left}>
                        <div className={style.circle}></div>
                    </div>
                    <div className={style.right}>
                        <p>  Dirk ergego ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO  Dirk ergego                          ejgoîejugoIEGO  Dirk ergego ejgoîejugoIEGO </p>
                        <p> Dirk </p>
                        <p> Dirk </p>
                    </div>            
                </div>
                <div class= 'dirks'>
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
            </div>
            <div className={style.buttonsSettinsWrap}>
                <span>  eIcon</span>
                <span>  icon</span>
                <span>  efef</span>
                <span>  efef</span>
            </div>
            <div className={style.btn}>
           <button>Safe </button>
        </div> 
        </div>
    );
};

export default AlertPost;