import React from 'react'
import { useSelector } from 'react-redux'

function ExtraComponent ()
{
    const c= useSelector((state)=>state.count)
  return (
    <div>
          {c}
    </div>
  )
}

export default ExtraComponent
