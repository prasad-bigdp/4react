import React, { useContext } from 'react'
import { mainContext } from '../App'
function SocialMedia ()
{
    const {name,c}  =useContext(mainContext) // getting the value line from server
  return (
    <div style={{border:'2px solid red',padding:'10px'}}>
      <p>{name}</p>
      <p>{c}</p>
    </div>
  )
}

export default SocialMedia
