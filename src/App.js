import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Places from "./components/Places/Places";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import BookingPlace from "./components/BookingPlace/BookingPlace";
import BookingSearchResult from "./components/BookingSearchResult/BookingSearchResult";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const [bookingDetails, setBookingDetails] = useState({});
	return (
		<div className="App">
			<UserContext.Provider
				value={[
					loggedInUser,
					setLoggedInUser,
					bookingDetails,
					setBookingDetails,
				]}
			>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Places />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/place/:placeId">
							<BookingPlace />
						</Route>
						<PrivateRoute exact path="/place/search/:destination">
							<BookingSearchResult />
						</PrivateRoute>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</UserContext.Provider>
		</div>
	);
}

export default App;
