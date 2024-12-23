import { useState, useCallback, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState(""); // State for password




  const passwordRef = useRef(null); // Ref for the password input

  // Creating password generator
  const passwordGenerator = useCallback(() => 
    {
    let pass = "";  // String to hold generated password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "1234567890"; // Add numbers if allowed
    }
    if (characterAllowed) {
      str += "!@#$%^&*()-_=+[]{};:'\",.<>?/"; // Add special characters if allowed
    }

    // Generating password
    for (let i = 0; i < length; i++) { // Loop should run 'length' times
      const charIndex = Math.floor(Math.random() * str.length); // Generate random index
      pass += str.charAt(charIndex); // Append random character to password
    }
    setPassword(pass); // Update the password state
  }, [length, numberAllowed, characterAllowed]);

  // Effect to regenerate password when dependencies change
  useEffect(() => {
    if (length > 0) {
      passwordGenerator(); //run passwordGenerator variable
    }
  }, [length, numberAllowed, characterAllowed, passwordGenerator]); //any of the dependencies is changed then it again passwordGenerator will run 

  // Function to copy password to clipboard
  const copyPasswordToClipboard = () => {
    passwordRef.current.select(); // Select the password input
    window.navigator.clipboard.writeText(password); // Copy to clipboard
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password} // Display the generated password
          className="outline-none w-full py-1 px-3"
          placeholder="Password" // Placeholder text
          readOnly // Prevent user from editing the input
          ref={passwordRef} // Attach the ref to this input
        />
        <button
          onClick={copyPasswordToClipboard} // Call copy function on click
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6} // Minimum length of password
            max={100} // Maximum length of password
            value={length} // Value controlled by length state  
            className='cursor-pointer'
            onChange={(e) => { setLength(Number(e.target.value)); }} // Update length on change
          />
          <label>Length: {length}</label> 
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed} // Controlled checkbox for numbers
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev); // Toggle number allowance
            }}
          />
          <label htmlFor="numberInput">Numbers</label> 
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={characterAllowed} // Controlled checkbox for special characters
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev); 
            }}
          />
          <label htmlFor="characterInput">Characters</label> 
        </div>
      </div>
    </div>
  );
}

export default App; // Export the App component
