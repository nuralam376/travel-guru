import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import allPlaces from "../../SampleData/places";
import Place from "../Place/Place";

const Places = () => {
	const [places] = useState(allPlaces);
	const [place, setPlace] = useState({});
	const { name, description } = place;
	let placeId = useRef(0);

	useEffect(() => {
		selectedPlaceInfo(++placeId.current);
	}, []);

	// Image carousel setup every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			if (placeId.current === 3) {
				placeId.current = 0;
			}
			selectedPlaceInfo(++placeId.current);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const selectedPlace = (event, id) => {
		event.preventDefault();
		placeId.current = id;
		selectedPlaceInfo(placeId.current);
	};

	const selectedPlaceInfo = (id) => {
		const placeInfo = allPlaces.find((place) => place.id === id);
		setPlace(placeInfo);
	};

	return (
		<div className="places">
			<Container>
				<Row>
					<Col md={4}>
						<h1>{name}</h1>
						<p style={{ textAlign: "justify" }}>{description}</p>
						<Button variant="warning">Booking</Button>
					</Col>
					<Col md={8}>
						<Row>
							{places.map((place) => (
								<Place
									key={place.id}
									place={place}
									selectedPlace={selectedPlace}
								/>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Places;
