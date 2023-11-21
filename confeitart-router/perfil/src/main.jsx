import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import{createBrowserRouter, RouterProvider} from "react-router-dom";

import Modulo from './router/modulo.jsx'
import Perfil from './router/Perfil.jsx'
import ErrorPage from './router/ErrorPage.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  

   errorElement : <ErrorPage />
  },
  { 
    path:"modulo",
    element:<Modulo/>,
  },
  {
    path:'/perfil',
    element:<Perfil/>,
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
