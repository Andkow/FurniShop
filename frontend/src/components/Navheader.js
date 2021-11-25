import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingBag, FaSignInAlt } from "react-icons/fa";

const Navheader = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NiceShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/bag">
                <FaShoppingBag /> Bag
              </Nav.Link>
              <Nav.Link href="/signin">
                <FaSignInAlt /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navheader;
