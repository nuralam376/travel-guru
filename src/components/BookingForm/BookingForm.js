import React from "react";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";

const BookingForm = ({ onSubmit, place }) => {
	const { register, handleSubmit, errors } = useForm();
	const { name } = place;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-75">
			<label htmlFor="origin">Origin</label>
			<input
				name="origin"
				ref={register({ required: true })}
				className="form-control"
				id="origin"
			/>
			{errors.origin && (
				<span className="text-danger">* This field is required</span>
			)}
			<br />
			<label htmlFor="origin">Destination</label>
			<input
				name="destination"
				defaultValue={name}
				ref={register({ required: true })}
				className="form-control"
				id="destination"
				readOnly
			/>
			{/* errors will return when field validation fails  */}
			{errors.destination && (
				<span className="text-danger">* This field is required</span>
			)}
			<br />
			<Row>
				<Col md={6}>
					<label htmlFor="from">From</label>
					<input
						type="date"
						name="from"
						ref={register({ required: true })}
						className="form-control"
						id="from"
					/>
					{errors.from && (
						<span className="text-danger">* This field is required</span>
					)}
				</Col>
				<Col md={6}>
					<label htmlFor="to">To</label>
					<input
						type="date"
						name="to"
						ref={register({ required: true })}
						className="form-control"
						id="to"
					/>
					{errors.to && (
						<span className="text-danger">* This field is required</span>
					)}
				</Col>
			</Row>
			<br />
			<input
				type="submit"
				value="Start booking"
				className="btn btn-warning w-100"
			/>
		</form>
	);
};

export default BookingForm;
