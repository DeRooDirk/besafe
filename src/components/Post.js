import React from 'react';
import {  Link } from 'react-router-dom';
import Alert from './AlertPost';

const Post =({children}) =>{
  return(
      <>
       <Link to="/Home">Flipperkast Flipperkast Flipperkast TO HOME PAGE </Link> 
       <Alert></Alert>

      </>
  )
}

export default Post;