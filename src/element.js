import React, { Component } from "react";
import styled from "styled-components";
import getBgColor from "./get-bg-color";
import { connect } from "react-redux";
import {
	ELEMENT_ADDED,
	INFO_SELECTED,
	BUILDER_SELECTED,
	ELEMENT_SELECTED
} from "./store";

const ElementContainer = styled.div`
	border: 1px solid black;
	text-align: center;
	width: ${props => `calc(100vw/18 - 4px)`};
	height: ${props => `calc(100vw/18 - 4px)`};
	display: inline-block;
	margin: 1px;
	/* margin: ${props => (props.smallScreen ? "2px" : "5px")}; */
	padding-top: ${props => (props.smallScreen ? "2px" : "4px")};
	position: relative;
	background-color: ${props => getBgColor(props)};
	color: ${props => (props.category === "diatomic nonmetal" ? "white" : "")};
	cursor: pointer;
`;

const element = props => {
	const { element } = props;
	const { symbol, atomic_mass, number, category } = element;
	const width = window.innerWidth;

	const handleClick = () => {
		if (props.mode === INFO_SELECTED) {
			props.dispatch({ type: ELEMENT_SELECTED, payload: element });
		}

		if (props.mode === BUILDER_SELECTED) {
			props.dispatch({ type: ELEMENT_ADDED, payload: element });
		}
	};

	const getFontSize = () => {
		if (width > 1200) return `calc(100vw/120)`;
		return `calc(100vw/140)`;
	};

	const getLargeFontSize = () => {
		if (width > 1200) return `calc(100vw/60)`;
		return `calc(100vw/70)`;
	};

	const getMargin = () => {
		if (width > 1200) return "5px";
		return "2px";
	};

	return (
		<ElementContainer
			{...element}
			smallScreen={window.innerWidth < 1200}
			onClick={handleClick}
		>
			<div style={{ fontSize: getFontSize() }}>{number}</div>
			<div style={{ fontSize: getLargeFontSize() }}>{symbol}</div>
			<div style={{ fontSize: getFontSize() }}>
				{atomic_mass.toFixed(4)}
			</div>
		</ElementContainer>
	);
};

export default connect(state => {
	return { mode: state.mode };
})(element);
