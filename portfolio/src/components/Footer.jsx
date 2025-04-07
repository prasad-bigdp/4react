import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
		<footer className=' bg-gray-800 text-white py-12'>
			<div className='data flex flex-column justify-between max-w-10/12 m-auto lg:flex-row '>
				<div>
					<ul className='flex flex-col gap-2'>
						<li className=' '>
							<Link>Home</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
						<li>
							<Link>Contact</Link>
						</li>
						<li>
							<Link>Projects</Link>
						</li>
					</ul>
				</div>
        <div>
          	<ul className='flex flex-col gap-2'>
						<li className=' '>
							<Link>Home</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
						<li>
							<Link>Contact</Link>
						</li>
						<li>
							<Link>Projects</Link>
						</li>
					</ul>
        </div>
        <div>
          	<ul className='flex flex-col gap-2'>
						<li className=' '>
							<Link>Home</Link>
						</li>
						<li>
							<Link>About</Link>
						</li>
						<li>
							<Link>Contact</Link>
						</li>
						<li>
							<Link>Projects</Link>
						</li>
					</ul>
        </div>
			</div>
			<hr />
			<p className=' max-w-8/12 m-auto text-center'>
				This site Belongs to XYZ &copy;2024
			</p>
		</footer>
	)
}

export default Footer
