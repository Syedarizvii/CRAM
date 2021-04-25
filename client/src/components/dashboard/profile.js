import React, { Component } from "react";
import {
  MDBFreeBird,
  MDBContainer,
  MDBEdgeHeader,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Routes from "./Routes";
import { logoutUser } from "../../actions/authActions";
import DashboardNavbarwithoutLogout from "./dashboardNavbarwithoutLogout";
import SidenavbarwithoutLogout from "./sidenavbarwithoutLogout";

class Profile extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <DashboardNavbarwithoutLogout />
        <SidenavbarwithoutLogout />
        <main id="content" className="p-5">
          <Routes />
          <MDBContainer className="mt-3">
            <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
            <MDBFreeBird>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="8"
                  className="mx-auto float-none white z-depth-1"
                >
                  <MDBCardBody>
                    <div>
                      <div className="row">
                        <div
                          className="landing-copy col s12 center-align responsive-profile"
                          style={{
                            fontSize: "23px",
                            // fontFamily: "Lato",
                            fontWeight: "bold",
                          }}
                        >
                          <h4
                            style={{
                              color: "#00247E",
                              textAlign: "center",
                              fontSize: "60px",
                            }}
                            className="font-weight-bold signup-signin-heading"
                          >
                            Your Profile Details
                          </h4>
                          <div className="heading-line">
                            <div className="heading-line-dot"></div>
                          </div>
                          <br />
                          <p>
                            <MDBRow className="p-4">
                              <MDBCol size="5">
                                <MDBIcon
                                  icon="user-alt"
                                  className="profile-Icon mr-3"
                                />
                                Name:
                              </MDBCol>
                              <MDBCol size="7">{user.name}</MDBCol>
                            </MDBRow>
                            <MDBRow className="p-4">
                              <MDBCol size="5">
                                <MDBIcon
                                  icon="city"
                                  className="profile-Icon mr-3"
                                />
                                City:
                              </MDBCol>
                              <MDBCol size="7">{user.city}</MDBCol>
                            </MDBRow>{" "}
                            <MDBRow className="p-4">
                              <MDBCol size="5">
                                <MDBIcon
                                  far
                                  icon="envelope"
                                  className="profile-Icon mr-3"
                                />
                                Email
                              </MDBCol>
                              <MDBCol size="7">{user.email}</MDBCol>
                            </MDBRow>{" "}
                            <MDBRow className="p-4">
                              <MDBCol>
                                <MDBIcon
                                  icon="mobile-alt"
                                  className="profile-Icon mr-2"
                                />
                                Phone Number:
                              </MDBCol>
                              <MDBCol size="7">{user.phone_no}</MDBCol>
                            </MDBRow>{" "}
                            <MDBRow className="p-4">
                              <MDBCol size="5">
                                <MDBIcon
                                  far
                                  icon="address-card"
                                  className="profile-Icon mr-3"
                                />
                                NIC:
                              </MDBCol>
                              <MDBCol size="7">{user.nic}</MDBCol>
                            </MDBRow>
                          </p>
                        </div>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBFreeBird>
          </MDBContainer>
        </main>
      </div>
    );
  }
}
Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Profile);
