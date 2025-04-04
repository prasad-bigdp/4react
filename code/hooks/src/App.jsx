import React from 'react'
import UseCallbackDemo from './hooks/useCallbackDemo'
import UseCallback2 from './hooks/useCallback2'
import UseMemoDemo from './hooks/UseMemoDemo'
import './App.css'
import usePrasad from './hooks/usePrasad'
function App ()
{
  const [products,error]=usePrasad('https://fakestoreapi.com/products')
  return (
    <div>
      <UseCallback2 />
<UseMemoDemo />
    </div>
  )
}

export default App
