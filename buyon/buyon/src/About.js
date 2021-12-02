import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"

function About() {
    return (
        <div>
            <div>
            <Link to="/">
                <img className="about_logo"
                src="https://media.istockphoto.com/vectors/a-trolley-shopping-cart-logo-icon-design-shop-symbol-vector-vector-id1168536689"
                />
            </Link>
            </div>
            <div className="about">
                <h1>About Us</h1>
            </div>
            <div className="about_container">
                At BuyOn, we are dedicated on selling high quality products to our online customers.
                All our products go through rigorous 20-point quality inspection process before they 
                are shipped to our valuable customers. We really appreaciate your buisness.
            </div>
            <div className="contact">
                email: pb3731@truman.edu
            </div>
        </div>
    )
}

export default About
