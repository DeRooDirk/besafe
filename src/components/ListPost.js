import React from 'react';
import AlertPost from '../components/AlertPost';
<<<<<<< HEAD
import style from "../module/Alert.module.css";
=======
>>>>>>> 6bbb7c3f9b503ea345d80b8b95e58fd6e46d6fe3
const ListPost = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
<<<<<<< HEAD
    <>
      {repos.map((repo) => {
        return (
          <div className={style.wrap}>
            <AlertPost data={repo}/> 
          </div>        
        );
      })}
    </>
=======
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <AlertPost data={repo}></AlertPost>         
        );
      })}
    </ul>
>>>>>>> 6bbb7c3f9b503ea345d80b8b95e58fd6e46d6fe3
  );
};
export default ListPost;