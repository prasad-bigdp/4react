import React from 'react'
import Navbar from './common/Navbar'
import Logo from '../assets/images/logo.png'
function Header() {
  return (
    <header className=' bg-blue-600 text-3xl font-bold text-center flex justify-between items-center px-20 py-10'>
      <div className="brand">
        <img src={Logo} alt='show movies' className=' h-1/4 w-1/4'/>
      </div>
      <Navbar />

    </header>
  )
}

export default Header
