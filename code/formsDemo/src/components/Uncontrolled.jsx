import React from "react"
import { useRef } from "react"
import { useState } from "react"
function Uncontrolled ()
{
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [errors,setErrors]=useState('')
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
        const err = {}
				console.log(errors)
				if (nameRef.current.value == "") {
					err.name = "name is required"
				}
				if (!emailRef.current.value.match("^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z]{3}$")) {
					err.email = "please enter valid email"
				}
				if (passwordRef.current.value.length <= 6) {
					err.password = "Passowrd should be minimum 6 characters "
				}
				setErrors(err)
    }
	return (
		<div className=' p-2 border rounded-2xl shadow-2xl shadow-amber-400'>
			<h1>Registration form - uncontrolled components</h1>
			<form
				onSubmit={handleSubmit}
				className=' p-5 rounded-2xl flex flex-col gap-2'>
				<input
					type='text'
					ref={nameRef}
					placeholder='Enter name'
					className=' border rounded-2xl focus:outline-blue-600 text-2xl max-w-52'
				/>
				{errors.name && <p className=' text-red-500'>{errors.name}</p>}

				<input
					type='email'
					ref={emailRef}
					placeholder='Enter email'
					className=' border rounded-2xl focus:outline-blue-600 text-2xl max-w-52'
				/>
				{errors.email && <p className=' text-red-500'>{errors.email}</p>}

				<input
					type='password'
					ref={passwordRef}
					placeholder='Enter password'
					className=' border rounded-2xl focus:outline-blue-600 text-2xl max-w-52'
				/>
				{errors.password && <p className=' text-red-500'>{errors.password}</p>}

				<button className=' bg-black text-2xl text-white max-w-50 p-3 rounded-2xl'>
					click me
				</button>
			</form>
		</div>
	)
}

export default Uncontrolled
