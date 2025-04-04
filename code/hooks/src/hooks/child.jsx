import React from 'react'

function child({count,setCount,printCount}) {
  return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount()}>+</button>
			<button onClick={printCount}>print Count</button>
		</div>
	)
}

export default React.memo(child)
