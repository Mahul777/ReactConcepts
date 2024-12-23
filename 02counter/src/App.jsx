import { useState } from 'react'

import './App.css'

// This is the main App component.
function App() 
{
  //let counter = 15;

  // Create a state variable called "counter" with an initial value of 15.
  // useState is a hook that lets us add state to our component.
  // Here, we start with a counter value of 15.
  let [counter,setCounter] = useState(0);

  // Function to increase the counter by 1
  const addValue =() =>
    {
      // counter = counter+1;
      // console.log("Add counter",counter);
      if(counter<20){
      setCounter(counter+1,20);  // Ensure counter doesn't exceed 20
      }
    }
    // Function to decrease the counter by 1
    const removeValue =() =>
      {
        // counter = counter-1;
        // console.log(counter);
        if(counter>0)
        setCounter(counter-1,0);  // Ensure counter doesn't go below 0
        
      }
  return (
    <>
     <h1>Counter App</h1>
     <button onClick={addValue}>AddCounter{counter}</button><br></br>
     <button onClick={removeValue}>RemoveCounter{counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

// Exporting the App component so it can be used in other files.
export default App

