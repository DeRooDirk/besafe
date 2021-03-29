import React from "react";
import style from "../module/Alert.module.css";
import GoHomeButton from '../components/GoHomeButton';

const AlertPost = () => {
  return (
    <>
    <div className={style.bigWrap}>
    <div className={style.inputWrap}>
          <input type="text" maxlength="25" id="text" name="text" placeholder="Talk" />
        </div>
    <div className={style.buttonWrap}>
          <button className ={style.feedbtnS}>Safe </button>
          <button className ={style.feedbtnA}>Alert </button>
        
        </div>
      <div className={style.wrap}>
       
       
        <div className={style.dirk}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p>Louisa Veron</p>
            <p> Hellllpppp </p>
            <p> Dirk </p>
          </div>
        </div>
        <div className={style.dirk}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p>             
              Dirk 
            </p>
            <p> Dirk </p>
            <p> Dirk </p>
          </div>
        </div>
        <div className={style.dirks}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p> Dirk </p>
            <p> I was gonna take the time to sit down and write you a little letter. But I thought a song    </p>
            <p> Dirk </p>
          </div>
        </div>
        <div className={style.dirks}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p> Dirk </p>
            <p> I was gonna take the time to sit down and write you a little letter. But I thought a song    </p>
            <p> Dirk </p>
          </div>
        </div>
        <div className={style.dirks}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p> Dirk </p>
            <p> I was gonna take the time to sit down and write you a little letter. But I thought a song    </p>
            <p> Dirk </p>
          </div>
        </div>
        <div className={style.dirks}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p> Dirk </p>
            <p> I was gonna take the time to sit down and write you a little letter. But I thought a song    </p>
            <p> Dirk </p>
          </div>
        </div>
        <div className={style.dirks}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p> Dirk </p>
            <p> I was gonna take the time to sit down and write you a little letter. But I thought a song    </p>
            <p> Dirk </p>
          </div>
        </div>
        <div className={style.dirks}>
          <div className={style.left}>
            <div className={style.circle}></div>
          </div>
          <div className={style.right}>
            <p> Dirk </p>
            <p> I was gonna take the time to sit down and write you a little letter. But I thought a song    </p>
            <p> Dirk </p>
          </div>
        </div>
      </div>
      
      <div className={style.buttonsSettinsWrap}>
        <span> eIcon</span>
        <span> icon</span>
        <span> efef</span>
        <span> efef</span>
      </div>
   
    </div>
    <GoHomeButton></GoHomeButton>
    </>
  );
};

export default AlertPost;
