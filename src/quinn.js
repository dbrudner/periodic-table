import React, { Component } from "react";
import Info from "./info";
import Table from "./table";

export default class extends Component {
	constructor(props) {
		super(props);

		this.state = {
			detailedElement: {},
			mode: "build",
			compound: []
		};
	}

	render() {
		return (
			<div style={{ position: "relative" }}>
				<Info />
				<Table handleElementClick={this.handleElementClick} />
			</div>
		);
	}
}
