import React, {Component } from 'react';
import styled from "styled-components";



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

	const getMargin = () => {
		if (width > 1200) return "5px";
		return "2px";
	}

	const ElementContainer = styled.div`
		border: 1px solid black;
		text-align: center;
		width: ${props => `calc(100vw/18 - ${props.smallScreen ? 10 : 15}px)`};
		height: ${props => `calc(100vw/18 - ${props.smallScreen ? 10 : 15}px)`};
		display: inline-block;
		margin: ${props => props.smallScreen ? "2px" : "5px"};
		position: relative;
	`

	return (
		<ElementContainer smallScreen={window.innerWidth < 1200} onClick={handleClick}>
			<div style={{fontSize: getFontSize()}}>{number}</div>
			<div style={{fontSize: getLargeFontSize()}}>{symbol}</div>
			<div style={{fontSize: getFontSize()}}>{(atomic_mass).toFixed(4)}</div>
		</ElementContainer>
	)
}