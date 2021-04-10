
import React from "react";
import {AmplifySignOut} from '@aws-amplify/ui-react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'; 

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/software">View Software</Nav.Link>
            <Nav.Link href="/software">View Companies</Nav.Link>
            <Nav.Link href="/software">View Contracts</Nav.Link>
            <NavDropdown title="Administration" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Users">Admin Users</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <AmplifySignOut />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;