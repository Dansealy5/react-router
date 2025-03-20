import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Blue from './components/Blue'
import Red from './components/Red'
import Green from './components/Green'
import Purple from './components/Purple'

function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/purple">Purple</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/purple" element={<Purple />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
