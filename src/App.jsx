import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
