import React from 'react';
import '../assets/Navibar.css';
import { Col, Row, Container, Navbar, Nav, NavbarCollapse } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function Navibar () {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='p-2'>
                <Navbar.Brand className='navBar' as={Link} to="/">Portfolio</Navbar.Brand>
                    <Nav className="ms-auto navBar">
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/project">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
        </Navbar>
    )
}

export default Navibar;