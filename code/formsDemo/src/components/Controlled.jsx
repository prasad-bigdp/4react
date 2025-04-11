import React, { useState } from 'react'

function Controlled ()
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors,setErrors]=useState({})
    const handleSubmit = (e) =>
    {
		e.preventDefault()
		const err={}
        console.log(errors)
        if (name == '')
        {
           err.name="name is required"
        }
        if (!email.match('^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z]{3}$'))
        {
            err.email="please enter valid email"
        }
        if (password.length <= 6)
        {
			err.password = "Passowrd should be minimum 6 characters ";
		}
		setErrors(err)
    }
  return (
	  <div className=' p-2 border rounded-2xl shadow-2xl shadow-amber-400'>
		  <h2>Registration form -controlled components</h2>
			<form
				onSubmit={handleSubmit}
				className=' p-5 rounded-2xl flex flex-col gap-2'>
				<div className=' flex  flex-col'>
					<input
						type='text'
						placeholder='Enter your name'
						value={name}
						className=' border rounded-2xl focus:outline-blue-600 text-2xl max-w-52'
						onChange={(e) => {setName(e.target.value)}}
					/>
					{errors.name && <p className=' text-red-500'>{errors.name}</p>}
				</div>
				<div className=' flex  flex-col'>
					<input
						type='email'
						placeholder='Enter your email'
						value={email}
						className=' border rounded-2xl focus:outline-blue-600 text-2xl max-w-52'
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errors.email && <p className=' text-red-500'>{errors.email}</p>}
				</div>
				<div className=' flex  flex-col'>
					<input
						type='password'
						placeholder='Enter your password'
						value={password}
						className=' border rounded-2xl focus:outline-blue-600 text-2xl max-w-52'
						onChange={(e) => setPassword(e.target.value)}
					/>
					{errors.password && <p className=' text-red-500'>{errors.password}</p>}
				</div>
				<button className=' bg-black text-2xl text-white max-w-50 p-3 rounded-2xl'>
					submit
				</button>
			</form>
		</div>
	)
}

export default Controlled
