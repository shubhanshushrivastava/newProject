import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <>
    <div className='header-home'>
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
            <img src='images/logo-home.png' className='img-fluid' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="">Supporters (Become a Supporter)</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className='contact-btn'>Contact Us</Button>
      </Container>
    </Navbar>

    </div>
    </>
  )
}

export default Header