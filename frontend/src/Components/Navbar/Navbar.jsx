import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function AppNavbar() {
  const [active, setActive] = useState('Home'); // Track the active option

  const handleOptionClick = (option) => {
    setActive(option); // Set the clicked option as active
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" className="py-3">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="#">
          <img
            className="logo"
            src="https://t4.ftcdn.net/jpg/04/71/23/63/360_F_471236337_OGaBGaiBc85xLgHYLMXHIbC67r3RIAIP.jpg"
            alt="Logo"
          
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['HOME', 'MENU', 'MAKE A RESERVATION', 'CONTACT US'].map((option) => (
              <Nav.Link
                key={option}
                href={`#${option.toLowerCase().replace(/\s+/g, '-')}`}
                className={active === option ? 'active' : ''}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
