import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import netflixLogo from '../netflix_logo.png'; 
import kidsIcon from '../assets/img/kids_icon.png'; 

const MyNavbar = function () {
  return (
    <Navbar className= "nav" bg="dark" expand="lg" variant="dark">
      <div className="container-fluid">
        <Navbar.Brand className="navbar-brand logoNetflix" href="#">
          <img className="w-100" src={netflixLogo} alt="logo netflix" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              <strong>TV Shows</strong>
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#" className="text-light mx-2">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link className="text-light mx-2">Kids</Nav.Link>
            <Nav.Link href="#" className="text-light mx-2">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <NavDropdown 
              title={<img className="kids" src={kidsIcon} alt="Kids icon" />} // Usa l'icona importata
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
