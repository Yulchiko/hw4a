import React from 'react';
import css from '../UserComponent/UserComponent.module.css';


export const PostComponent = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div className={css.details}>
            <div>id: {id} </div>
            <div>userId:{userId}</div>
            <div>title: {title}</div>
            <div>body:{body}</div>

        </div>
    );
};

