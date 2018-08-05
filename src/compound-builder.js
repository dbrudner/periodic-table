import React from "react";

export default props => {
	const { compound } = props;

	const renderCompoundName = () => {
		return compound.map(element => {
			return (
				<span>
					{element.symbol}
					<sub>{element.quantity > 1 && element.quantity}</sub>
				</span>
			);
		});
	};

	const getMolarMass = () =>
		compound
			.reduce((acc, element) => {
				return acc + element.atomic_mass * element.quantity;
			}, 0)
			.toFixed(4);

	return (
		<div>
			Compound
			<div style={{ marginTop: "5px" }}>{renderCompoundName()}</div>
			<div>{getMolarMass()}</div>
		</div>
	);
};
