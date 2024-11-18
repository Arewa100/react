import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'


const router = createBrowserRouter([...routes])
 
function App() {

  return (
    <>
    <RouterProvider  router={router}/>
    </>
  )
}

export default App
