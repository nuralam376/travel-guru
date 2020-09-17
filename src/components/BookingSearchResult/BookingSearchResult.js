import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";

const BookingSearchResult = () => {
	const { destination } = useParams();
	const [
		loggedInUSer,
		setLoggedInUser,
		bookingDetails,
		setBookingDetails,
	] = useContext(UserContext);
	const { from, to } = bookingDetails;

	return (
		<Container>
			<Row>
				<Col md={6}>
					<p>
						{from} - {to}
					</p>
					<h3>Stay in : {destination}</h3>
					<Row>
						<Col md={6}>
							<Image
								src="/resources/Image/bgImage.png"
								thumbnail
								className="w-100"
							/>
						</Col>
						<Col md={6}>
							<h6>Light Bright airy stylish apt & safe peaceful stay</h6>
							<p>
								4 guests 2 bedrooms 2 beds 2 baths <br />
								Wifi Air conditioning kitchen
								<br />
								Cancellation flexibility available
								<br />* 4.9 (20) $34/night $167 total
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<Image
								src="/resources/Image/bgImage.png"
								thumbnail
								className="w-100"
							/>
						</Col>
						<Col md={6}>
							<h6>Light Bright airy stylish apt & safe peaceful stay</h6>
							<p>4 guests 2 bedrooms 2 beds 2 baths </p>
							<p>Wifi Air conditioning kitchen</p>
							<p>Cancellation flexibility available</p>
							<p>* 4.9 (20) $34/night $167 total</p>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<Image
								src="/resources/Image/bgImage.png"
								thumbnail
								className="w-100"
							/>
						</Col>
						<Col md={6}>
							<h6>Light Bright airy stylish apt & safe peaceful stay</h6>
							<p>4 guests 2 bedrooms 2 beds 2 baths </p>
							<p>Wifi Air conditioning kitchen</p>
							<p>Cancellation flexibility available</p>
							<p>* 4.9 (20) $34/night $167 total</p>
						</Col>
					</Row>
				</Col>
				<Col md={6} className="ml-auto">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24483353258!2d91.93268941991381!3d21.45104328440801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2z4KaV4KaV4KeN4Ka44Kas4Ka-4Kac4Ka-4Kaw!5e0!3m2!1sbn!2sbd!4v1600310571180!5m2!1sbn!2sbd"
						width="600"
						height="450"
					></iframe>
				</Col>
			</Row>
		</Container>
	);
};

export default BookingSearchResult;
