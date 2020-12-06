import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Routes
import HomePage from "routes/home";
import SavedPage from "routes/saved";

export default function Router(){
	return(<BrowserRouter>
		<Header />
		<div id="main">
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/saved" exact component={SavedPage} />
				<Redirect from="*" to="/" />
			</Switch>
		</div>
		<Footer />
	</BrowserRouter>);
}