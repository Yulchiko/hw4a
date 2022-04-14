import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {PostService} from "../../Service";
import {PostComponent} from "../../Components";

export const PoseDetails = () => {

        const {id}=useParams();
    const [post, setPost]=useState(null);


    useEffect(()=>{
            PostService.getByIdPos(id).then(({data})=>setPost(data))
           },[id])

    return (
        <div>
            {post && <PostComponent post={post}/>}

            <Link to="comments">
                <button> posts comments</button>
            </Link>
            <Outlet/>
        </div>
    );
};
