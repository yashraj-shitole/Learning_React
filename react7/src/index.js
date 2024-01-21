import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUp from './Components/SignUp'
import ImageCard from './Components/ImageCard';
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById('root'));


const route= createBrowserRouter(
  [
    {
  path:'/',
  element: <App/>,
  children:[
    {path:"",
  element: <SignUp/>
  }
  ]
},
{
  path:'/card',
  element:<App/>,
  children:[
    {
      path:"",
      element:<ImageCard/>
    }
  ]
}
]
)


root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

