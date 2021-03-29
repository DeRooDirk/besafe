import React from 'react';
import AlertPost from '../components/AlertPost';
const ListPost = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <AlertPost data={repo}></AlertPost>         
        );
      })}
    </ul>
  );
};
export default ListPost;