import React from "react";
import styled from "styled-components";

const Legend = styled.div`
	position: fixed;
	left: calc(((100vw / 18 - 4px) * 2) + 8px);
	height: calc(
		((100vw / 18 - ${props => (props.smallScreen ? "4px" : "4px")}}) * 3) +
			12px
	);
	width: calc(
		((100vw / 18 - ${props => (props.smallScreen ? "4px" : "4px")}}) * 10) +
			38px
	);
	border: 1px solid black;
`;

export default () => {
	return <Legend smallScreen={window.innerWidth < 1200} />;
};
