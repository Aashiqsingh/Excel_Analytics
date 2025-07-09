import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './component/Register'
import Login from './component/Login'
import Dashboard from './component/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
   </>
  )
}

export default App
