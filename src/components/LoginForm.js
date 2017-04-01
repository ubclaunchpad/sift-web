import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div className="login">
				<form onSubmit={handleSubmit}>
					<div>
						<Field name="username" component="input" type="text" />
					</div>
					<div>
						<Field name="password" component="input" type="text" />
					</div>
					<button type="submit">LOGIN</button>
				</form>
			</div>
		);
	}
}

// Decorate the form component
LoginForm = reduxForm({
	form: 'login',
	initialValues: { username: 'User Name', password: 'password' }
})(LoginForm);

export default LoginForm;
