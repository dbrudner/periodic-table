import React, { Component } from "react";
import Table from "./table";
import DetailedView from "./detailed-view";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Quinn from "./quinn";

export default () => (
	<div>
		<ThemeProvider theme={theme}>
			<Quinn />
		</ThemeProvider>
	</div>
);
