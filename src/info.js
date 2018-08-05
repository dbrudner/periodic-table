import React from "react";
import styled from "styled-components";
import { categories } from "./constants";
import LegendKey from "./legend-key";

const Info = styled.div`
	position: fixed;
	left: calc(((100vw / 18 - 4px) * 2) + 9px);
	height: calc(((100vw / 18 - 4px) * 3) + 21px);
	width: calc(((100vw / 18 - 4px) * 10) + 36px);
	padding-left: 10px;
	h2 {
	}
`;

const Legend = styled.div`
	/* display: grid;
	grid-template-columns: calc((((100vw / 18 - 4px) * 10) + 36px) / 4)
	align-content: start; */
`;

export default () => {
	return (
		<Info smallScreen={window.innerWidth < 1200}>
			<Legend>
				{categories.map(category => <LegendKey category={category} />)}
			</Legend>
		</Info>
	);
};
