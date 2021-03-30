import React from 'react';
import AlertPost from '../components/AlertPost';
import style from "../module/Alert.module.css";
const ListPost = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <>
      {repos.map((repo) => {
        return (
          <div className={style.wrap}>
            <AlertPost data={repo}/> 
          </div>        
        );
      })}
    </>
  );
};
export default ListPost;