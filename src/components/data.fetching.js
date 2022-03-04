import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Datafet(){
    const [posts,setPost]=useState({})
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)

    const setIdonClick=()=>{
        setIdFromButtonClick(id)
    }

    // const ids=(e)=>{
    //     setId(e.target.value)
    // }
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        console.log(res)
        setPost(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[idFromButtonClick])

  return (

    <div>hhh
        <input onChange={e=>{setId(e.target.value)}} value={id}/>
        <button onClick={setIdonClick}>click to set the id</button>
        {posts.title}
    </div>
  )
}
