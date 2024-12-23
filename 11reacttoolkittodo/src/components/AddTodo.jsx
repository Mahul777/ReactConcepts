// Importing React and the `useState` hook for managing component state.
// Importing `useDispatch` from React Redux to dispatch actions to the store.
// Importing the `addTodo` action creator from the todo slice.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  // Setting up a local state variable `input` to hold the text input value, initialized to an empty string.
  const [input, setInput] = useState("");
  // Getting the `dispatch` function to send actions to the Redux store.
  const dispatch = useDispatch();

  // Function to handle the form submission.
  const addTodoHandler = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior.
    dispatch(addTodo(input)); // Dispatching the `addTodo` action with the current input value.
    setInput(""); // Resetting the input field to an empty string after adding the todo.
  };

  // Returning a form element with an input field and a submit button.
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text" // Specifying the input type as text.
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..." // Placeholder text for the input field.
        value={input} // Setting the input value to the current state.
        onChange={(e) => setInput(e.target.value)} // Updating the state when the input changes.
      />
      <button
        type="submit" // Button type set to submit to trigger the form submission.
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo // Button text.
      </button>
    </form>
  );
}

// Exporting the AddTodo component for use in other parts of the application.
export default AddTodo;

// this code defines a functional React component named AddTodo that allows users to input a new todo item and add it to the state managed by Redux.
//  It utilizes local component state to manage the input value and dispatches an action to add the todo when the form is submitted.
