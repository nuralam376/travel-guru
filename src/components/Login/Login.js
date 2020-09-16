import React, { useContext, useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { firebaseGoogleLogin } from "./firebaseLogin";
import "./Login.css";

const Login = () => {
	const { register, handleSubmit, errors } = useForm();
	const [newUserRegistration, setNewUserRegistration] = useState(false);
	const onSubmit = (data) => console.log(data);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const googleLogin = () => {
		firebaseGoogleLogin()
			.then((response) => {
				const userInfo = {
					name: response.name,
					email: response.email,
					success: true,
					error: "",
				};
				setLoggedInUser(userInfo);
			})
			.catch((error) => {
				const userInfo = {
					name: "",
					email: "",
					success: false,
					error,
				};
				setLoggedInUser(userInfo);
			});
	};

	const fbLogin = () => {
		console.log("Facebook Login");
	};

	return (
		<div className="login">
			<Container>
				<h1 className="mb-3">
					{newUserRegistration ? "Create an account" : "Login"}
				</h1>
				{loggedInUser && loggedInUser.success ? (
					<h4 className="text-success">User Logged In Successfully</h4>
				) : (
					<h4 className="error">{loggedInUser && loggedInUser.error}</h4>
				)}

				<Form onSubmit={handleSubmit(onSubmit)}>
					{newUserRegistration && (
						<>
							<Form.Control
								type="text"
								name="firstName"
								ref={register({ required: true })}
								placeholder="First Name"
							/>
							{errors.firstName && (
								<span className="text-danger">* This field is required</span>
							)}
							<br />
							<Form.Control
								type="text"
								name="lastName"
								ref={register({ required: true })}
								placeholder="Last Name"
							/>
							{errors.email && (
								<span className="text-danger">* This field is required</span>
							)}
							<br />
						</>
					)}
					<Form.Control
						type="text"
						name="email"
						ref={register({ required: true })}
						placeholder="Username or Email"
					/>
					{errors.email && (
						<span className="text-danger">* This field is required</span>
					)}
					<br />
					<Form.Control
						type="password"
						name="password"
						ref={register({ required: true })}
						placeholder="Password"
					/>
					{errors.password && (
						<span className="text-danger">* This field is required</span>
					)}
					<br />

					{newUserRegistration && (
						<>
							<Form.Control
								type="password"
								name="password"
								ref={register({ required: true })}
								placeholder="Confirm Password"
							/>
							{errors.password && (
								<span className="text-danger">* This field is required</span>
							)}
							<br />
						</>
					)}

					<Button type="submit" variant="warning" className="w-100">
						{newUserRegistration ? "Create an account" : "Login"}
					</Button>
				</Form>
				<p className="m-2">
					{newUserRegistration
						? "Already have an account? "
						: "Don't have an account? "}
					<span
						className="text-warning"
						style={{ textDecoration: "underline", cursor: "pointer" }}
						onClick={() => setNewUserRegistration(!newUserRegistration)}
					>
						{newUserRegistration ? "Login" : "Create an account"}
					</span>
				</p>
				<div>
					<h5>------------- Or ---------------- </h5>
					<p className="firebase-login" onClick={fbLogin}>
						<Image src="/resources/Icon/fb.png" className="w-25" />
						&nbsp;&nbsp; Continue With facebook
					</p>
					<p className="firebase-login" onClick={googleLogin}>
						<Image src="/resources/Icon/google.png" className="w-25" />
						&nbsp; &nbsp;Continue With Google
					</p>
				</div>
			</Container>
		</div>
	);
};

export default Login;
