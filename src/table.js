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
	justify-content: left;
	margin: 5px;
`

const Block = styled.div`
	display: flex;
	justify-content: space-between;
`
// width: ${props => `calc(100vw/18 - 15px + ${props.blocks * 2}px + ${props.blocks * 5 * 2}px`})}


const Divider = styled.div`
	width: ${props => `calc(((100vw/18 - 15px) + 12px) * ${props.blocks})`};
`

export default props => {
	const twoRowElements = [...periodicTable.elements.slice(56, 70), ...periodicTable.elements.slice(87, 101)]
	const elements = [...periodicTable.elements.slice(0, 55), ...periodicTable.elements.slice(71, 86), ...periodicTable.elements.slice(102)]
	const renderElementsBlock = elements => elements.map(element => <Element openDetailedView={props.openDetailedView} element={element} />)

	return (
		<div>
			<TableContainer>
				<Row>
					<Block>
						<Element openDetailedView={props.openDetailedView} element={elements[0]} />
					</Block>
					<Block>
						<Divider blocks={16} />
					</Block>
					<Block>
						<Element openDetailedView={props.openDetailedView} element={elements[1]} />
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(2,4)])}
					</Block>
					<Block>
						<Divider blocks={10} />
					</Block>
					<Block>
						{renderElementsBlock([...elements.slice(4,10)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(10,12)])}
					</Block>
					<Block>
						<Divider blocks={10} />
					</Block>
					<Block>
						{renderElementsBlock([...elements.slice(12,18)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(18,36)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(36,54)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(54,54 + 18)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(87)])}
					</Block>
				</Row>
			</TableContainer>
			{/* <div style={{marginTop: "50px"}}>
				{twoRowElements.map(element => <Element twoRow element={element} />)}
			</div> */}
		</div>
)}