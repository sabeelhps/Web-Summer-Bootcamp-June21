import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar fixed="top" className="navbar" collapseOnSelect expand="lg" variant="dark">
            <Container>
                {/* <LinkContainer> */}
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                {/* </LinkContainer> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <LinkContainer> */}
                            <Nav.Link >
                                <Link className="nav-link" to="/">Home</Link>
                            </Nav.Link>
                        {/* </LinkContainer> */}

                        {/* <LinkContainer> */}
                            <Nav.Link >
                                <Link  className="nav-link" to="/products">Products</Link>
                            </Nav.Link>
                        {/* </LinkContainer> */}
                        {/* <LinkContainer> */}
                            <Nav.Link >
                                <Link  className="nav-link" to="/products/new">New</Link>
                            </Nav.Link>
                        {/* </LinkContainer> */}
                    </Nav>
                    <Nav>
                        {/* <LinkContainer> */}
                            <Nav.Link  >
                                <Link  className="nav-link" to="/login">Login</Link>
                            </Nav.Link>
                        {/* </LinkContainer> */}
                        {/* <LinkContainer> */}
                            <Nav.Link  >
                            <Link  className="nav-link" to="/register">Sign Up</Link>
                            </Nav.Link>
                        {/* </LinkContainer> */}
                    </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
