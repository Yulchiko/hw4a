import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Layout.module.css'

export const Layout = () => {
    return (
        <div className={css.layout}>
           <div className={css.users}> <NavLink to="/users">Users</NavLink> &nbsp;
            <NavLink to="/posts">Posts</NavLink></div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

