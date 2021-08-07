import React,{useContext} from 'react'
import {Navbar,Container,Nav,Badge} from 'react-bootstrap';
import './Header.css';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../store/user-context';

import { FaShoppingCart,FaShoppingBasket } from 'react-icons/fa';

function Header(){

    const history = useHistory();
    const currentUser = useContext(UserContext);
   
    const { isLoggedIn, getLoggedIn,cartLength } = currentUser;


    async function userLogoutHandler() {
        await axios.get('/logout');
        console.log("Logged Out Successfully");
        getLoggedIn()
        history.push('/login');
    }


    return (
        <Navbar fixed="top" className="navbar" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/home" style={{fontSize:'1.5rem'}}>
                    <Navbar.Brand><FaShoppingBasket style={{margin:'5px',marginTop:'-5px',fontSize:'1.9rem'}}/>Shopping Cart</Navbar.Brand>
                </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="/home">
                    <Nav.Link className="nav-link">
                        Home
                    </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/allproducts">
                    <Nav.Link className="nav-link">
                        Products
                        </Nav.Link>
                </LinkContainer>
                
                {
                            isLoggedIn === true &&
                    <LinkContainer to="/new">
                    <Nav.Link className="nav-link">
                        New
                    </Nav.Link>
                            </LinkContainer>
                    }
               
                       
                </Nav>
                <Nav>
                        {
                            isLoggedIn === false && <>
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
                            </>}
                        {isLoggedIn === true &&
                            <>
                            <LinkContainer to="/cart">
                                <Nav.Link className="nav-link">
                                    <FaShoppingCart /><sup style={{ backgroundColor: 'red', marginLeft: '5px', borderRadius: '3px' }}><Badge bg="danger" >{ cartLength}</Badge></sup>
                                </Nav.Link>
                            </LinkContainer>
                            <Nav.Link onClick={userLogoutHandler} className="nav-link">
                            Logout
                            </Nav.Link>
                            </>
                         }
                   
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
