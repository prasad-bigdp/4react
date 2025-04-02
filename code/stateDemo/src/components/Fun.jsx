import React from "react"
import { useState ,useCallback} from "react"
function Fun ()
{
	  useCallback(() => console.log("hello", [count]))

	const [na, setNA] = useState("prasad")
	const [count, setCount] = useState(0)
	const [length, setLength] = useState(0)
	const handleClick = () => {
		setNA((na) => na + "raj")
	}
	const handleChange = (l) => {
		setLength(l.length)
	}
	const handleCallback = useCallback(() => {
		console.log("hello world")
		setCount(count + 1)
	},[])
	return (
		<div>
			<p>Name:{na}</p>
			<p>No of characters: {length}</p>
			<input
				type='text'
				onChange={(e) => handleChange(e.target.value)}
			/>
			<p>count:{count}</p>
			<button onClick={handleCallback}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
			<button onClick={() => setCount(0)}>reset</button>
			<button onClick={handleClick}>click me</button>
		</div>
	)
}

export default Fun
