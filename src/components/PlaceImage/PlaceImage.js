import React from "react";
import { Col, Image } from "react-bootstrap";

const PlaceImage = ({ place, selectedPlace }) => {
	const { id, image, name } = place;
	return (
		<Col md={4}>
			<a href="/" onClick={(e) => selectedPlace(e, id)}>
				<Image src={image} thumbnail style={{ border: "none" }} />
				<span style={{ textAlign: "center", display: "block" }}>{name}</span>
			</a>
		</Col>
	);
};

export default PlaceImage;
