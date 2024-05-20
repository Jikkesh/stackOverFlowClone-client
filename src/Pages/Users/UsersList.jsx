import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import User from './User'
import './Users.css'
import { fetchAllUsers } from '../../actions/users'

const UsersList = () => {
    const users = useSelector((state) => state.usersReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    return (
        <div className='user-list-container'>
            {
                users.map((user) => (
                    <User user={user} key={user?._id} />
                ))
            }
        </div>
    )
}

export default UsersList
