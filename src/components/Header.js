import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="ms-2">Cocktail</Navbar.Brand>
          <Nav className="me-auto" className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/fav">Favorite</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
