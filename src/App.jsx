

import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Royal from './pages/Royal'
import { Routes, Route } from 'react-router-dom'
import TalkSpace from '../src/pages/TalkSpace/TalkSpace'
import ConsultationPage from '../src/pages/TalkSpace/ConsultationPage'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/royal_mind-fullness" element={<Royal />} />
        <Route path="/talk_space" element={<TalkSpace />} />
         <Route path="/consulation" element={<ConsultationPage />} />

      </Routes>
    </>
  )
}

export default App
