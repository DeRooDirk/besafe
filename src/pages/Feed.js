import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import ListPost from '../components/ListPost';
import withListLoading from '../components/withListLoading';
import GoHomeButton from "../components/GoHomeButton";
import FeedsafeButton from "../components/FeedsafeButton";
import FeedAlertButton from "../components/FeedAlertButton";
import style from "../module/Alert.module.css";
=======

import MessagePost from '../components/MessagePost';
import ListPost from '../components/ListPost';
import withListLoading from '../components/withListLoading';
import style from '../module/Alert.module.css';
>>>>>>> 6bbb7c3f9b503ea345d80b8b95e58fd6e46d6fe3

const Feed =({children}) =>{
  const ListLoading = withListLoading(ListPost);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
<<<<<<< HEAD
  }); 
=======
  });
>>>>>>> 6bbb7c3f9b503ea345d80b8b95e58fd6e46d6fe3

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/users/1/posts`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
<<<<<<< HEAD

  return(
      <> 
        <div className={style.bigWrap}>
          <div className={style.inputWrap}>
            <input type="text" maxlength="50" id="text" name="text" placeholder="Message max 50 char"/>
          </div>
          <div className={style.buttonWrap}>
            <FeedsafeButton></FeedsafeButton>
            <FeedAlertButton></FeedAlertButton>
          </div>    
          <ListLoading isLoading={appState.loading} repos={appState.repos} />       
          <div className={style.buttonsSettinsWrap}>
              <span> eIcon</span>
              <span> icon</span>
              <span> efef</span>
              <span> efef</span>
          </div>
        </div>
        <GoHomeButton></GoHomeButton>
        <Link to="/Home">TO HOME PAGE </Link> 
    </> 
=======


  return(
      <>
      
        <Link to="/Home">Flipperkast Flipperkast Flipperkast TO HOME PAGE </Link> 
        <div className={style.bigWrap}>
              <div className={style.wrap}>
                  <div className={style.inputWrap}>      
                      <input type="text" id="text" name='text' placeholder="Talk" />
                  </div>
                  <div className={style.buttonWrap}>
                      <button>Safe </button>
                      <button>Alert </button>
                  </div>
                  <ListLoading isLoading={appState.loading} repos={appState.repos} />

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
      </>
>>>>>>> 6bbb7c3f9b503ea345d80b8b95e58fd6e46d6fe3
  )
}

export default Feed;