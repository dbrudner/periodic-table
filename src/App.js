import React, { Component } from "react";
import Table from "./table";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Quinn from "./quinn";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store";

export default () => (
	<div>
		<ThemeProvider theme={theme}>
			<Provider
				store={createStore(
					reducer,
					window.__REDUX_DEVTOOLS_EXTENSION__ &&
						window.__REDUX_DEVTOOLS_EXTENSION__()
				)}
			>
				<Quinn />
			</Provider>
		</ThemeProvider>
	</div>
);
