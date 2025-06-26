import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ModelSection from './components/ModelSection'
import Card from './components/Card'
import ChargeSection from './components/ChargeSection'
import SolarModel from './components/SolarModel'
import Footer from './components/Footer'


function App() {

  return (
    <div className='space-y-13'>
      <Header />
      <HeroSection />
      <ModelSection />
      <Card />
      <ChargeSection />
      <SolarModel />
      <Footer />
    </div>
  )
}

export default App
