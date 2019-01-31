import React, { Component } from "react";
import { connect } from "react-redux";

import Stub from "./Stub";

class RangeBar extends Component {
	render() {
		let score = 100 - this.props.score[1] || 0;

		return (
			<div className={ `d-flex flex-row ${ this.props.className }` }>
				<Stub label={ this.props.label } className="text-bold" />

				<div
					className={ `text-center ribbed-green fg-white` }
					style={{
						width: `${ this.props.score[0] }%`,
						height: "36px"
					}}
				>
					<p className="mt-1">{ this.props.score[1] }</p>
				</div>

				<div className="d-flex flex-row w-100">
					{
						this.props.steps.map((v, i) => (
							<div
								key={ i }
								className={ `bg-${ v[1] }` }
								style={{
									width: `${ v[0] }%`,
									height: "36px",
									opacity: 0.1
								}}
							>
								{ v[2] !== null && v[2] !== void 0 ? v[2] : null}
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

export default RangeBar;