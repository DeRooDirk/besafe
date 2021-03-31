import React from 'react';
import AlertPost from '../components/AlertPost';
const ListPost = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <>
      {repos.map((repo) => {
        return (        
            <AlertPost data={repo}/>            
        );
      })}
    </>
  );
};
export default ListPost;