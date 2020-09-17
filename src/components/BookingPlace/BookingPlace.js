import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import places from "../../SampleData/places";
import BookingForm from "../BookingForm/BookingForm";
import PlaceInfo from "../PlaceInfo/PlaceInfo";

const BookingPlace = () => {
	const { placeId } = useParams();
	const [place, setPlace] = useState({});
	const history = useHistory();
	const [
		loggedInUser,
		setLoggedInUser,
		bookingDetails,
		setBookingDetails,
	] = useContext(UserContext);

	const onSubmit = (data) => {
		setBookingDetails(data);
		history.push(`/place/search/${data.destination}`);
	};

	useEffect(() => {
		const placeInfo = places.find((place) => place.id === +placeId);

		// Shows the info of the place if available.
		if (placeInfo) {
			setPlace(placeInfo);
		} else {
			alert("No Place Found");
		}
	}, [placeId]);

	return (
		<Container>
			<Row>
				<Col md={4}>
					<PlaceInfo place={place} handleBooking={false} />
				</Col>
				<Col md={6} className="ml-auto">
					<BookingForm onSubmit={onSubmit} place={place} />
				</Col>
			</Row>
		</Container>
	);
};

export default BookingPlace;
