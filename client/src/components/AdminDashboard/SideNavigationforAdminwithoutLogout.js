import React, { Component } from 'react';
import logo from "../../Images/blue-logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import "../../style.css";

class sideNavigationforAdmin extends Component {
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
                </MDBListGroup>
            </div>
        );
    }
}

export default sideNavigationforAdmin;
