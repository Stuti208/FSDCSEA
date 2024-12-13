import React, { useState } from 'react'

const Registration = ({regData}) => {

	const [username, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [data, setData] = useState();

	function doRegistration(e) {
		e.preventDefault();
		const objectData = {
			username,
			email,
            password
		}
		regData(objectData);
		// setData(objectData);
	}
  return (
	  <div>
		  {/* <div>{username}</div> */}
		  {JSON.stringify(data)}

	  <h2>Registration Form</h2>
	  <form>
		<div class="form-group">
			<label for="exampleInputEmail1">Name</label>
				  <input type="text" onChange={(e)=>setName(e.target.value) } class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
		</div>
		<div class="form-group">
			<label for="exampleInputEmail1">Email address</label>
			<input type="email" onChange={(e)=>setEmail(e.target.value) } class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" onChange={(e)=>setPassword(e.target.value) } class="form-control" id="exampleInputPassword1" placeholder="Password"/>
		</div>
		<div class="form-check">
			<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
			<label class="form-check-label" for="exampleCheck1">Check me out</label>
		</div>
		<button type="submit" onClick={ doRegistration} class="btn btn-primary">Register</button>
	</form>
	</div>
  )
}

export default Registration
