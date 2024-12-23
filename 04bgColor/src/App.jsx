import { useState } from "react"; // Import the useState hook from React, which lets us manage state in our component.

function App() { // Define a functional component named App.
  const [color, setColor] = useState("olive"); // Initialize a state variable 'color' with the default value 'olive'. 'setColor' is the function to update this state.

  return ( 
    <div className="w-full h-screen duration-200" 
          style = {{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button
                onClick={()=>{setColor("red")}} //onClick need a function that is why we use arrow function 
                className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
                style={{backgroundColor:"red"}}>Red
                </button>
                <button
                className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
                onClick={()=>{setColor("green")}}
                style={{backgroundColor:"green"}}>Green
                </button>
                <button
                className="outline-none px-4 py-1 rounded-full text-white shadow-sm" 
                onClick={()=>{setColor("blue")}}
                style={{backgroundColor:"blue"}}>Blue
                </button>
              </div>
            </div>
          </div>
  ); 
}

export default App; 



