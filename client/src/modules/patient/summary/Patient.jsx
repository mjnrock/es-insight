import React, { Component } from "react";
import { connect } from "react-redux";

import Summary from "./package";

class Patient extends Component {
	render() {
		return (
			<div
				className="text-center"
				data-role="panel"
				data-title-caption={ `<span class="text-bold">NIELSEN</span>, Leslie` }
				data-title-icon={ `<span class="mif-male"></span>` }
				data-cls-title-icon={ `fg-white bg-blue` }
				data-collapsible="true"
			>
				<div className="grid">
					<Summary.PRISM score="2" nolabel />
					<Summary.RangeBar
						className="mt-1"
						steps={ [
							[ 65, "green" ],
							[ 25, "orange" ],
							[ 10, "red" ]
						] }
						score={ [ 45.5, 0.49 ] }
						label="OE"
					/>

					<div className="grid">
						<div className="row no-gap mt-3">
							<Summary.GridCell label="DOB" value={ `02/11/1926 [84Y]` } />
							<Summary.GridCell label="Room" value={ `1234` } />
						</div>
						<div className="row no-gap mt-3">
							<Summary.GridCell label="FIN" value={ `0123456789` } />
							<Summary.GridCell label="Admit" value={ `01/01 - 12:34` } />
						</div>
					</div>
				</div>
				
				<div className="row no-gap">
					<button className="cell button secondary outline">View Patient</button>
				</div>
			</div>
		);
	}
}

export default Patient;