import React from "react";
import styled from "styled-components";
import getBgColor from "./get-bg-color";

const Swatch = styled.div`
	> div {
		background-color: ${props => getBgColor(props)};
		height: 1vw;
		width: 1vw;
	}

	div {
		display: inline-block;
	}
`;

export default props => {
	return (
		<Swatch category={props.category}>
			<div />
			<div>{props.category}</div>
		</Swatch>
	);
};
