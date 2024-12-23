// import React, { useState } from "react";
// import UserContext from './UserContext';

// // This functional component uses 'children' as a prop to wrap child components
// const UserContextProvider = ({ children }) => {
//     // Initialize user state with an empty object
//     const [user, setUser] = useState({});

//     // Return the UserContext.Provider wrapping the children
//     return (
//         // Using UserContext.Provider to share the context values (user and setUser)
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}  // Render any child components wrapped by this provider
//         </UserContext.Provider>
//     );
// }

// export default UserContextProvider;

// Importing React library to use its features, including hooks and context
import React from "react";
// Importing the UserContext created in another file
import UserContext from "./UserContext";

// Defining a functional component called UserContextProvider
const UserContextProvider = ({ children }) => {
    // Using React's useState hook to create a state variable 'user' initialized to null
    const [user, setUser] = React.useState(null);

    // Returning the UserContext.Provider component to share the user state
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}  // Rendering any child components wrapped in this provider
        </UserContext.Provider>
    );
}

// Exporting the UserContextProvider component for use in other parts of the application
export default UserContextProvider;

