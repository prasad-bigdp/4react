import { useState } from "react"
import Movies from "./components/movies"
import { createContext } from "react"
const mainContext = createContext(); // create a global container
function App ()
{
  const [name, setName] = useState('prasad')
  let c = 20;
  return (
		<mainContext.Provider value={{ name,c }}>
			<div style={{border:'2px solid red;'}}>
				<Movies />
				<button onClick={() => setName("raj")}>click me</button>
			</div>
		</mainContext.Provider>
	)
}
export default App
export {mainContext}








// function App ()

// {
// const [name,setNme]=useState('')
//   return (
// 		<mainContext.Provider value={name}> // provide values to every component
// 			<div style={{ border: "2px solid red" }}>
// 				<Movies />
//       </div>
//       <button onClick={()=>setNme("Prasad")}>click me</button>
// 		</mainContext.Provider>
// 	)
// }
// export default App