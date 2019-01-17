import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "./actions/package";
import Components from "./components/package";
// import Enum from "./enums/package";

class Authentication extends Component {

	render() {
		return (
			<div>
				<Components.LoginForm />
			</div>
		);
	}
}

export default connect(
	// (state) => ({
	// 	Token: state.XATH_Token
	// }),
	null,
	(dispatch) => ({
		Attempt: (type) => dispatch(Actions.Auth.Attempt(type))
	})
)(Authentication);