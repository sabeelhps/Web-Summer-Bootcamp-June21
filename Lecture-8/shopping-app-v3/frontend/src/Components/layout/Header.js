import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import './Header.css';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <Navbar fixed="top" className="navbar" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-link">
                               Home
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/products">
                            <Nav.Link className="nav-link">
                               Products
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products/new">
                            <Nav.Link className="nav-link">
                                New
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/login">
                            <Nav.Link  className="nav-link">
                                Login
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer  to="/register">
                            <Nav.Link className="nav-link" >
                                SignUp
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
