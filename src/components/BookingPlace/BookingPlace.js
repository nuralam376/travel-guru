import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import places from "../../SampleData/places";

const BookingPlace = () => {
	const { placeId } = useParams();
	const [place, setPlace] = useState({});
	const { name, description } = place;

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	useEffect(() => {
		const placeInfo = places.find((place) => place.id === +placeId);
		setPlace(placeInfo);
	}, [placeId]);
	return (
		<Container>
			<Row>
				<Col md={4}>
					<h1>{name}</h1>
					<p style={{ textAlign: "justify" }}>{description}</p>
				</Col>
				<Col md={6} className="ml-auto">
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
				</Col>
			</Row>
		</Container>
	);
};

export default BookingPlace;
