import React from "react";
import styled from "styled-components";
import { categories } from "./constants";
import LegendKey from "./legend-key";

const Legend = styled.div`
	position: fixed;
	left: calc(((100vw / 18 - 4px) * 2) + 9px);
	height: calc(
		((100vw / 18 - ${props => (props.smallScreen ? "4px" : "4px")}}) * 3) +
			21px
	);
	width: calc(((100vw / 18 - 4px) * 10) + 36px);
	border: 1px solid black;
`;

export default () => {
	return (
		<Legend smallScreen={window.innerWidth < 1200}>
			{categories.map(category => <LegendKey category={category} />)}
		</Legend>
	);
};
