import React from 'react'
import Header from './Header';
import { Container } from 'react-bootstrap';
import './Layout.css';

function Layout(props) {
    return (
        <div>
            <Header />
            <main className="main-container">
                <Container>
                    {props.children}
                </Container>
            </main>
        </div>
    )
}

export default Layout;
