import React, { useState } from 'react'
import './App.css'
function App ()
{
	const [inp, setInp] = useState('')
	const [chat, setChat] = useState([])
	const [isShow, setIsShow] = useState(false)
	const [loading,setLoading]=useState(false)
	const handleClick = () =>
	{
		console.log(inp);
		setLoading(true)
		fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCnlxZOdRYgjpXh9nUIFqfthg0qJUYMMQw`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					contents: [
						{
							parts: [
								{
									text: inp,
								},
							],
						},
					],
				}),
			},
		)
			.then((res) => res.json())
			.then((data) =>
			{
				console.log(data.candidates[0].content.parts[0].text);
				setChat([
					...chat,
					{ user: inp, bot: data.candidates[0].content.parts[0].text },
				]);
				setInp('');
				setLoading(false)
				setIsShow(true)
			}) 
			.catch((err) => console.log(err))
	}
  return (
		<div className=' h-full'>
			<h1 className=' text-2xl text-white bg-gray-800 text-center p-4'>
				Welcome to X AI.
			</h1>
			<div className=' flex flex-col justify-center items-center gap-3 h-screen'>
				<div id='data' className=' bg-white border-2 border-black rounded-2xl p-2 flex flex-col'>
					{isShow &&
						chat.map((v, i) => (
							<div key={i} className=' flex flex-col gap-3'>
								<p className=' float-right'>{v.user}</p>
								<p className=' float-left'>{v.bot}</p>
							</div>
						))}
					{loading && <div class='spinner'></div>}
				</div>
				<div>
					<input
						type='text'
						placeholder='Enter some text'
						value={inp}
						onChange={(e) => setInp(e.target.value)}
						className=' p-5 text-3xl border-2 rounded-3xl focus:outline-blue-500'
					/>
					<button
						onClick={handleClick}
						className=' bg-gray-800 text-2xl text-white
					py-5 px-2 rounded-2xl mx-2'>
						click me
					</button>
				</div>
			</div>
		</div>
	)
}

export default App
