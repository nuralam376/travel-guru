import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const LoginForm = ({ onSubmit, newUserRegistration }) => {
	const {
		register,
		handleSubmit,
		watch,
		errors,
		clearErrors,
		reset,
	} = useForm();

	useEffect(() => {
		clearErrors(["email", "password"]);
		reset();
	}, [newUserRegistration, clearErrors]);

	return (
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
					{errors.lastName && (
						<span className="text-danger">* This field is required</span>
					)}
					<br />
				</>
			)}
			<Form.Control
				type="text"
				name="email"
				ref={register({
					required: true,
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: "Email must be valid",
					},
				})}
				placeholder="Email"
			/>

			{errors.email && (
				<span className="text-danger">
					* {errors.email.message || "This field is required"}
				</span>
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
						name="confirmPassword"
						ref={register({
							required: true,
							validate: (value) => value === watch("password"),
						})}
						placeholder="Confirm Password"
					/>
					{errors.confirmPassword && (
						<span className="text-danger">* Passwords must be matched</span>
					)}
					<br />
				</>
			)}

			<Button type="submit" variant="warning" className="w-100">
				{newUserRegistration ? "Create an account" : "Login"}
			</Button>
		</Form>
	);
};

export default LoginForm;
