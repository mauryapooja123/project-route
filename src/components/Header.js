import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand> Home Page</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          <Link to="/login">Login</Link>
          <Link to="/home"></Link>
          <Link to="/profile">Profile</Link>
          {/* <Link to="/login">Simpleform</Link> */}
        </Nav>
      </Navbar>
    </div>
  );
}
export default Header;
