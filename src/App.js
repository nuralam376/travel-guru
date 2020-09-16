import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Places from "./components/Places/Places";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	return (
		<div className="App">
			<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
			</UserContext.Provider>
		</div>
	);
}

export default App;
