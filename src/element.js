import React, {Component } from 'react';
import styled from "styled-components";

const ElementContainer = styled.div`
	border: 1px solid black;
	text-align: center;
	width: calc(100vw/18 - 15px);
	height: calc(100vw/18 - 15px);
	display: inline-block;
	margin: 5px;
`

export default props => {
	const { openDetailedView, element } = props;
	const { symbol, atomic_mass, number } = element;

	const handleClick = () => {
		openDetailedView(element);
	}

	return (
		<ElementContainer onClick={handleClick}>
			<div>{number}</div>
			<div style={{fontSize: ".7rem"}}>{symbol}</div>
			<div style={{fontSize: ".3rem"}}>{(atomic_mass).toFixed(4)}</div>
		</ElementContainer>
	)
}