import React from "react";
import styled from "styled-components";
import { categories } from "./constants";
import LegendKey from "./legend-key";
import DetailedInfo from "./detailed-info";
import CompoundBuilder from "./compound-builder";

const Info = styled.div`
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

export default props => (
	<Info smallScreen={window.innerWidth < 1200}>
		<div>
			<Legend>
				{categories.map(category => <LegendKey category={category} />)}
			</Legend>
		</div>
		<div>
			<Button
				active={props.mode === "info"}
				onClick={() => props.setMode("info")}
			>
				Info
			</Button>
			<Button
				active={props.mode === "build"}
				onClick={() => props.setMode("build")}
			>
				Build Compound
			</Button>
			{props.mode === "info" ? (
				<DetailedInfo {...props.detailedElement} />
			) : (
				<CompoundBuilder compound={props.compound} />
			)}
		</div>
	</Info>
);
