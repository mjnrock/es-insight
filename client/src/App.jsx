import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "./routes/package";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/auth" component={ (router) => <Routes.Authentication Router={ router } /> } />
					
					<Route exact path="/" component={ (router) => <Routes.Authentication Router={ router } /> } />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default connect()(App);