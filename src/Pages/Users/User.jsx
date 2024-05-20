import React from 'react';
import { Link } from 'react-router-dom';

import './Users.css';

const User = ({ user }) => {
    if(!User){
        console.log("user didn;t got any data from server");
    }else{
        console.log(`User got the Data but something wrong to display Data: ${user._id} and ${user.name}`);
    }
    return (
        <Link to={`/Users/${user._id}`} className='user-profile-link'>
            <h5>{ user.name }</h5>
        </Link>
    )
}
export default User;
