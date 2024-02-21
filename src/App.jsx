import React from 'react'
import Navigator from './components/Navigator'
import './App.css'
import HeroSection from './components/HeroSection'
import Inputting from './components/Inputting'

function App() {
  return (
    <div>
      <Navigator/>
      <HeroSection/>
      <Inputting/>
    </div>
  )
}

export default App