import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import MainContent from './components/maincontent'
import Footer from './components/footer'
import Feedback from './components/feedback'
import Product from './components/product'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App