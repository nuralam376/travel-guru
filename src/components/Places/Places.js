import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import allPlaces from "../../SampleData/places";
import PlaceImage from "../PlaceImage/PlaceImage";
import PlaceInfo from "../PlaceInfo/PlaceInfo";

const Places = () => {
	const [places] = useState(allPlaces);
	const [place, setPlace] = useState({});
	let placeId = useRef(0);
	const history = useHistory();

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

	const handleBooking = (id) => {
		history.push(`/place/${id}`);
	};

	return (
		<div className="places">
			<Container>
				<Row>
					<Col md={4}>
						<PlaceInfo place={place} handleBooking={handleBooking} />
					</Col>
					<Col md={8}>
						<Row>
							{places.map((place) => (
								<PlaceImage
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
