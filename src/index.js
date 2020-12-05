// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Routes
import HomePage from "routes/home";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

ReactDOM.render(<div id="app">
		<BrowserRouter>
			<Header />
			<div id="main">
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Redirect from="*" to="/404" />
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	</div>,
	document.getElementById('root')
);