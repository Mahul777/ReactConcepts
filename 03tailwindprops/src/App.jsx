import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

//  Creating Object
  let myObj = {
    username: "Mehul",
    age: 21
  }
  //Creating Array
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username={"Apoorv"} btnText = "Visit Me"/>  

      <Card username = {"Mehul"} btnText = "Click Me"/> 
    </>
  )
}

export default App


