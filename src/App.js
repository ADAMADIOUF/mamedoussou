import React from 'react'
import Navbar from "./Navbar"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

import Boutique from './component/Boutique'
import Contact from './component/Contact'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/boutique' element={<Boutique />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App