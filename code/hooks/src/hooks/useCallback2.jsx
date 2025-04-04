import React, { useCallback, useState } from 'react'
import Child from './child'

function UseCallback2 ()
{
    const [count, setCount] = useState(0)
    //memorized function that only updates when count changes
    const printCount = useCallback(() =>
    {
        console.log("current count"+count)
    },[count])
  return (
    <div>
      <Child count={count} setCount={setCount} printCount={printCount} />
    </div>
  )
}

export default UseCallback2
