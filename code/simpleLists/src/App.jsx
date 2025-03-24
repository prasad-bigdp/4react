import { useState } from "react"

function App ()
 { 
//   const [data, newData] = useState(true)
  //   const [isShow,newIsShow]=useState(true)
  const [show,setShow]=useState(true)
  const arr = [
		{
			img: "https://m.media-amazon.com/images/I/41AP1VGhL7L._AC_UF1000,1000_QL80_.jpg",
      name: "shinchan",
		},
		{
			img: "https://m.media-amazon.com/images/I/41AP1VGhL7L._AC_UF1000,1000_QL80_.jpg",
			name: "doremon",
		},
		{
			img: "https://m.media-amazon.com/images/I/41AP1VGhL7L._AC_UF1000,1000_QL80_.jpg",
			name: "mickey mouse",
		},
	]
  return (
		// <>
		// 	{/* <p>{data ? (<p>Good</p>) : (<p>bad</p>)}</p> */}
		// 	{data && <p>Simple input</p>}
		// 	<button onClick={() => newData(!data)}>Hello world</button>
		// 	<div>
		// 		{arr.map((value, i) => (
		// 			<div key={i}>
		// 				{isShow && (
		// 					<>
		// 						<img
		// 							src={value.img}
		// 							alt={value.name}
		// 							height='200'
		// 						/>
		// 						<h3>{value.name}</h3>
		// 					</>
		// 				)}
		// 				<button onClick={() => newIsShow(!isShow)}>Hide</button>
		// 			</div>
		// 		))}
		// 	</div>
    // </>
    <>
      {show && arr.map((v, i) => (
        <div key={v.name}>
          <img src={v.img} alt={v.name} height='200'/>
          <h2>{v.name}</h2>
        </div>
      ))}
      <button onClick={()=>setShow(!show)}>click me</button>
    
    
    
    </>
	)
}
export default App