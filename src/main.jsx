import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/movie/:id',
        element:<Movie/>
      },
      {
        path:'/search',
        element:<Search/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
