import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' max-w-7xl m-auto flex gap-2 h-screen justify-center items-center'>   
      <Controlled />
      <Uncontrolled />
    </div>
  )
}

export default App
