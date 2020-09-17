import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import places from "../../SampleData/places";

const BookingPlace = () => {
	const { placeId } = useParams();
	const [place, setPlace] = useState({});
	const { name, description } = place;

	useEffect(() => {
		const placeInfo = places.find((place) => place.id === +placeId);
		setPlace(placeInfo);
	}, [placeId]);
	return (
		<Container>
			<h1>{name}</h1>
			<p>{description}</p>
		</Container>
	);
};

export default BookingPlace;
