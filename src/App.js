import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Places from "./components/Places/Places";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Places />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
