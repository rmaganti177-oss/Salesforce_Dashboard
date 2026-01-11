import { Routes,Route } from 'react-router-dom'
import React from 'react'
import LandingPage from './components/LandingPage'
import './App.css'

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App