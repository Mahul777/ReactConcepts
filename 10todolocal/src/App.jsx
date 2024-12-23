// import { useEffect, useState } from "react";

// import "./App.css";
// import { TodoProvider } from "./contexts/TodoContext";
// import { TodoForm, TodoItem } from "./components";

// function App() {
//   const [todos, setTodos] = useState([]); // State to hold the list of todos and default as empty array

//   //todo -> The todo parameter represents the new todo item that you want to add to the list.It typically comes from the TodoForm component
//   const addTodo = (todo) => {
//     //setTodos(todo); //our all old todo's value will we deleted and new value will be there. so need old state access by prev we get old array through we create ne array
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); //here we will insert new as well as old value  //{id: Date.now()} ->todo value
//     //...todo ->uses the spread operator to copy all properties from the todo object that was passed to the addTodo function. This allows you to include any additional properties from the new todo
//   };

//   //which todo match with "id" so that we can add new todo
//   const updateTodo = (id, todo) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//     ); //every indivisual  todo list has prevTodo id
//     //f the id of the current prevTodo matches the id passed to updateTodo, it returns the new todo object,
//     //IDs do not match, it returns the original prevTodo, keeping it unchanged.
//   };

//   const deleteTodo = (
//     id //id, which is the unique identifier of the todo you want to remove.
//   ) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id)); //The filter method creates a new array containing only the todos that pass a specified condition.
//     // if the id of the current todo does not match the id passed to deleteTodo.
//     //If the condition is true, the todo is kept in the new array; if false, it is excluded (effectively deleting it).
//   };

//   const toggleComplete = () => {
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id
//           ? { ...prevTodo, completed: !prevTodo.completed }
//           : prevTodo
//       )
//     ); //if id is equal then remaining value put as it is and change the completed value false to true and vice-versa
//   };

//   useEffect(() => {
//     //first take all values from localstorage
//     //"todos" ->is the name of key
//     //"localStorage.getItem("todos")" -> it return value in the form of string so we want json format and store todos
//     const todos = JSON.parse(localStorage.getItem("todos"));
//     //checking if todos contain some value then put in setTodos
//     if (todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);
//   //the current state of the todos is always saved in local storage,
//   //JSON.stringify(todos) -> it convert all in string andsaved in localstorage
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);
//   //to use all function we define in TodoContext.js we need to call in TodoProvider
//   //{{}} ->here we are trying to destrucutre
//   return (
//     <TodoProvider
//       value={{ addTodo, updateTodo, deleteTodo, toggleComplete, todos }}
//     >
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//             Manage Your Todos
//           </h1>
//           <div className="mb-4">
//             {/* Todo form goes here */}
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {/*Loop and Add TodoItem here */}
//             <div key={todo.id} className="w-full">
//               <TodoItem todo={todo} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;


import { useEffect, useState } from "react";

import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]); // State to hold the list of todos and default as empty array

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Function to update a specific todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Function to delete a specific todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Function to toggle the completion status of a specific todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ addTodo, updateTodo, deleteTodo, toggleComplete, todos }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop through todos and render TodoItem for each */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
