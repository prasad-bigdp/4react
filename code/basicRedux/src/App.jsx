import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ExtraComponent from './ExtraComponent'
function App ()
{
  const dispatch = useDispatch()
  const count= useSelector((x)=>x.count)
  return (
		<div>
			<p>{count}</p>
			<button onClick={() => dispatch({ type: "INCR" })}>incr</button>
			<button onClick={() => dispatch({ type: "DECR" })}>decr</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <ExtraComponent />
		</div>
	)
}

export default App
