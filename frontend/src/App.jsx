import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Add from './components/Add'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <br />
      <br />
      <Routes>
      <Route path = '/' element = {<Home/>}></Route>
      <Route path = '/add' element = {<Add/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      
     </Routes>
      
      
    </>
  )
}

export default App
