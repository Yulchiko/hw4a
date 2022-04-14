import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {UserService} from "../../Service";
import {PostUserComponent} from "../../Components";

export const UserPosts=()=> {
        const {id: userId} = useParams();
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        UserService.getByIdUserPost(userId).then(({data}) => setPosts(data));
    }, [userId]);

    return (
        <div>
            <h4>USER POSTS</h4>
            {
              posts && posts.map(post => <PostUserComponent key={post.id} title={post.title} post={post}/>)
            }
        </div>
    );
}