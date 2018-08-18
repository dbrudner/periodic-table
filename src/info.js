import React from "react";
import styled from "styled-components";
import { categories } from "./constants";
import LegendKey from "./legend-key";
import DetailedInfo from "./detailed-info";
import CompoundBuilder from "./compound-builder";
import { connect } from "react-redux";
import { BUILDER_SELECTED, INFO_SELECTED } from "./store";

const InfoContainer = styled.div`
	display: flex;
	justify-content: space-around;
	position: fixed;
	left: calc(((100vw / 18 - 4px) * 2) + 9px);
	height: calc(((100vw / 18 - 4px) * 3) + 21px);
	width: calc(((100vw / 18 - 4px) * 10) + 36px);
	padding-left: 10px;
`;

const Legend = styled.div`
	display: inline-block;
	/* display: grid;
	grid-template-columns: calc((((100vw / 18 - 4px) * 10) + 36px) / 4)
	align-content: start; */
`;

const Button = styled.button`
	align-items: top;
	background-color: ${props => (props.active ? "white" : "")};
	border-style: ${props => (props.active ? "inset" : "")};
`;

const Info = props => {
	console.log(props);
	return (
		<InfoContainer smallScreen={window.innerWidth < 1200}>
			<div>
				<Legend>
					{categories.map(category => (
						<LegendKey category={category} />
					))}
				</Legend>
			</div>
			<div>
				<Button
					active={props.mode === INFO_SELECTED}
					onClick={() => props.dispatch({ type: INFO_SELECTED })}
				>
					Info
				</Button>
				<Button
					active={props.mode === BUILDER_SELECTED}
					onClick={() => props.dispatch({ type: BUILDER_SELECTED })}
				>
					Build Compound
				</Button>
				{props.mode === INFO_SELECTED ? (
					<DetailedInfo {...props.detailedElement} />
				) : (
					<CompoundBuilder compound={props.compound} />
				)}
			</div>
		</InfoContainer>
	);
};

export default connect(state => {
	return { mode: state.mode, detailedElement: state.detailedElement };
})(Info);
