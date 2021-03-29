import React from "react";
import style from "../module/Alert.module.css";
import GoHomeButton from "../components/GoHomeButton";
import FeedsafeButton from "../components/FeedsafeButton";
import FeedAlertButton from "../components/FeedAlertButton";

const AlertPost = () => {
  return (
    <>
      <div className={style.bigWrap}>
        <div className={style.inputWrap}>
          <input type="text" maxlength="50" id="text" name="text" placeholder="Message max 50 char"/>
        </div>
        <div className={style.buttonWrap}>
          <FeedsafeButton></FeedsafeButton>
          <FeedAlertButton></FeedAlertButton>
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
              <p>Dirk</p>
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
              <p>
                
                I was gonna take the time to sit down and write you a little
                letter. But I thought a song
              </p>
              <p> Dirk </p>
            </div>
          </div>
          <div className={style.dirks}>
            <div className={style.left}>
              <div className={style.circle}></div>
            </div>
            <div className={style.right}>
              <p> Dirk </p>
              <p>
                
                I was gonna take the time to sit down and write you a little
                letter. But I thought a song
              </p>
              <p> Dirk </p>
            </div>
          </div>
          <div className={style.dirks}>
            <div className={style.left}>
              <div className={style.circle}></div>
            </div>
            <div className={style.right}>
              <p> Dirk </p>
              <p>                
                I was gonna take the time to sit down and write you a little
                letter. But I thought a song
              </p>
              <p> Dirk </p>
            </div>
          </div>
          <div className={style.dirks}>
            <div className={style.left}>
              <div className={style.circle}></div>
            </div>
            <div className={style.right}>
              <p> Dirk </p>
              <p>                
                I was gonna take the time to sit down and write you a little
                letter. But I thought a song
              </p>
              <p> Dirk </p>
            </div>
          </div>
          <div className={style.dirks}>
            <div className={style.left}>
              <div className={style.circle}></div>
            </div>
            <div className={style.right}>
              <p> Dirk </p>
              <p>              
                I was gonna take the time to sit down and write you a little
                letter. But I thought a song
              </p>
              <p> Dirk </p>
            </div>
          </div>
          <div className={style.dirks}>
            <div className={style.left}>
              <div className={style.circle}></div>
            </div>
            <div className={style.right}>
              <p> Dirk </p>
              <p>                
                I was gonna take the time to sit down and write you a little
                letter. But I thought a song
              </p>
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
