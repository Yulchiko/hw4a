import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {PostService} from "../../Service";

import {Post} from "../../Components/Post/Post";

export const PostPage = () => {
    const [posts, setPosts]=useState([])

    useEffect(()=>{
        PostService.getAllPos().then(({data})=>setPosts(data))
    },[])

    return (
        <div style={{display:'flex'}}>
            <div style={{margin:'50px'}} ><Outlet/></div>
            <div >{posts.map((post)=><Post key={post.id} post={post}/>)}</div>
        </div>
    );
};

