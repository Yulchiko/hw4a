import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {UserService} from "../../Service";
import { UserComponent} from "../../Components";

export const UserDetails = () => {

    const {id}=useParams();
    const [user, setUser]=useState(null);


    useEffect(()=>{
                 UserService.getByIdUser(id).then(({data})=>setUser(data))
         },[id])
    return (
        <div>
            {user && <UserComponent user={user}/>}

            <Link to="posts">
                <button>users posts</button>
            </Link>
            <Outlet/>
        </div>
    );
};

