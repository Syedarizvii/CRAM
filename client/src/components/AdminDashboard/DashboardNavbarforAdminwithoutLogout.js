import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";

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
            <MDBNavItem>
              <Link to="/admincases"
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

