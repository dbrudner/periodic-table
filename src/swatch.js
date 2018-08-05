import React from "react";
import styled from "styled-components";
import getBgColor from "./get-bg-color";

const Swatch = styled.div`
	:first-child {
		background-color: ${props => props.bgColor};
		height: 1vw;
		width: 1vw;
	}

	div {
		display: inline-block;
	}
`;

export default props => {
	return (
		<Swatch {...props}>
			<div />
			<div>{props.category}</div>
		</Swatch>
	);
};
