import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  return (
    <div>

      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  )
}
