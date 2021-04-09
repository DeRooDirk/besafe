import React, { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import ListPost from '../components/ListPost';
import withListLoading from '../components/withListLoading';
import GoHomeButton from "../components/GoHomeButton";
import style from "../module/Alert.module.css";
import FormPost from "../components/FormPost";

const FeedAlertButtonStyle = {
  backgroundColor: "red",
  fontSize: "1.75rem",
  letterSpacing: "2px",
  fontWeight: "400",
  padding: ".7rem 1.5rem",
  borderRadius: "10px",      
  outline: "none",
  margin: ".5rem",
  border :" 2px solid red",
};

const FeedsafeButtonStyle = {
  backgroundColor: "#6e7ec7",
  fontSize: "1.75rem",
  letterSpacing: "2px",
  fontWeight: "400",
  padding: ".7rem 1.5rem",
  borderRadius: "10px",
  border:"2px solid #39C4E5",
  outline: "none",
  margin: ".5rem",
};

const Feed =({children}) =>{
  const ListLoading = withListLoading(ListPost);
  const [posts, setPosts] = useState({
    loading: false,
    repos: null,
  });

  const [formState, setFormState] = useState({
    showForm: false,
   });

  const [newAlertPost, setnewAlertPost] = useState({    
    userId: 1,
    title: 'HELP',
    content: 'HELP',
    type: 'Alert',    
  });
 

    const postAlert = () => {     
      console.log('before api post alert');
      console.log(newAlertPost);
      saveMessagePosts(newAlertPost);    
    }
    
    const saveMessagePosts = async (post) => {
      try {
       
        const apiUrl = `http://127.0.0.1:8000/api/posts`; 
        const response = await axios.post(apiUrl, post);
        console.log(response);
        
        } catch (err) {
        console.error(err.message);
        }
    };

  
    useEffect(()=>{
      const getPosts = async () => {
        try {
         
          const apiUrl = `http://127.0.0.1:8000/api/posts`;
          const allPosts = await axios.get(apiUrl);
           
          setPosts({ loading: false, repos: allPosts.data });  // set State
          
          } catch (err) {
          console.error(err.message);
          }
      };  
  
      setPosts({ loading: true });
      getPosts();    
    },[setPosts, setFormState,setnewAlertPost]);

 /* const [addedPosts, setaddedPosts] = useState({
    id: null,
    userId: null,
    title: '',
    content: '',
    type: '',    
  });*/

  
  return(
    <>
      <div className={style.superWrap }>
        <div className={style.bigWrap}>
          <div className={style.inputWrap}>
            <input type="text" maxlength="50" id="text" name="text" placeholder="Message max 50 char"/>

          </div>
          <div className={style.buttonWrap}>
          <button className="btn btn-set" style={FeedsafeButtonStyle} onClick={() => setFormState({showForm: true}) }>
            Safe
          </button>
          <button className="btn btn-set" style={FeedAlertButtonStyle} onClick={postAlert}>
            Alert
          </button>
          </div>
          {formState.showForm ? <FormPost show={formState.showForm} onClose={() => setFormState({ showForm: false })} /> : null}
         
          <div className={style.wrap}>
          <ListLoading isLoading={posts.loading} repos={posts.repos} /> 
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