import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import ListPost from '../components/ListPost';
import withListLoading from '../components/withListLoading';
import GoHomeButton from "../components/GoHomeButton";
import FeedsafeButton from "../components/FeedsafeButton";
import FeedAlertButton from "../components/FeedAlertButton";
import style from "../module/Alert.module.css";

const Feed =({children}) =>{
  const ListLoading = withListLoading(ListPost);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  }); 

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://jsonplaceholder.typicode.com/users/1/posts`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

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
  )
}

export default Feed;