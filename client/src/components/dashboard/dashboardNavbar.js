import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";

class NavbarPage extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
};
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
            <MDBNavItem>
              <button 
                onClick={this.onLogoutClick}
                style={{
                  fontSize: "18px",
                  border:"none",
                  backgroundColor:"#00247E"
                }}
                className="white-text"
              >Logout</button>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
     </div>
    );
  }
}

NavbarPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavbarPage);

