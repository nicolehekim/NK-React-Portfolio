import React from 'react';
import '../assets/Navibar.css';
import { Col, Row, Container, Navbar, Nav, NavbarCollapse } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function Navibar () {
    return (
        <Navbar bg="white" data-bs-theme="light" className='p-2'>
                <Navbar.Brand className='navBar' as={Link} to="/">Portfolio</Navbar.Brand>
                    <Nav className="ms-auto navBar">
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="/project">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
        </Navbar>
    )
}

export default Navibar;