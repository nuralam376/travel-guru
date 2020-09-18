import React, { useContext, useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import LoginForm from "../LoginForm/LoginForm";
import {
	firebaseSignup,
	firebaseProviderLogin,
	firebaseUpdateUserName,
	firebaseCustomLogin,
} from "./firebaseLogin";
import "./Login.css";

const Login = () => {
	const [newUserRegistration, setNewUserRegistration] = useState(false);
	const [createdUserSuccess, setCreatedUserSuccess] = useState({});
	const history = useHistory();
	const location = useLocation();

	const { from } = location.state || { from: { pathname: "/" } };

	const onSubmit = (data) => {
		const { firstName, lastName, email, password } = data;

		if (newUserRegistration) {
			firebaseSignup(email, password).then((response) => {
				const name = `${firstName} ${lastName}`;
				// Adds name
				if (response.success) {
					firebaseUpdateUserName(name);
					setNewUserRegistration(false);
				}
				setCreatedUserSuccess({
					success: response.success,
					error: response.error,
				});
			});
		} else {
			firebaseCustomLogin(email, password).then((response) => {
				const userInfo = {
					name: response.name,
					email: response.email,
					success: response.success,
					error: response.error,
				};
				if (response.success) {
					setLoggedInUser(userInfo);
					history.replace(from);
				} else setCreatedUserSuccess(userInfo);
			});
		}
	};

	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const login = (provider) => {
		firebaseProviderLogin(provider)
			.then((response) => {
				const userInfo = {
					name: response.name,
					email: response.email,
					success: response.success,
					error: response.error,
				};
				setLoggedInUser(userInfo);
				history.replace(from);
			})
			.catch((response) => {
				const userInfo = {
					name: response.name,
					email: response.email,
					success: response.success,
					error: response.error,
				};
				setLoggedInUser(userInfo);
			});
	};

	const handleLoginSignup = () => {
		setNewUserRegistration(!newUserRegistration);
		setCreatedUserSuccess({});
	};

	return (
		<div className="login">
			{loggedInUser && loggedInUser.name ? (
				<Container>
					<h1>Welcome {loggedInUser.name}</h1>
					<p>You are now logged in.</p>
				</Container>
			) : (
				<Container>
					<h1 className="mb-3">
						{newUserRegistration ? "Create an account" : "Login"}
					</h1>
					{createdUserSuccess && createdUserSuccess.success ? (
						<h4 className="text-success">User created Successfully</h4>
					) : (
						<p className="text-danger">
							{createdUserSuccess && createdUserSuccess.error}
						</p>
					)}
					{loggedInUser && loggedInUser.success ? (
						<p className="text-success">User Logged In Successfully</p>
					) : (
						<p className="text-danger">{loggedInUser && loggedInUser.error}</p>
					)}

					<LoginForm
						newUserRegistration={newUserRegistration}
						onSubmit={onSubmit}
					/>
					<p className="m-2">
						{newUserRegistration
							? "Already have an account? "
							: "Don't have an account? "}
						<span
							className="text-warning"
							style={{ textDecoration: "underline", cursor: "pointer" }}
							onClick={() => handleLoginSignup()}
						>
							{newUserRegistration ? "Login" : "Create an account"}
						</span>
					</p>
					<div>
						<h5>------------- Or ---------------- </h5>
						<p className="firebase-login" onClick={() => login("facebook")}>
							<Image src="/resources/Icon/fb.png" className="w-25" />
							&nbsp;&nbsp; Continue With facebook
						</p>
						<p className="firebase-login" onClick={() => login("google")}>
							<Image src="/resources/Icon/google.png" className="w-25" />
							&nbsp; &nbsp;Continue With Google
						</p>
					</div>
				</Container>
			)}
		</div>
	);
};

export default Login;
