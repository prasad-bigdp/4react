import React from "react"
import { useState } from "react"
import './App.css'
function App() {
  const [input, setInput] = useState("")
  const [response,setResponse]=useState('')
	const handleClick = async () => {
		try {
		const res= await	fetch(
				`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
					import.meta.env.VITE_API_KEY
				}`,
				{
					method: "POST",
					body: {
						contents: [
							{
								parts: [{ text: input }],
							},
						],
					},
				},
      )
      const data = await res.json()
      setResponse(response)
		} catch (err) {
			console.log(err)
		}
	}
	return (
    <div>
      <div id="data">
        <p>{input}</p>
        <p>{response}</p>
      </div>
			<div id='input'>
				<input
					type='text'
					placeholder='Enter the text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button onClick={handleClick}>send</button>
			</div>
		</div>
	)
}

export default App
