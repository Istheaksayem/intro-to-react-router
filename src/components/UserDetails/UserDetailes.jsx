import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetailes = () => {
    const user = useLoaderData();
    const { website, name } = user;
    return (
        <div>
            <h2>User Details Here</h2>
            <h5>Name:{name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetailes;