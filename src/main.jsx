import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Layout from './components/mainLayout/Layout';
import Review from './components/orderReivew/Review';
import Aboutus from './assets/about/Aboutus';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('tshirt.json')
      },
      {
        path:'review',
        element:<Review></Review>
      },
      {
        path:'about',
        element:<Aboutus></Aboutus>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
