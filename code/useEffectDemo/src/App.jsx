import React, { useEffect, useState } from 'react'

function App ()
{
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const [data,setData]=useState({})
  async function fetchData ()
  {
    try
    {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await res.json()
    setData(data)
    }
    catch (err)
    {
      console.log(err)
    }
  }


  useEffect(() =>
  {
    console.log("hi") // it will run first time automatically
    fetchData();
  },[count])
  return (
    <div>
      <div>
        <h2>{data.setup}</h2>
        <p>{data.punchline}</p>
      </div>
      <p>{count}</p><button onClick={() => setCount(count + 1)}>+</button>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default App
