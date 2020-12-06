// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Store
import { StateProvider } from "store";

// Router
import Router from "./router";

// Styles
import "style/index.sass";

ReactDOM.render(
	<StateProvider>
		<div id="app">
			<Router />
		</div>
	</StateProvider>,
	document.getElementById("root")
);