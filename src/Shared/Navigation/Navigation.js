import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand as={NavLink} to="/home">
                    <h3>Car Venture</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/explore">Explore Cars</Nav.Link>
                        {
                            !user?.email ?
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link> :
                                <>
                                    <Nav.Link as={NavLink} to="/dashboard">
                                        Dashboard
                                    </Nav.Link>
                                    <Button as={NavLink} to="/home" onClick={logOut} variant="dark">Log-out</Button>
                                    <Navbar.Text className="ms-2">
                                        <a className="text-decoration-none" href="#login">{user?.displayName}</a>
                                    </Navbar.Text>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;