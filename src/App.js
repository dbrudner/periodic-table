import React, { Component } from 'react';
import Table from "./table";
import DetailedView from "./detailed-view";

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			detailedViewOpen: false,
			detailedElement: {}
		}
	}

	openDetailedView = detailedElement => {
		console.log(detailedElement);
		this.setState({
			detailedViewOpen: true,
			detailedElement
		})
	}

	render() {
		return (
			<div>
				<h1>Quinns Table of Periodic Elements</h1>
				{this.state.detailedViewOpen ? <DetailedView {...this.state.detailedElement} /> : <Table openDetailedView={this.openDetailedView} />}
			</div>
		);
	}
}

export default App;
