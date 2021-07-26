import React from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="light"
      >
        <Container>
          <Navbar.Brand href="#">Campus Recruitment System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Vacancies</Nav.Link>
              <Nav.Link href="#">Profile</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="info">Post Job</Button>
              <Button variant="outline-dark" style={{ marginLeft: "30px" }}>
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
