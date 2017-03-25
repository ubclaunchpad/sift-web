import React from 'react';

const LoginPage = () => (
	<div>
		<h2>Enter your login details.</h2>
		<div className="login">
			<input type="text" placeholder="User Name" />
			<input type="password" placeholder="Password" />
		</div>
	</div>
);

LoginPage.displayName = 'LoginPage';
export default LoginPage;