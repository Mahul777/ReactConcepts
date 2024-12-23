

import React, { createContext, useContext } from "react";
// Creating a new context object for user-related data
// Exporting the UserContext so it can be used in other components
// Create a ThemeContext with default values.
// This context will hold the current theme mode and functions to change the theme.
export const ThemeContext = createContext({
    themeMode: "light",  // Default theme mode is set to "light".
    darkTheme: () => {},  // Placeholder function for switching to dark theme.
    lightTheme: () => {}, // Placeholder function for switching to light theme.
});

//Now as we create ThemeContext it will give u provider which provide the data and treat ThemeContext as global variable and can access all the status 
// Export the Provider component for the ThemeContext.
// This will be used to wrap components that need access to the theme context.
export const ThemeProvider = ThemeContext.Provider

//custom hook
export default function useTheme()
{
    // Call useContext with ThemeContext to access the current theme values.
    return useContext(ThemeContext);
}

// The code creates a ThemeContext to manage theme-related state (like light and dark modes) in a React application.
// It provides a ThemeProvider component to wrap around parts of the app that need access to the theme.
// The useTheme hook allows easy access to the theme context within functional components.


