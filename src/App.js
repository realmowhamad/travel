import { useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './Routes/Routes'
import SideBar from './Components/SideBar/SideBar'
import { Provider } from 'react-redux'
import store from './Features/store'


function App() {
  const router = useRoutes(routes)

  return (
    <Provider store={store}>
      <div className="App flex">

        {router}
      </div>
    </Provider >
  )
}

export default App
