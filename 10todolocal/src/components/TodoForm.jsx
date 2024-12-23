import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  //define the state
  const [todo, setTodo] = useState("");
  //addTodo functionality which in App.jsx which we need here so it bring back useTodo which is in TodoContext.js
  //This function will handle the logic for adding a new todo item to the list in the parent component or context provider.
  const { addTodo } = useTodo();

  const add = (e) => {
    //Preventing the default form submission behavior.
    e.preventDefault();

    //if to do have nothing then return nothing
    if (!todo) return;
    //if todo have some value
    //{id: Date.now(),...todo},...prev] ->
    addTodo({ id: Date.now(), todo: todo, completed: false });
    //setTodo("") is used to reset the input field after a todo item is added,
    setTodo("");
  };
  //Preventing the default form submission behavior.
  // Ensuring that the input is not empty.
  // Adding a new todo item with a unique identifier.
  // Clearing the input field for the next entry.

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
