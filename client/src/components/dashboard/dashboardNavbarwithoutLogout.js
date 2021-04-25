import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { Link } from 'react-router-dom';

class NavbarPage extends Component {

  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
     <div className="dashboard-Navbar">
        <MDBNavbar expand="md" dark sticky="top" className="header-bg-color">
        <MDBNavbarBrand>
          <strong className="white-text" style={{ fontSize: "22px" }}>E-Crime System</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <Link to="/dashboard"
                style={{
                  fontSize: "18px"
                }}
                className="white-text dashboard-options"
              >Dashboard</Link>
            </MDBNavItem>
            <MDBNavItem active>
              <Link to="/"
                style={{
                  fontSize: "18px"
                }}
                className="white-text dashboard-options"
              >Home</Link>
            </MDBNavItem>
            <MDBNavItem active>
              <Link to="/report"
                style={{
                  fontSize: "18px"
                }}
                className="white-text dashboard-options"
              >Report</Link>
            </MDBNavItem>
            <MDBNavItem active>
              <Link to="/profile"
                style={{
                  fontSize: "18px"
                }}
                className="white-text dashboard-options"
              >Profile</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/dashboard"
                style={{
                  fontSize: "18px"
                }}
                className="white-text dashboard-options"
              >View Cases</Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
     </div>
    );
  }
}

export default NavbarPage;

