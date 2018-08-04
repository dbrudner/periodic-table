import React from 'react';
import periodicTable from "./PeriodicTableJSON.json"
import Element from "./element";
import styled from "styled-components";

const TableContainer = styled.div`
	padding: 1rem;
	border: 1px solid black;
`

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`

const Block = styled.div`
	display: flex;
	justify-content: space-between;
`

export default props => {

	const twoRowElements = [...periodicTable.elements.slice(56, 70), ...periodicTable.elements.slice(87, 101)]
	const elements = [...periodicTable.elements.slice(0, 55), ...periodicTable.elements.slice(71, 86), ...periodicTable.elements.slice(102)]

	console.log(elements);
	// The dopest function I've ever written
	const columns = elements.reduce((acc, element, i) => {
		const column = 15 - (15 - i);
		if (!acc || !acc[column]) return acc;
		acc[column].push(element);
		return acc;
	}, Array(15).fill([]))

	console.log(columns);

	const renderElementsBlock = elements => elements.map(element => <Element openDetailedView={props.openDetailedView} element={element} />)

	return (
		<div>
			<TableContainer>
				<Row>
					<Block>
						<Element openDetailedView={props.openDetailedView} element={elements[0]} />
					</Block>
					<Block>
						<Element openDetailedView={props.openDetailedView} element={elements[1]} />
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(2, 4)])}
					</Block>
					<Block>
						{renderElementsBlock([...elements.slice(4, 10)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(10, 12)])}
					</Block>
					<Block>
						{renderElementsBlock([...elements.slice(12, 18)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(19, 36)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(37, 54)])}
					</Block>
				</Row>
			</TableContainer>
			{/* <div style={{marginTop: "50px"}}>
				{twoRowElements.map(element => <Element twoRow element={element} />)}
			</div> */}
		</div>
	)
}