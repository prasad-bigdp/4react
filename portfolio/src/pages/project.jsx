import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function project ()
{
  const [project, setProject] = useState({})
  const {id}=useParams()
  useEffect(() =>
  {
    console.log(id);
    const arr = JSON.parse(localStorage.getItem("projects"))
    console.log(arr)
    const p = arr.filter((v) => v.id == id)
    console.log(p)
    setProject(p[0])
  },[])
  return (
    <div>
      <img src={project.img} alt="{project.name}" />
      <p>{project.name}</p>
    </div>
  )
}

export default project
