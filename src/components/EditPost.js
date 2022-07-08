import React, { useState } from 'react';
import axios from 'axios';

const EditPost = ({ id }) => {

    const [editText, setEditText] = useState('');

    const Text = (e) => {
        setEditText(e.target.value);
    }

    function editPost(){
       const newPostTitle = {
        title: editText
       }
       axios.patch(`http://localhost:3000/posts/${id}`, newPostTitle)
       .then(() => alert('Post Edited'))
       setEditText('')
    }

  return (
    <>
        <input type="text" value={editText} onChange={Text} />
        <button id='Edit-button' onClick={editPost}>Edit Post</button>
    </>
  )
}

export default EditPost