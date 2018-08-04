import React, {Component } from 'react';
import styled from "styled-components";

const ElementContainer = styled.div`
	border: 1px solid black;
	text-align: center;
	width: 4rem;
	display: inline-block;
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
			<div style={{fontSize: "2.4rem"}}>{symbol}</div>
			<div>{(atomic_mass).toFixed(4)}</div>
		</ElementContainer>
	)
}