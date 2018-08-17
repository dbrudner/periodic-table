import React, { Component } from "react";

export default class extends Component {
	state = { results: [] };

	search = async () => {
		const compoundString = this.props.compound.reduce((cmpd, element) => {
			const quantity = element.quantity > 1 ? element.quantity : "";
			return cmpd + element.symbol + quantity;
		}, "");

		const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/fastformula/${compoundString}/cids/json`;
		const res = await fetch(url);
		const data = await res.json();
		// data.IdentifierList.CID.slice(10).forEach(async cid => {
		// 	const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/classification/JSON?classification_type=original`;
		// 	const res = await fetch(url);
		// 	const data = await res.json();
		// 	console.log(data);
		// });

		const urlel = await `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${data.IdentifierList.CID[0]}/classification/JSON?classification_type=original`;
		const resel = await fetch(url);
		const datael = await res.json();
		console.log(datael);
	};

	renderCompoundName = () => {
		return this.props.compound.map(element => {
			return (
				<span key={element.symbol}>
					{element.symbol}
					<sub>{element.quantity > 1 && element.quantity}</sub>
				</span>
			);
		});
	};

	getMolarMass = () => {
		return this.props.compound
			.reduce((acc, element) => {
				return acc + element.atomic_mass * element.quantity;
			}, 0)
			.toFixed(4);
	};

	render() {
		return (
			<div>
				Compound
				<div style={{ marginTop: "5px" }}>{this.renderCompoundName()}</div>
				<div>{this.getMolarMass()}</div>
				<button onClick={this.search}>Search</button>
			</div>
		);
	}
}
