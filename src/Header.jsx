import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-router-dom/NavLink";
import Link from "react-router-dom/Link"
import "./Header.css"

export default function Header() {
  return (
    <div  id="#NavigationBar">
    <Navbar style={{ background: "#2e1f22" }} expand="lg">
    <Navbar.Brand>
        <Link exact to="/" style={{ color: "white", fontFamily: "Ruthie", fontSize: "2.5rem", textDecoration: "none" }}><span id="brand">MSD</span></Link>
      </Navbar.Brand>
      <Navbar.Toggle
        style={{ background: "white", opacity: ".7" }}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><NavLink className="link" style={{ color: "white" }} exact to="/">
            Home
          </NavLink></Nav.Item>
          <Nav.Item><NavLink className="link" style={{ color: "white" }} exact to="/about">
            About the Artist
          </NavLink></Nav.Item>
          <Nav.Item><NavLink className="link" style={{ color: "white" }} exact to="/contact">
            Contact Me!
          </NavLink></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>

  );
}
