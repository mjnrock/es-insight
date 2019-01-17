import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./../actions/package";
import Enum from "./../enums/package";

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			__internal: {
				username: "",
				password: ""
			}
		};

		this.OnSubmit = this.OnSubmit.bind(this);
		this.OnUsernameChange = this.OnUsernameChange.bind(this);
		this.OnPasswordChange = this.OnPasswordChange.bind(this);
	}

	UpdateState(obj) {
		this.setState({
			__internal: {
				...this.state.__internal,
				...obj
			}
		});
	}
	resolve(obj, path){
		path = path.split('.');
		var current = obj;
		while(path.length) {
			if(typeof current !== 'object') return undefined;
			current = current[path.shift()];
		}
		return current;
	}
	get(key) {
		return this.resolve(this.state.__internal, key);
	}

	OnSubmit(e) {
		e.preventDefault();

		this.props.Attempt(
			this.get("username"),
			this.get("password")
		)
	}

	OnUsernameChange(e) {
		this.UpdateState({
			username: e.target.value
		});
	}

	OnPasswordChange(e) {
		this.UpdateState({
			password: e.target.value
		});
	}

	render() {
		if(this.props.AuthToken && this.props.AuthToken.Token) {
			console.log(this.props.AuthToken);
		}

		const errorMessage = this.state.error ? (
			<span className="error-message">{this.state.error}</span>
		) : null;

		return (
			<div className="container">
				<form onSubmit={ this.OnSubmit }>
					{ errorMessage }
					<div>
						<label>Username</label>
						<input
							id="username"
							type="text"
							value={ this.state.username }
							onChange={ this.OnUsernameChange }

							autoComplete="on"
						/>
					</div>

					<div>
						<label>Password</label>
						<input
							id="password"
							type="password"
							value={ this.state.password }
							onChange={ this.OnPasswordChange }

							autoComplete="on"
						/>
					</div>

					<input
						className="button success w-100 mt-2"
						id="submit"
						type="submit"
						value="Submit"
					/>
				</form>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		AuthToken: state.XATH_Auth
	}),
	(dispatch) => ({
		Attempt: (uid, pw) => dispatch(Actions.Auth.Attempt(uid, pw))
	})
)(LoginForm);