import React from "react";
import styled from "styled-components";
import getBgColor from "./get-bg-color";

const Swatch = styled.div`
	background-color: ${props => getBgColor(props)};
	height: 1vw;
	width: 1vw;
	margin: 3px;
`;

const SwatchContainer = styled.div`
	display: flex;
	justify-content: left;
	font-size: calc(6px + 6 * ((100vw - 320px) / 680));
`;

export default props => {
	return (
		<SwatchContainer>
			<Swatch category={props.category} />
			<div>{props.category}</div>
		</SwatchContainer>
	);
};
