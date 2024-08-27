import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes, Navigate } from "react-router-dom"
import './App.css'

import Header from './component/header'
import Footer from './component/footer'
import HomePage from './pages/home'
import SignUpPage from './pages/sign_up'
import HabitsPage from './pages/habits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/habits" element={<HabitsPage></HabitsPage>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
