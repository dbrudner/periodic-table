import React, {Component } from 'react';
import styled from "styled-components";

const ElementContainer = styled.div`
	border: 1px solid black;
	text-align: center;
	width: calc(100vw/18 - 15px);
	height: calc(100vw/18 - 15px);
	display: inline-block;
	margin: 5px;
	position: relative;
`

export default props => {
	const { openDetailedView, element } = props;
	const { symbol, atomic_mass, number } = element;
	const width = window.innerWidth
	
	const handleClick = () => {
		// openDetailedView(element);
	}


	const getFontSize = () => {
		if (width > 1200) return `calc(100vw/120)`
		return `calc(100vw/140)`
	}

	const getLargeFontSize = () => {
		if (width > 1200) return `calc(100vw/60)`
		return `calc(100vw/70)`
	}

	return (
		<ElementContainer onClick={handleClick}>
			<div style={{fontSize: getFontSize()}}>{number}</div>
			<div style={{fontSize: getLargeFontSize()}}>{symbol}</div>
			<div style={{fontSize: getFontSize()}}>{(atomic_mass).toFixed(4)}</div>
		</ElementContainer>
	)
}