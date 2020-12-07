import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Routes
import HomePage from "routes/home";
import SavedPage from "routes/saved";
import ComicsPage from "routes/comics";
import EventsPage from "routes/events";

export default function Router(){
	return(<BrowserRouter>
		<Header />
		<div id="main">
			<Switch>
				<Route path="/saved" exact component={SavedPage} />
				<Route path="/comics" exact component={ComicsPage} />
				<Route path="/events" exact component={EventsPage} />
				<Route path="/heroes" exact component={HomePage} />
				<Redirect from="*" to="/heroes" />
			</Switch>
		</div>
		<Footer />
	</BrowserRouter>);
}