import React from 'react'
import { ReactTyped } from "react-typed"
import { ArrowDownToLine } from "lucide-react"
function Home ()
{
  return (
		<div className=' h-screen flex flex-col gap-10 justify-center items-center bg-gray-800 text-white'>
			<h2 className=' text-white text-5xl'>Hi, Everyone 👋🏻</h2>
			<div className=' flex justify-center items-center gap-2'>
				<p className=' text-3xl text-center'>I'm</p>
				<ReactTyped
					strings={["Developer", "Trainer", "Tech enthusiast"]}
					typeSpeed={40}
					backSpeed={50}
					attr='value'
					loop>
					<input
						type='text'
						className=' text-2xl text-green-500'
					/>
				</ReactTyped>
			</div>
			<div className=' flex gap-2'>
				<button className=' px-5 py-2 rounded-2xl border'>contact me</button>
				<button className=' px-5 py-2 text rounded-2xl border flex items-center'>
					<a
						href=''
						download>
						Download my resume
					</a>
					<ArrowDownToLine size={16} />
				</button>
			</div>
		</div>
	)
}

export default Home
