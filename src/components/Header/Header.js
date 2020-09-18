import React, { useContext } from "react";
import {
	Navbar,
	Nav,
	Form,
	Button,
	FormControl,
	Container,
	Image,
	Row,
	Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { firebaseLogout } from "../Login/firebaseLogin";
import "./Header.css";

const Header = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const firebaseUserLogout = () => {
		firebaseLogout();
		setLoggedInUser({});
	};

	return (
		<div className="header">
			<Navbar variant="light">
				<Container>
					<Row>
						<Col xs={12} sm={12} md={12} lg={6}>
							<Row>
								<Col xs={12} sm={12} md={12} lg={4}>
									<Navbar.Brand className="w-50 logo">
										<Image src="/resources/logo.png" fluid />
									</Navbar.Brand>
								</Col>
								<Col xs={12} sm={12} md={12} lg={8}>
									<Form inline>
										<FormControl
											type="text"
											placeholder="Search your destination"
											className="mr-sm-1"
										/>
									</Form>
								</Col>
							</Row>
						</Col>
						<Col xs={12} sm={12} md={12} lg={6}>
							<Nav className="nav">
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
								{loggedInUser && loggedInUser.name ? (
									<>
										<Nav.Link>{loggedInUser.name}</Nav.Link>
										<Button variant="danger" onClick={firebaseUserLogout}>
											Logout
										</Button>
									</>
								) : (
									<Link to="/login" className="nav-link">
										<Button variant="warning">Login</Button>
									</Link>
								)}
							</Nav>
						</Col>
					</Row>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
