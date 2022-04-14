import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {UserService} from "../../Service";
import User from "../../Components/User/User";


 export const UserPage = () => {
    const [users, setUsers]=useState([])

    useEffect(()=>{
        UserService.getAllUser().then(({data})=>setUsers(data))
    },[])

     return (
        <div style={{display:'flex', column:'50px'}}>
            <div style={{margin:'50px'}}><Outlet/></div>
            <div >{users.map((user)=><User key={user.id} user={user}/>)}</div>
        </div>
    );
};

