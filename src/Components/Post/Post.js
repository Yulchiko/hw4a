import React from 'react';

import {Button} from "../Button/Button";
import css from "../../Page/UserPage/userPage.module.css";

export const Post = ({post}) => {
    const {id, title}=post;
    return (
        <div className={css.userPage}>
            {id} - {title}
            <Button to={`${id}`} state={post}>get Details</Button>
        </div>
    );
};

