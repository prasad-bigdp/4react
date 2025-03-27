import React, { useEffect, useState } from 'react'
import './App.css'
function App ()
{
  const [count, setCount] = useState(0)
  const [data,setData]=useState({})
  useEffect( function ()
  {
    //   setTimeout(()=>console.log("hello"),10000);
    // fetch("https://dummyjson.com/quotes/random")
    //   .then((res) => res.json())
    //   .then((data)=>setData(data))
    //   .catch((err)=>console.log(err))
    async function fetchData()
    {
      try
      {
        const res = await fetch("https://dummyjson.com/quotes/random")
        console.log(res)
				const d = await res.json()
				setData(d)
      }
      catch (err)
      {
        console.log(err)
      }
    }
    setInterval(()=>fetchData(),10000)
  }, [])
  return (
    <div className='box'>
      {/* <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>click me</button> */}
      <h2>{data.quote}</h2>
      <p>{data.author}</p>
    </div>
  )
}

export default App
