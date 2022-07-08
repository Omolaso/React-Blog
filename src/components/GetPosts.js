import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Post.css';
import EditPost from './EditPost';
import Delete from './Delete';


const GetPosts = () => {
    const [Get, setGet] = useState([])

    function getPost(){
        axios.get('http://localhost:3000/posts')
        .then((res) => {
            setGet(res.data)
        })
    }



    useEffect(() => {
        getPost()
    }, [Get, setGet]);

    if(Get.length === 0){
        return 'Posts are empty';
    }


  return (
    <div>
        <h3>Posts Made</h3>
        <section id='show'>
            {
                Get.map(item => (
                    <div  key={item.id} id='section'>
                        <p id='display'>{item.title}</p>
                        <EditPost id= {item.id}/> <Delete id= {item.id}/>
                        
                    </div>
                ))
            }
        </section>
    </div>
  )
}

export default GetPosts