import React from 'react';
import {  Link } from 'react-router-dom';
import AlertPost from '../components/AlertPost';

const Feed =({children}) =>{
  return(
      <>     
       <AlertPost></AlertPost>
       <Link to="/Home">TO HOME PAGE </Link> 
      </>
  )
}

export default Feed;