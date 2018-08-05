import React from "react";
import periodicTable from "./PeriodicTableJSON.json";
import Element from "./element";
import styled from "styled-components";

const TableContainer = styled.div`
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Row = styled.div`
	display: flex;
	justify-content: left;
`;

const Block = styled.div`
	display: flex;
	justify-content: space-between;
`;
// width: ${props => `calc(100vw/18 - 15px + ${props.blocks * 2}px + ${props.blocks * 5 * 2}px`})}

const Divider = styled.div`
	width: ${props => `calc(((100vw/18 - 4px) + 4px) * ${props.blocks})`};
`;

export default props => {
	const twoRowElements = [
		...periodicTable.elements.slice(56, 70),
		...periodicTable.elements.slice(87, 101)
	];
	const elements = [
		...periodicTable.elements.slice(0, 56),
		...periodicTable.elements.slice(70, 88),
		...periodicTable.elements.slice(102, 118)
	];
	const renderElementsBlock = elements =>
		elements.map(element => (
			<Element
				handleElementClick={props.handleElementClick}
				element={element}
			/>
		));

	const getMargin = () => {
		if (window.innerWidth > 1200) return 5;
		return 2;
	};

	return (
		<div>
			<TableContainer>
				<Row>
					<Block>
						<Element
							handleElementClick={props.handleElementClick}
							element={elements[0]}
						/>
					</Block>
					<Block>
						<Divider
							smallScreen={window.innerWidth < 1200}
							blocks={16}
						/>
					</Block>
					<Block>
						<Element
							handleElementClick={props.handleElementClick}
							element={elements[1]}
						/>
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(2, 4)])}
					</Block>
					<Block>
						<Divider
							smallScreen={window.innerWidth < 1200}
							blocks={10}
						/>
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
						<Divider
							smallScreen={window.innerWidth < 1200}
							blocks={10}
						/>
					</Block>
					<Block>
						{renderElementsBlock([...elements.slice(12, 18)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(18, 36)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(36, 54)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(54, 54 + 18)])}
					</Block>
				</Row>
				<Row>
					<Block>
						{renderElementsBlock([...elements.slice(72, 90)])}
					</Block>
				</Row>
			</TableContainer>
			{/* <div style={{marginTop: "50px"}}>
				{twoRowElements.map(element => <Element twoRow element={element} />)}
			</div> */}
		</div>
	);
};
