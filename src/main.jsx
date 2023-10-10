import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes.jsx'
import './index.css'
import { Home } from './components/index.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routes/>}>
      <Route path="/" element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
