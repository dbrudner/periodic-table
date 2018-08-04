import React from 'react';
import periodicTable from "./PeriodicTableJSON.json"
import Element from "./element";
import styled from "styled-components";

const TableContainer = styled.div`
	padding: 1rem;
	border: 1px solid black;
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
`

export default props => {

	const twoRowElements = [...periodicTable.elements.slice(56, 70), ...periodicTable.elements.slice(87, 101)]
	const elements = [...periodicTable.elements.slice(0, 55), ...periodicTable.elements.slice(71, 86), ...periodicTable.elements.slice(102)]

	console.log(elements);
	// The dopest function I've ever written
	const columns = elements.reduce((acc, element, i) => {
		const column = 15 - (15/Math.ceil(i + 15));
		console.log(column);
		if (!acc || !acc[column]) return acc;
		acc[column].push(element);
		return acc;
	}, Array(15).fill([]))


	const renderColumns = () => {
		return columns.map(column => {
			return (
				<Column>
					{column.map(element => <Element openDetailedView={props.openDetailedView} element={element} />)}
				</Column>
			)
		})
	}

	const renderElementsBlock = elements => elements.map(element => <Element openDetailedView={props.openDetailedView} element={element} />)

	return (
		<div>
			<TableContainer>
				{renderColumns()}
			</TableContainer>
			{/* <div style={{marginTop: "50px"}}>
				{twoRowElements.map(element => <Element twoRow element={element} />)}
			</div> */}
		</div>
	)
}