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

	handleElementClick = newElement => {
		if (this.state.mode === "info") {
			return this.setState({ detailedElement: newElement });
		}

		if (!this.state.compound.length) {
			this.setState({
				compound: [{ ...newElement, quantity: 1 }]
			});
		}

		const isNewElement = this.state.compound.every(ele => {
			return ele.name !== newElement.name;
		});

		if (isNewElement) {
			this.setState({
				compound: [
					...this.state.compound,
					{ ...newElement, quantity: 1 }
				]
			});
		} else {
			const compound = this.state.compound.map(element => {
				if (element.name === newElement.name) {
					return { ...element, quantity: element.quantity + 1 };
				}
				return element;
			});

			this.setState({
				compound
			});
		}
	};

	render() {
		console.log(this.state.compound);
		return (
			<div style={{ position: "relative" }}>
				<Info
					{...this.state}
					setMode={mode => this.setState({ mode })}
				/>
				<Table handleElementClick={this.handleElementClick} />
			</div>
		);
	}
}
