import React from 'react';

import {Button} from "../Button/Button";
import css from "../../Page/UserPage/userPage.module.css";


const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={css.userPage}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <Button to={`${id}`} state={user}>get Details</Button>
        </div>
    );
};

export default User;