import React from "react"
import { useRef } from "react"
function Uncontrolled ()
{
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef=useRef('')
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(nameRef.current.value,emailRef.current.value,passwordRef.current.value)
    }
	return (
		<div>
            <form onSubmit={handleSubmit}>
				<input type='text' ref={nameRef} placeholder="Enter name"/>
				<input type='email' ref={emailRef} placeholder="Enter email"/>
                <input type='password' ref={passwordRef} placeholder="Enter password"/>
				<button>cluck me</button>
			</form>
		</div>
	)
}

export default Uncontrolled
