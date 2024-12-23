// // The useContext hook in React is used for accessing context values in functional components
// import { useState, useContext } from "react";
// import UserContext from "../context/UserContext";
// import React from "react";

// function Login() {
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");
//   //how to fetch value from UserContext(component) here we use useContext hook
//   const { setUser } = useContext(UserContext);

//   // Function to handle form submission
//   const handleEvent = (e) => 
//     {
//     e.preventDefault();
//     setUser({ username, password });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         //the user-name value is controlled by username
//         value={username}
//         onChange={(e) => {
//           setusername(e.target.value);
//         }} //if field is got changed
//         placeholder="Username"
//       />

//       <input
//         type="text"
//         value={password}
//         onChange={(e) => {
//           setpassword(e.target.value);
//         }}
//         placeholder="Password"
//       />

//       <button onClick={handleEvent}>Submit</button>
//     </div>
//   );
// }

// export default Login;


// Importing necessary hooks and UserContext from the context
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

// Defining the Login functional component
function Login() {
    // Using useState to manage local state for username and password
    const [username, setUsername] = useState(''); // State for username input
    const [password, setPassword] = useState(''); // State for password input

    // Using useContext to access the setUser function from UserContext
    const { setUser } = useContext(UserContext);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing the default form submission behavior
        // Updating the user state in context with the entered username and password
        setUser({ username, password });
    };

    // Rendering the login form
    return (
        <div>
            <h2>Login</h2>
            {/* Input field for username */}
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Updating username state on change
                placeholder='username'
            />
            {" "} {/* Adding space between input fields */}
            {/* Input field for password */}
            <input
                type='password' // Changed to 'password' type for better security
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Updating password state on change
                placeholder='password'
            />
            {/* Submit button that triggers handleSubmit on click */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

// Exporting the Login component for use in other parts of the application
export default Login;

