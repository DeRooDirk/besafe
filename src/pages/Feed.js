import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';

import MessagePost from '../components/MessagePost';
import ListPost from '../components/ListPost';
import withListLoading from '../components/withListLoading';
import style from '../module/Alert.module.css';

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
  )
}

export default Feed;