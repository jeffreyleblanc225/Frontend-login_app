import React from "react";
import './LoginForm.css';

const LoginForm = (props) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const login = event.target.elements.name.value;
		const password = event.target.elements.password.value;
		props.onSubmit({ login, password });
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" />
			<button type="submit">Continue</button>
			<p>
				login: "user1", password: "pass1"
				<br />
				login: "user2", password: "pass2"
				<br />
				login: "user3", password: "pass3"
			</p>
		</form>
	)
}

export default LoginForm;