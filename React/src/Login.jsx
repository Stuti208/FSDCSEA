import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Login = ({ loginData }) => {

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	
	function verification() {
		if (loginData.email == email) {
			alert("user is valid");
		}
		else {
			alert("Invalid user");
		}
  }

  return (
	  <div>
	  <h2>Login Form</h2>
	  <form>
		<div class="form-group">
			<label for="exampleInputEmail1">Email address</label>
			<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value) } placeholder="Enter email"/>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Password</label>
			<input type="password" class="form-control" onChange={(e)=>setPassword(e.target.value) } id="exampleInputPassword1" placeholder="Password"/>
		</div>
		<div class="form-check">
			<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
			<label class="form-check-label" for="exampleCheck1">Check me out</label>
		</div>
			  <button type="submit" onClick={verification} class="btn btn-primary">Login</button>
	</form>
</div>
  )
}

export default Login
