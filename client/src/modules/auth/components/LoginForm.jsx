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
				<form
					className="login-form bg-white p-6 mx-auto border bd-default win-shadow"
					data-role="validator"
					action="javascript:"
					data-clear-invalid="2000"
					data-on-error-form="invalidForm"
					data-on-validate-form="validateForm"

					onSubmit={ this.OnSubmit }
				>
					{/* Maybe add this if HTTPS? <span className="fg-green dark mif-vpn-lock mif-4x place-right" style={{ marginTop: "-10px" }}></span> */}

					<h2 className="text-light text-center">Insight</h2>
					<hr className="thin mt-4 mb-4 bg-white" />

					<div className="form-group">
						<input
							type="text"
							data-role="input"
							data-prepend="<i class='mif-envelop'></i>"
							placeholder="Enter your username..."
							data-validate="required" 
							value={ this.state.username }
							onChange={ this.OnUsernameChange }
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							data-role="input"
							data-prepend="<i class='mif-key'></i>"
							placeholder="Enter your password..."
							data-validate="required" 
							value={ this.state.password }
							onChange={ this.OnPasswordChange }
						/>
					</div>
					
					<div className="form-group mt-4">
						<button className="button bg-blue fg-white w-100">Login</button>
					</div>
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