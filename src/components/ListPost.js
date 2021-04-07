import React from 'react';
import AlertPost from '../components/AlertPost';
import style from "../module/Alert.module.css";
import MessagePost from '../components/MessagePost';
/*
const ListPost = (props) => {

  const components = {
    Alert: AlertPost,
    Message: MessagePost
  };
 
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <>
      {repos.map((repo) => {
        const NewPost = components[repo.type];
        return (           
          <NewPost data={repo} />                     
        );
      })}
    </>
*/


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
    

    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <AlertPost data={repo}></AlertPost>         
        );
      })}
    </ul>
    </>
  );
};
export default ListPost;