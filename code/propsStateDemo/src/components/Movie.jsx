function Movie(props) {
    
    return (
        <div style={{ border: "2px solid red", padding: '10px' }}>
              {props.children}
				<img
					src={props.image}
					alt={props.name}
					height='200'
				/>
				<h2>{props.name}</h2>
				<button onClick={() => props.handleCount(10)}>click me</button>
			</div>
		)
}
export default Movie
