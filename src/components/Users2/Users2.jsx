import React, { use } from 'react';

const Users2 = ({users2Promise}) => {

    const users = use(users2Promise);
    console.log('users to suspanse data',users)
    return (
        <div>
            <h2>This is Users2</h2>
        </div>
    );
};

export default Users2;