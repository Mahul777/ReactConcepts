// // Importing necessary hooks and UserContext from the context
// import React, { useContext } from 'react';
// import UserContext from '../context/UserContext';

// // Defining the Profile functional component
// function Profile() {
//     // Using useContext to access the user value from UserContext
//     const { user } = useContext(UserContext);

//     // If there is no user (i.e., user is null or undefined), render a login prompt
//     if (!user) return <div>Please login</div>;

//     // If a user exists, render a welcome message with the user's username
//     return <div>Welcome {user.username}</div>;
// }

// // Exporting the Profile component for use in other parts of the application
// export default Profile;



// Importing necessary hooks and UserContext from the context
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

// Defining the Profile functional component
function Profile() {
    // Using useContext to access the user object from UserContext
    const { user } = useContext(UserContext);

    // If there is no user (i.e., user is null or undefined), render a prompt to log in
    if (!user) return <div>Please login</div>;

    // If a user exists, render a welcome message with the user's username
    return <div>Welcome {user.username}</div>;
}

// Exporting the Profile component for use in other parts of the application
export default Profile;
