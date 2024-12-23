import {configureStore} from '@reduxjs/toolkit';   // Importing the `configureStore` function from the Redux Toolkit. This function helps create a Redux store with minimal setup.
import todoReducer from '../features/todo/todoSlice'; // Importing the `todoReducer` from the specified path. This reducer contains the logic for managing the todo-related state.


// Creating a Redux store using `configureStore`, where the `reducer` option is set to `todoReducer`. 
// This means the store will use the `todoReducer` to handle state changes related to todos.
// The resulting store is exported as a named export, making it available for use in the application.
export const store = configureStore({
    reducer: todoReducer
})

//this code sets up and exports a Redux store that is specifically designed to manage the state for a todo application.




