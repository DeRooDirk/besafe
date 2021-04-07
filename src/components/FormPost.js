import React, { useState } from 'react';
import axios from 'axios';
import style from "../module/Alert.module.css";

const FormPost = (props) => {   
    const [newPost, setNewPost] = useState({    
        userId: 1,
        title: '',
        content: '',
        type: 'Message',    
      });

      const handleTitleChange = (value) => {
        setNewPost({ userId: 1, title: value, content: newPost.content, type:'Message'});   
      }
    
      const handleContentChange = (value) => {
        setNewPost({ userId: 1, title: newPost.title, content: value, type:'Message'});   
      }
    
     const handleSubmit = (event) => {
        event.preventDefault();    
        setNewPost({ userId: 1, title: newPost.title, content: newPost.content, type:'Message'});  // set State  
        console.log(newPost);
        saveMessagePosts(newPost);   
        props.onClose();
      }; 
      
  
    const saveMessagePosts = async (post) => {
        try {
            
            const apiUrl = `http://127.0.0.1:8000/api/posts`; 
            const response = await axios.post(apiUrl, post);       
    
            console.log(response);
            
            } catch (err) {
            console.error(err.message);
            }
        };
  

  return (
    <>
      <div> 
           <form id="addPost" onSubmit={handleSubmit}>
                <label>Title : </label>
                <div className={style.inputWrap}>
                  <input type="text" id="title" name="title" onChange={event => handleTitleChange(event.target.value)} value={newPost.title} />
                </div>
                <label>Message : </label>
                <div className={style.inputWrap}>
                  <textarea onChange={event => handleContentChange(event.target.value)} value={newPost.content} />
                </div>
                <button type="submit">Submit</button>
            </form>
         </div>      
    </>   
  );
}

export default FormPost;
