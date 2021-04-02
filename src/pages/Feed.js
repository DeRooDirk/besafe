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
    const apiUrl = `http://127.0.0.1:8000/api/posts`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return(
    <>
      <div className={style.superWrap }>
        <div className={style.bigWrap}>
          <div className={style.inputWrap}>
            <input type="text" maxlength="50" id="text" name="text" placeholder="Message max 50 char"/>
          </div>
          <div className={style.buttonWrap}>
            <FeedsafeButton></FeedsafeButton>
            <FeedAlertButton></FeedAlertButton>
          </div>
          <div className={style.wrap}>
            <ListLoading isLoading={appState.loading} repos={appState.repos} /> 
          </div>
          <div className={style.buttonsSettinsWrap}>
            <Link to="/Settings"> <span className ="btn btn-set"><i className="fa fa-wrench"></i> </span></Link>
            <Link to="/Home">  <span className ="btn btn-set"> <i className="fa fa-home"></i></span></Link>
            <Link to="/Feed"> <span className ="btn btn-set"> <i class="fa fa-comments"></i></span> </Link>
            <Link to="/Home"> <span className ="btn btn-set"><i class="fa fa-phone"></i></span></Link>
          </div>
        </div>      
      </div>
    </>
  )
}

export default Feed;