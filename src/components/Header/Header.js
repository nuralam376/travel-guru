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
import { Link } from "react-router-dom";
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
						<Link to="/" className="nav-link">
							Home
						</Link>
						<Link to="/" className="nav-link">
							Destination
						</Link>
						<Link to="/" className="nav-link">
							Blog
						</Link>
						<Link to="/" className="nav-link">
							Contact
						</Link>
						<Link to="/login" className="nav-link">
							<Button variant="warning">Login</Button>
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
