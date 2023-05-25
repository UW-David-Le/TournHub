import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import But from "../Button/Button";

const NavigationBar = () => {
    return (
        <Navbar className='navbar navbar-dark bg-dark'>
            <a class="navbar-brand mx-3">TournHub</a>
                <Nav className="ms-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">About</Nav.Link>
                    <Nav.Link href="">Contact</Nav.Link>
                    <a href=""><But className='me-1' label='Sign Up' color='outline-light' /></a>
                    <But label='Login' color='primary' />
                </Nav>
        </Navbar>

    );
}

export default NavigationBar;