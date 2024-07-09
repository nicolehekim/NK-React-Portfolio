import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/Header.css'
import Project from './Project';
import About from './About';
import Contact from './Contact'
import Navibar from './Navibar';

function Header() {
  return (
    <Container fluid>
      <Row className='justify-content-center text-center m-3'>
        <Col className='pb-0'>
          <h1 className='Header'>Nicole Kim</h1>
        </Col>
      </Row>
      <Row>
        <Navibar className='navBar'/>
      </Row>
    </Container>
  )
}

export default Header;
