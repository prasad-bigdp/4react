import React, { useCallback } from 'react'
import './App.css'
import Cls from './components/Cls'
import Fun from './components/Fun';
function App ()
{
  let a1 = 55, a2 = 25;
  return (
    <div>
      {/* <Cls n="shekhar" a={a1} /> */}
      {/* <Cls n="raj" a={a2} /> */}
      <Fun />
    </div>
  )
}

export default App
