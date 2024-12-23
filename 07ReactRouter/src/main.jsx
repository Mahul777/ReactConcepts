import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github from './components/Github/Github';
// RouteProvider is a part of React Router that helps manage routing in your app. It take prop otherwise it doesn't work so we take prop as router
// Define Routes: You define your routes using createBrowserRouter. Each route has a path and a component to render.
// Use RouterProvider: You wrap your app with RouterProvider and pass the routes you created. This connects your app to the routing system.

//createBrowserRouter : It constain array which contain object and its functionality are
// Set up routing in your React application.
// Define which components should render for specific paths.
// Handle navigation and support features like nested routes and data loading.

//There are 2 ways to create router 
// const router = createBrowserRouter([
//     {
//       path:'/', // '/' ->it is a top level element and inside it redering is done and we have to tell which element is need to render
//       element: <Layout/>,  //now u want to add more children 
//       children:
//       [
//         {path:"",
//          element:<Home/>
          
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "contact",
//           element: <Contact/>
//         }
//       ]
      
//     }
// ])

//2nd way
// createRoutesFromElements:

// Converts JSX elements into route definitions for React Router.
// Improves the readability and structure of your routing code.
// Makes it easier to define and manage nested routes.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} /> {/* Default route when at '/' */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:UserId" element={<User />} /> {/* Dynamic value from url */}
      <Route path="github" element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


