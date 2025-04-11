import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { decr, Incr, reset } from "./redux/Actions"
function App() {
	const dispatch = useDispatch()
	const count = useSelector((state) => state.counter.count)
	return (
		<div>
			<p>{count}</p>
      <button onClick={() => dispatch(Incr())}>incr</button>
			<button onClick={() => dispatch(decr())}>decr</button>
			<button onClick={() => dispatch(reset())}>reset</button>
		</div>
	)
}

export default App
