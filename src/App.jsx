import { useState } from 'react'

import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Royal from './pages/Royal'
import { Routes, Route } from 'react-router-dom'
import TalkSpace from '../src/pages/TalkSpace/TalkSpace'
// import Result from '../src/pages/TalkSpace/Result'
import Result from '../src/pages/TalkSpace/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/royal_mind-fullness" element={<Royal />} />
        <Route path="/talk_space" element={<TalkSpace />} />
         <Route path="/result" element={<Result />} />

      </Routes>
    </>
  )
}

export default App
