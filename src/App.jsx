import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'
import Invitation from './pages/Invitation/Invitation'

function App() {




  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination/" element={<Destination/>}/>
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path='/invitation' element={<Invitation/>}/>
    </Routes>
    </>

  )
}

export default App
