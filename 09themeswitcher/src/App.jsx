import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme"; // Ensure correct import path
import Card from "./components/Card";
import ThemeBtn from "./components/themeBtn";
//import ThemeBtn from "./components/ThemeBtn"; // Corrected the import to match the component name (capitalized)

// Wrap ThemeBtn and Card in ThemeProvider
function App() {
  const [themeMode, setThemeMode] = useState("light");

  // Define the darkTheme function
  const darkTheme = () => {
    setThemeMode('dark');
  };

  // Define the lightTheme function
  const lightTheme = () => {
    setThemeMode('light');
  };

  // Change the theme when themeMode changes
  useEffect(() => {
    // Remove existing theme classes from the HTML element
    document.querySelector('html').classList.remove("light", "dark"); 
    // Add the new theme class based on themeMode
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Render the ThemeBtn component */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Render the Card component */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

