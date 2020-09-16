import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Places from "./components/Places/Places";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Places />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
