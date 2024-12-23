// Importing React and necessary hooks from React Redux.
// `useSelector` is used to access the Redux store's state, while `useDispatch` is used to send actions to the store.
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  // Using `useSelector` to get the current list of todos from the Redux state.
  const todos = useSelector(state => state.todos)
  // Getting the `dispatch` function to send actions to the Redux store.
  const dispatch = useDispatch()

  return (
      <>
      <div>Todos</div>  // Displaying a header for the todos list.
      <ul className="list-none">  // Unordered list to display each todo item.
          {todos.map((todo) => (  // Mapping through the todos array to render each todo.
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}  // Setting a unique key for each list item using the todo's ID.
            >
              <div className='text-white'>{todo.text}</div>  // Displaying the text of the todo.
              <button
               onClick={() => dispatch(removeTodo(todo.id))}  // Dispatching the `removeTodo` action with the todo's ID when the button is clicked.
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                {/* Button for removing a todo, contains an SVG icon. */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* SVG path for the icon, representing a delete or remove action. */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </>
  )
}

// Exporting the Todos component for use in other parts of the application.
export default Todos

// this code defines a React component named Todos that displays a list of todo items fetched from the Redux state. 
// Each todo item includes a text display and a button that, when clicked, dispatches an action to remove the todo from the state.
//  The component is styled with Tailwind CSS classes for layout and appearance.
