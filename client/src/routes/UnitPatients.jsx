import React, { Component } from "react";
import { connect } from "react-redux";

import Modules from "./../modules/package";

class UnitPatients extends Component {
	render() {
		return (
			<div className="container">
				<Modules.Patient.Unit />
			</div>
		);
	}
}

export default UnitPatients;