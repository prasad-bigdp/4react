import React from 'react'
import UseCallbackDemo from './hooks/useCallbackDemo'
import './App.css'
import usePrasad from './hooks/usePrasad'
function App ()
{
  const [products,error]=usePrasad('https://fakestoreapi.com/products')
  return (
    <div>
      {/* <UseCallbackDemo /> */}
    </div>
  )
}

export default App
