import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './Routes/Routes'
import SideBar from './Components/SideBar/SideBar'


function App() {
  const router = useRoutes(routes)
  return (
    <div className="App flex">
      <SideBar />
      {router}
    </div>
  )
}

export default App
