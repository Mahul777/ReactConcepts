import { createContext, useContext } from "react";

// Create a context for managing todos
export const TodoContext = createContext(
    {
        // Initial state with a todos array containing a single todo item
        todos:
         [
            {
                id: 1,
                todo: "To do message", // The todo message
                completed: false // Completion status
            }
        ],
        // Functions for managing todos (placeholders)
        addTodo: (todo) => {}, // Function to add a new todo
        updateTodo: (id, todo) => {}, // Function to update an existing todo
        deleteTodo: (id) => {}, // Function to delete a todo
        toggleComplete: (id) => {} // Function to toggle completion status of a todo
    }
);

// Export a custom hook to use the TodoContext in components
export const useTodo = () => {
    return useContext(TodoContext); // Returns the current context value
}

// Export the Provider component to wrap around parts of the app that need access to the context
export const TodoProvider = TodoContext.Provider;//The Provider is a special component that allows any child components to access the context value


