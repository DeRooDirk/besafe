import React from 'react';
import {  Link } from 'react-router-dom';
import AlertPost from '../components/AlertPost';

const Feed =({children}) =>{
  return(
      <>
       <Link to="/Home">Flipperkast Flipperkast Flipperkast TO HOME PAGE </Link> 
       <AlertPost></AlertPost>

      </>
  )
}

export default Feed;