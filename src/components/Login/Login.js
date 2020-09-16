import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";

const Login = () => {
	const { register, handleSubmit, errors } = useForm();
	const [newUserRegistration, setNewUserRegistration] = useState(false);
	const onSubmit = (data) => console.log(data);

	return (
		<div className="login">
			<Container>
				<h1>Login</h1>
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
						? "Don't have an account? "
						: "Already have an account? "}
					<span
						className="text-warning"
						style={{ textDecoration: "underline", cursor: "pointer" }}
						onClick={() => setNewUserRegistration(!newUserRegistration)}
					>
						{newUserRegistration ? "Create an account" : "Login"}
					</span>
				</p>
			</Container>
		</div>
	);
};

export default Login;
