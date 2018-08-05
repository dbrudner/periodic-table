import React, { Component } from 'react';
import Table from "./table";
import DetailedView from "./detailed-view";
import {ThemeProvider} from 'styled-components';
import theme from "./theme";
import Legend from "./legend";
import Quinn from "./quinn";

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
		});
	}

	render() {
		return (
			<div>
				<ThemeProvider theme={theme}>
					<Quinn />
				</ThemeProvider>
			</div>
		);
	}
}

export default App;
