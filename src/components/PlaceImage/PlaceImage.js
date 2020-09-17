import React from "react";
import { Col, Image } from "react-bootstrap";

const PlaceImage = ({ place, selectedPlace }) => {
	const { id, image } = place;
	return (
		<Col md={4}>
			<a href="/" onClick={(e) => selectedPlace(e, id)}>
				<Image src={image} thumbnail />
			</a>
		</Col>
	);
};

export default PlaceImage;
