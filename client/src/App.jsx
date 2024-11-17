import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Result from "./pages/Result"
import Buy from "./pages/Buy"
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-[#ff9999]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/buy" element={<Buy/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App