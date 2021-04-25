import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar expand="md" dark sticky="top" className="header-bg-color">
        <MDBNavbarBrand>
          <strong className="white-text" style={{ fontSize: "22px" }}>E-Crime System</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <Link to="/"
                style={{
                  width: "140px",
                  letterSpacing: "1.5px",
                  fontSize: "18px"
                }}
                className="white-text home-options"
              >Home</Link>
            </MDBNavItem>
            <MDBNavItem>
              <LinkScroll
                onClick={this.handleScroll}
                to="About"
                activeClass="active"
                spy={true}
                smooth={true}
                style={{
                  letterSpacing: "1px",
                  fontSize: "18px"
                }}
                className="white-text home-options"
              >About Us</LinkScroll>
            </MDBNavItem>
            <MDBNavItem>
              <LinkScroll
                onClick={this.handleScroll}
                to="Features"
                activeClass="active"
                spy={true}
                smooth={true}
                style={{
                  letterSpacing: "1px",
                  fontSize: "18px"
                }}
                className="white-text home-options"
              >Features</LinkScroll>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/otp"
                style={{
                  letterSpacing: "1px",
                  fontSize: "18px"
                }}
                className="white-text"
              >Sign Up</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/signin"
                style={{
                  letterSpacing: "1px",
                  fontSize: "18px"
                }}
                className="white-text home-options"
              >Sign In</Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;

