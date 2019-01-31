import React, { Component } from "react";
import { connect } from "react-redux";

import Summary from "./summary/package";

class Unit extends Component {
	render() {
		return (
			<div>
				<Summary.Patient />
			</div>
		);
	}
}

export default Unit;