import React, { Component } from "react";
import { connect } from "react-redux";

import Modules from "../modules/package";

class Authentication extends Component {
	render() {
		return (			
			<div className="container">
				<Modules.Authentication.Authentication />
			</div>
		);
	}
}

export default connect()(Authentication);