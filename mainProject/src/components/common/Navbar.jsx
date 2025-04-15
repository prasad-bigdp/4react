import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
		<div className=' flex text-2xl text-white gap-4'>
			<Link to=''>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/movies'>Movies</Link>
			<Link to='/contact'>Contact</Link>
		</div>
	)
}

export default Navbar
