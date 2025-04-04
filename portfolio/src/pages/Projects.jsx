import React from 'react'
import { Link } from 'react-router-dom'

function Projects ()
{
  const projects = [
    {
      id:25252,
			name: "project1",
			img: "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/12/What-are-React-JS-Projects.jpg",
		},
    {
      id:77441,
			name: "project2",
			img: "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/12/What-are-React-JS-Projects.jpg",
		},
    {
      id:44555,
			name: "project3",
			img: "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/12/What-are-React-JS-Projects.jpg",
		},
	]
  return (
    <div className=' m-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
      {
        projects.map((v, i) => (
          <div key={i} className=' p-5 border rounded-2xl shadow shadow-blue-300 flex flex-col justify-center items-center'>
            <img src={v.img} alt={v.title} height="100" />
            <Link to={`/project/${v.id}`}>
              <h2>{v.name}</h2>
             </Link>
          </div>
        ))
       }
    </div>
  )
}

export default Projects
