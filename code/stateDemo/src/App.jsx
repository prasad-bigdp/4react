import React from 'react'
import './App.css'
import Cls from './components/Cls'
function App ()
{
 let a1 = 55, a2 = 25;
  return (
    <div>
      <Cls n="shekhar" a={a1} />
      <Cls n="raj" a={a2} />
    </div>
  )
}

export default App
