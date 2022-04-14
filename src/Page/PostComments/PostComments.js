import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostService} from "../../Service";
import {CommentComponent} from "../../Components";

export const PostComment=()=> {
    const {id: postId} = useParams();
    let [comments, setComments] = useState([]);

    useEffect(() => {
       PostService.getByIdPosPost(postId).then(({data}) => setComments(data));
    }, [postId]);

    return (
        <div>
            <h4>POSTS COMMENTS</h4>
            {
                comments && comments.map(comment => <CommentComponent key={comment.id} name={comment.name} comment={comment}/>)
            }
        </div>
    );
}