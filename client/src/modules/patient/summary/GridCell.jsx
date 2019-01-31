import React, { Component } from "react";
import { connect } from "react-redux";

import Stub from "./Stub";

class GridCell extends Component {
	render() {		
		return (
			<div className={ this.props.className ? this.props.className : `cell` }>
				<div className="row no-gap">
					<Stub label={ this.props.label } className="cell text-bold" />
					<input className="cell text-center" type="text" value={ this.props.value } readOnly />
				</div>
			</div>
		);
	}
}

export default GridCell;