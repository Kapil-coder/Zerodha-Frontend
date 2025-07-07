import React from 'react'

import Router from './Router'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Router/>
      <Footer/>
      
    </div>
  )
}

export default App