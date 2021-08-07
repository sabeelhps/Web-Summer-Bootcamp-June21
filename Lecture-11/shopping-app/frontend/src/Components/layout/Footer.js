import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    

    return (
        <footer>
            <div className="footer">
            <div >
                <h6>About</h6>
                <ul>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Career</Link></li>
                    <li><Link to="#">Press</Link></li>
                </ul>
            </div>
            <hr/>
            <div>
                <h6>About</h6>
                <ul>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Career</Link></li>
                    <li><Link to="#">Press</Link></li>
                </ul>
            </div>
            <hr/>
            <div>
                <h6>About</h6>
                <ul>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Career</Link></li>
                    <li><Link to="#">Press</Link></li>
                    </ul>
                </div>
            </div>
            <div className="terms">
                <p>Shopping Cart &copy; 2021</p>
            </div>
        </footer>
    )
}


export default Footer;
