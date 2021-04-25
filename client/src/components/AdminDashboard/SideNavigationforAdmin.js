import React, { Component } from 'react';
import logo from "../../Images/blue-logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon , MDBBtn} from 'mdbreact';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";
import "../../style.css";

class sideNavigationforAdmin extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        return (
            <div className="sidebar-fixed-for-admin position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="MDB React Logo" className="img-fluid" src={logo} />
                </a>
                <MDBListGroup className="list-group-flush">
                    <Link exact={true} to="/dashboard" activeClassName="activeClass">
                        <MDBListGroupItem style={{backgroundColor:"#397BC7" , color:"white"}}>
                            <MDBIcon icon="chart-pie" className="mr-3" />
                        Dashboard
                    </MDBListGroupItem>
                    </Link>
                    <Link to="/" activeClassName="activeClass">
                        <MDBListGroupItem style={{backgroundColor:"#397BC7" , color:"white"}}>
                            <MDBIcon icon="user" className="mr-3" />
                        Home
                    </MDBListGroupItem>
                    </Link>
                    <Link to="/admincases" activeClassName="activeClass">
                        <MDBListGroupItem style={{backgroundColor:"#397BC7" , color:"white"}}>
                            <MDBIcon icon="user" className="mr-3" />
                        View Cases
                    </MDBListGroupItem>
                    </Link>
                    <MDBBtn
                        style={{
                            letterSpacing: "1.5px",
                            fontSize:"18px"
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

sideNavigationforAdmin.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(sideNavigationforAdmin);
