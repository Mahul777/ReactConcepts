// Import React and the custom useTheme hook to access theme context
import React from 'react';
import useTheme from '../context/Theme';

// Define the ThemeBtn functional component
export default function ThemeBtn() {
    // Destructure themeMode, lightTheme, and darkTheme from useTheme hook
    const { themeMode, lightTheme, darkTheme } = useTheme();

    // Function to handle changes in the toggle button
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked; // Get the checked status of the checkbox
        if (darkModeStatus) {
            darkTheme(); // Call darkTheme function if checkbox is checked
        } else {
            lightTheme(); // Call lightTheme function if checkbox is unchecked
        }
    };

    return (
        // Label element to wrap the toggle switch
        <label className="relative inline-flex items-center cursor-pointer">
            {/* Hidden checkbox input to handle toggle state */}
            <input
                type="checkbox"
                value=""
                className="sr-only peer" // sr-only hides the checkbox, but it's still accessible
                onChange={onChangeBtn} // Attach onChange event handler
                checked={themeMode === "dark"} // Set checked state based on themeMode
            />
            {/* Custom toggle switch styling */}
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full 
                peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:left-[2px] 
                after:bg-white after:border-gray-300 after:border 
                after:rounded-full after:h-5 after:w-5 
                after:transition-all dark:border-gray-600 
                peer-checked:bg-blue-600">
            </div>
            {/* Label for the toggle switch */}
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
