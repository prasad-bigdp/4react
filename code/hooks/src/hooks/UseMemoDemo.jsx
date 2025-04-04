import React, { useState,useMemo } from 'react'

function UseMemoDemo ()
{
  const [count, setCount] = useState(0)
  const [darkmode, setDarkMode] = useState(false)
  const expe = useMemo(() =>
  {
    console.log("expensive function")
    return count * 2;
  },[count])
  return (
    <div style={{ background:darkmode?'black':'white'}}>
      <h1>{count}</h1>
      <h2>Expoensive calculation:{expe}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={()=>setDarkMode(!darkmode)}>change</button>
    </div>
  )
}

export default UseMemoDemo
