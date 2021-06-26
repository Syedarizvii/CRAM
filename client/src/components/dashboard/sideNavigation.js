import React, { Component } from "react";
import logo from "../../Images/blue-logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBtn } from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { Link as LinkScroll } from "react-scroll";
import "../../style.css";

class TopNavigation extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div className="sidebar-fixed-for-user position-fixed">
        <a href="#!" className="logo-wrapper waves-effect">
          <img alt="MDB React Logo" className="img-fluid" src={logo} />
        </a>
        <MDBListGroup className="list-group-flush">
          <Link exact={true} to="/dashboard" activeClassName="activeClass">
            <MDBListGroupItem
              style={{ backgroundColor: "#397BC7", color: "white" }}
            >
              <MDBIcon icon="chart-pie" className="mr-3" />
              Dashboard
            </MDBListGroupItem>{" "}
          </Link>

          <Link to="/" activeClassName="activeClass">
            <MDBListGroupItem
              style={{ backgroundColor: "#397BC7", color: "white" }}
            >
              <MDBIcon icon="user" className="mr-3" />
              Home
            </MDBListGroupItem>{" "}
          </Link>

          <Link to="/report" activeClassName="activeClass">
            <MDBListGroupItem
              style={{ backgroundColor: "#397BC7", color: "white" }}
            >
              <MDBIcon icon="edit" className="mr-3" />
              Report a Case
            </MDBListGroupItem>
          </Link>
          <Link to="/profile" activeClassName="activeClass">
            <MDBListGroupItem
              style={{ backgroundColor: "#397BC7", color: "white" }}
            >
              <MDBIcon icon="user-circle" className="mr-3" />
              Profile
            </MDBListGroupItem>
          </Link>
          <LinkScroll
            onClick={this.handleScroll}
            to="View"
            activeClass="active"
            spy={true}
            smooth={true}
            // style={{ color: "#2189CF" }}
            // style={{backgroundColor:"#397BC7" , color:"white"}}
          >
            <MDBListGroupItem
              style={{ backgroundColor: "#397BC7", color: "white" }}
            >
              <MDBIcon icon="eye" className="mr-3" />
              View Reported Cases
            </MDBListGroupItem>
          </LinkScroll>
          <MDBBtn
            style={{
              letterSpacing: "1.5px",
              fontSize: "18px",
            }}
            onClick={this.onLogoutClick}
            gradient="blue"
          >
            Logout
            <MDBIcon icon="sign-out-alt" className="ml-3" />
          </MDBBtn>
        </MDBListGroup>
      </div>
    );
  }
}
TopNavigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(TopNavigation);
