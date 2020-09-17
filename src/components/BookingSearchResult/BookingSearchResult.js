import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import places from "../../SampleData/places";
import Hotel from "../Hotel/Hotel";

const BookingSearchResult = () => {
	const { destination } = useParams();
	const [hotels, setHotels] = useState([]);
	const history = useHistory();

	const [
		loggedInUSer,
		setLoggedInUser,
		bookingDetails,
		setBookingDetails,
	] = useContext(UserContext);
	const { from, to } = bookingDetails;

	useEffect(() => {
		const placeInfo = places.find((place) => place.name === destination);

		// Shows the details of the hotel if found. Otherwise, redirects to homepage
		if (placeInfo) {
			setHotels(placeInfo.hotels);
		} else {
			alert("No Hotel found in this place");
			history.push("/");
		}
	}, []);

	return (
		<Container>
			<Row>
				<Col md={6}>
					<p>
						{from} - {to}
					</p>
					<h3>Stay in : {destination}</h3>
					{hotels.map((hotel) => (
						<Hotel key={hotel.id} hotel={hotel} />
					))}
				</Col>
				<Col md={6} className="ml-auto">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24483353258!2d91.93268941991381!3d21.45104328440801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2z4KaV4KaV4KeN4Ka44Kas4Ka-4Kac4Ka-4Kaw!5e0!3m2!1sbn!2sbd!4v1600310571180!5m2!1sbn!2sbd"
						width="600"
						height="500"
					></iframe>
				</Col>
			</Row>
		</Container>
	);
};

export default BookingSearchResult;
