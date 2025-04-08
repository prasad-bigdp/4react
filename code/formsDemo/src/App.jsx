import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
      <Controlled />
      <Uncontrolled />
    </>
  )
}

export default App
