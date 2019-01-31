import React, { Component } from "react";
import { connect } from "react-redux";

import Stub from "./Stub";

class PRISM extends Component {
	render() {
		let score = this.props.score || 0,
			nolabel = this.props.nolabel === true ? true : false;

		return (
			<div className={ `row no-gap ${ this.props.className }` }>
				<Stub label={ nolabel ? null : "PRISM" } />

				{
					[ "crimson", "amber", "yellow", "emerald", "cobalt" ].map((v, i) => (
						<div
							key={ i }
							className={ `cell text-bold ${ i !== 2 ? "fg-white" : "fg-black" } ribbed-${ v }` }
							style={{
								opacity: i + 1 <= score ? 1.0 : 0.1,
								height: "36px"
							}}
						>
							<p className="h-100 mt-1 mb-2">{ i + 1 }</p>
						</div>
					))
				}
			</div>
		);
	}
}

export default PRISM;