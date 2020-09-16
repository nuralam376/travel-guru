import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";

const Places = () => {
	return (
		<div className="places">
			<Container>
				<Row>
					<Col md={4}>
						<h1>Cox's Bazar</h1>
						<p style={{ textAlign: "justify" }}>
							The Sundarbans is a mangrove area in the delta formed by the
							confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay
							of Bengal. It spans from the Hooghly River in India's state of
							West Bengal to the Baleswar River in Bangladesh. It comprises
							closed and open mangrove forests, agriculturally used land
						</p>
						<Button variant="warning">Booking</Button>
					</Col>
					<Col md={8}>
						<Row>
							<Col md={4}>
								<Image src="/resources/Image/Sajek.png" thumbnail />
							</Col>
							<Col md={4}>
								<Image src="/resources/Image/Sajek.png" thumbnail />
							</Col>
							<Col md={4}>
								<Image src="/resources/Image/Sajek.png" thumbnail />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Places;
