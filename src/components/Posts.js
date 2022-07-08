import React, { useState } from 'react';
import '../styles/Post.css';
import axios from 'axios';
import uuid from 'react-uuid';

const Posts = () => {
    const [post, setPost] = useState([])

    function makePost(){
        const postFormat =   {
            "id": uuid() ,
            "title": post,
            "author": "typicode"
          }
        if(post.length > 0){
            axios.post('http://localhost:3000/posts', postFormat)
            .then(() => {
                alert('Post Made')
            })
        }else{
            alert('Please make a post')
        }
        const input = document.getElementById('input');
        input.value = '';
    }

  return (
    <div>
      <h1>Posts</h1>
      <form >
        <input type="text" placeholder='new post' id='input' onChange={(e) => setPost(e.target.value)}/>
        <input type='button' value='Post' id='post-button' onClick={makePost} />
      </form>
    </div>
  )
}

export default Posts
