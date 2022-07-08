import React from 'react';
import axios from 'axios';


const Delete = ({ id }) => {
   function deletePost(){
    if(window.confirm ('Are you sure?')){
        axios.delete(`http://localhost:3000/posts/${id}`)
        .then(() => {
            alert('Post Deleted')
        })
    }else{
        return
    }
  


   }

  return (

        <button onClick={deletePost}>
            Delete Post
        </button>
  )
}

export default Delete