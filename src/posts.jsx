import { useEffect, useState } from "react"
import Post from "./post"


export default function Posts(){
    const [posts,setPosts]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[]);
    const handleCount = ()=>{
        newPost = posts + 1;
        setPosts(newPost)
    }

    return(
      
        <div style={{border:"2px solid red"}}>
          
            <h3>Post:{posts.length}</h3>
            <button onClick={handleCount}>Count</button>
            {
                posts.map(data=> <Post name={data}></Post>)
            }
                
        </div>
    )
}