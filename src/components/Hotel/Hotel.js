import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const Hotel = ({ hotel }) => {
	const { name, description, image } = hotel;
	return (
		<div
			style={{
				border: "1px solid #8BC34A",
				padding: "5px 10px",
				margin: "10px auto",
				borderRadius: "10px",
			}}
		>
			<Row>
				<Col md={6}>
					<Image src={image} thumbnail className="w-100" />
					<h4 style={{ textAlign: "center" }}>{name}</h4>
				</Col>
				<Col md={6}>
					<p>
						<small>{description}</small>
					</p>
				</Col>
			</Row>
		</div>
	);
};

export default Hotel;
