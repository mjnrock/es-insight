import React, { Component } from "react";
import { connect } from "react-redux";

class Stub extends Component {
	render() {
		if(!this.props.label) {
			return null;
		}
		
		return (
			<div
				className={ `stub ${ this.props.className }` }
				style={{
					width: "150px",
					height: "36px"
				}}
			>
				<p className="mt-1">{ this.props.label }</p>
			</div>
		);
	}
}

export default Stub;