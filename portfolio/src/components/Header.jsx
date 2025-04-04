import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
		<div
			className='bg-black text-2xl py-2 px-10 text-white flex flex-col md:flex-row justify-between items-center
		'>
			<div>
				<h2 className=' text-4xl font-extrabold animate-pulse'>
					PRA<span className=' text-blue-600'>SAD</span>
				</h2>
			</div>
			<nav className=' flex flex-col md:flex-row gap-5'>
				<Link
					to='/'
					className=' block hover:scale-110 hover:text-blue-600  transition-all ease-in duration-200'>
					Home
				</Link>
				<Link
					to='/about'
					className=' block hover:scale-110 hover:text-blue-600  transition-all ease-in duration-200'>
					about
				</Link>
				<Link
					to='/projects'
					className=' block hover:scale-110 hover:text-blue-600  transition-all ease-in duration-200'>
					Projects
				</Link>
				<Link
					to='/contact'
					className=' block hover:scale-110 hover:text-blue-600  transition-all ease-in duration-200'>
					contact
				</Link>
			</nav>
		</div>
	)
}

export default Header
