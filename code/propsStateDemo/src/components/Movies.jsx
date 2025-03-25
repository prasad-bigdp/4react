import Movie from "./Movie"
import { useState } from "react"
function Movies ()
{
    const [count,setCount]=useState(0)
    const addCount=(n)=>{
        //count=0
        setCount(count + n)
        console.log(count) //0
    }
    return (
        <div style={{ border: "1px solid red", padding: '15px',display:'grid',gridTemplateColumns:'repeat(3,1fr)' }}>
				<p>{count}</p>
				<Movie
					image='https://i.pinimg.com/564x/5b/dc/09/5bdc09293da81ab14eec6a7e0cb38299.jpg'
					name='tom and Jerry'
                handleCount={addCount}>
                    <p>This is childern</p>
                </Movie>
				<Movie
					image='https://w0.peakpx.com/wallpaper/338/405/HD-wallpaper-chhota-bheem-chutki-chota-cartoon-toon-jaggu-dholakpur-kalia.jpg'
					name='chotabheem'
					handleCount={addCount}
				/>
			</div>
		)
}
export default Movies