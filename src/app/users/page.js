import Users from '@/Components/User/Users.jsx';
import React from 'react';
import style from './Users.module.css'
const UserPage = () => {
    return (
        <div>
            <h2 className={style.sectionTitle} >The users</h2>
            <Users/>
        </div>
    );
};

export default UserPage;