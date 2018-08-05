import React, {Component} from 'react';
import Legend from "./legend";
import DetailedView from "./detailed-view";
import Table from "./table";

export default class extends Component {

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
		});
	}

	render() {
		return <React.Fragment>
			<Legend />
			{this.state.detailedViewOpen ? <DetailedView {...this.state.detailedElement} /> : <Table openDetailedView={this.openDetailedView} />}
		</React.Fragment>
	}
	
}