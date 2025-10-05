import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const userStyle = {
    border: '2px solid yellow',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px'
}

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const [visitedHome, setVisitedHome] = useState(false)
    const location =useLocation();
    console.log(location)
    const [showInfo, setShowInfo] = useState(false);
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

 if(visitedHome){
    return <Navigate to="/"></Navigate>

 }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email:{email}</p>
            <p><small>Phone:{phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'show'} info</button>
            {
                showInfo && <Suspense fallback={<span>loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={() => setVisitedHome(true)}>Visited Home</button>
        </div>
    );
};

export default User;