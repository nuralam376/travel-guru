import React from "react";
import {
	Navbar,
	Nav,
	Form,
	Button,
	FormControl,
	Container,
	Image,
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<Navbar variant="light">
				<Container>
					<Navbar.Brand
						href="#home"
						className="w-25"
						style={{ height: "50px" }}
					>
						<Image src="/resources/logo.png" fluid style={{ height: "50px" }} />
					</Navbar.Brand>
					<Form inline>
						<FormControl
							type="text"
							placeholder="Search your destination"
							className="mr-sm-1"
						/>
					</Form>
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Destination</Nav.Link>
						<Nav.Link href="#pricing">Blog</Nav.Link>
						<Nav.Link href="#pricing">Contact</Nav.Link>
						<Button variant="warning">Login</Button>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
