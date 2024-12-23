// //Create Reducer
// //nanoid -> generate unique id
// import { createSlice, nanoid } from "@reduxjs/toolkit";

// //important thing in store is initial state which can be either array or object but we here object as we put multiple things

// const initialState = {
//   todos: [{ id: 1, text: "Hello World" }],
// };

// //now we create slice which is bigger version of Reducer

// export const todoSlice = createSlice({
//   //name of slice that going to show in redux-toolkit
//   name: "todo",
//   //intial state of slice
//   initialState,
//   //Our store is incomplete that is reducer
//   //reducer have properties and function

//   reducers: {
//     addTodo: (state, action) => 
//         {
//          const todo = 
//          {
//           id: nanoid(), //getting unique id
//           text: action.payload.text,
//          }; 
//       //payload is a object in which extracting text
//       //now we create todo but it not gone in state,so w need to update the state
//       state.todos.push(todo);
//     },

//     removeTodo: (state,action) => 
//     {
//       //state->get current state
//       //action-> get the datewe passed
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);  //If todo.id is not equal to action.payload, the condition evaluates to true, meaning this todo will be included in the new array created by filter.
//      },
//      updateTodo: (state, action) => {
//         // Update a todo item based on id
//         const { id, text } = action.payload; // Destructure id and text from payload
//         const existingTodo = state.todos.find((todo) => todo.id === id); // Find the todo to update
//         if (existingTodo) {
//           existingTodo.text = text; // Update the text of the found todo
//         }
//       },
//   },
// });

// // Export actions for use in components
// export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// // Export the reducer to be used in the store
// export default todoSlice.reducer;












// Importing `createSlice` and `nanoid` from Redux Toolkit. `createSlice` simplifies reducer creation,
// and `nanoid` generates unique IDs for todos.

// Defining the initial state for the todos. It starts with one todo item: an object with an `id` and `text`.
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = 
{
    todos: [{id: 1, text: "Hello world"}]
}

// Creating a slice called 'todo' using `createSlice`. This slice includes the initial state and reducers.
export const todoSlice = createSlice({
    name: 'todo',                // The name of the slice.
    initialState,                // The initial state defined above.
    reducers: {                  // The reducers that handle state changes.
        addTodo: (state, action) => {  // Reducer to add a new todo.
            const todo = {              // Creating a new todo object.
                id: nanoid(),           // Generating a unique ID for the new todo.
                text: action.payload     // Using the payload from the action as the text of the todo.
            }
            state.todos.push(todo)      // Adding the new todo to the todos array.
        },
        removeTodo: (state, action) => { // Reducer to remove a todo by its ID.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) 
            // Filtering the todos to exclude the one with the ID provided in the action payload.
        },
    }
})

// Exporting the action creators `addTodo` and `removeTodo` for use in components.
export const {addTodo, removeTodo} = todoSlice.actions

// Exporting the reducer function, which will be used in the store setup.
export default todoSlice.reducer

// this code defines a Redux slice for managing todo items, including functionality to add and remove todos, along with an initial state. The slice provides actions and a reducer that can be used throughout the application.



