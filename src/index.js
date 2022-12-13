import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from "./router";
import './index.css';
import { NavBar } from './components/NavBar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
   <RouterProvider router={router} />
  </React.StrictMode>
);

