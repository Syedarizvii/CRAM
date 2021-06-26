import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBBtn
} from "mdbreact";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardNavbarforAdminwithoutLogout from "../AdminDashboard/DashboardNavbarforAdminwithoutLogout";
import SideNavigationforAdminwithoutLogout from "./SideNavigationforAdminwithoutLogout";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases_list: [],
      case: [],
      loading: true,
      cat: "",
    };
  }

  getData() {
    axios.get("api/addcrime/viewcrimes").then((res) => {
      var data = res.data;
      this.setState({ case: data.crime, cases_list: data.crime });
    });
    this.state.loading = false;
  }

  componentDidMount() {
    this.getData();
  }
  
  // Filter
  filteringName = (e) => {
    let categ = e.target.value;
    if (categ === "all") {
      this.setState({
        cat: categ,
        case: this.state.cases_list,
      });
    } else {
      this.setState({
        cat: categ,
        case: this.state.cases_list.filter((items) => {
          return items.Crime_type === e.target.value;
        }),
      });
    }
  };

  render() {
    return (
      <div id="View">
        <DashboardNavbarforAdminwithoutLogout />
        <SideNavigationforAdminwithoutLogout />
        <main id="content">
          <h4
            style={{
              color: "#00247E",
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "Dancing Script",
            }}
            className="font-weight-bold signup-signin-heading pt-5"
          >
            All Reported Cases
          </h4>
          <div className="heading-line mb-5">
          <div className="heading-line-dot"></div>
        </div>
            <div style={{textAlign:"center"}}>
            <select
              value={this.cat}
              onChange={this.filteringName}
              style={{
                border: "4px solid blue",
              }}
              className="custom-selectt"
            >
              <option value="all">All</option>
              <option value="Snatching">Snatching</option>
              <option value="Robbery">Robbery</option>
              <option value="Corruption">Corruption</option>
              <option value="illegal Construction">Illegal Construction</option>
              <option value="Stolen Vehicle">Stolen Vehicle</option>
              <option value="Domestic Violence">Domestic Violence</option>
              <option value="Suspicious Item">Suspicious Item</option>
              <option value="Abuse">Abuse</option>
            </select>
          </div>
          {this.state.loading === true ? (
            <div
              class="d-flex justify-content-center"
              style={{ marginTop: "8%" }}
            >
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : this.state.case.filter((items) => items.Crime_type).length > 0 ? (
            this.state.case.map((item) => (
              <MDBContainer>
                <MDBCard
                  className="note note-primary mx-2 my-4 View-Cards"
                  // style={{
                  //   boxShadow: "7px 7px 5px 0px rgba(50, 50, 50, 0.75)",
                  // }}
                >
                  <h6
                    style={{ color: "#00247E", textDecoration: "underline" }}
                    className="font-weight-bold"
                  >
                    Complaint Details
                  </h6>
                  <MDBCardBody className="Card-Body">
                    <MDBCardText>
                      <MDBRow className="p-1">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Reported By: </strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6">{item.reportedby}</MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow className="p-1">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Reported Date:</strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6">{item.Reported_Date}</MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow className="p-1">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Occurrence Date:</strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6">{item.Ocurence_Date}</MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow className="p-1">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Crime Type:</strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6">{item.Crime_type}</MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow className="p-1">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Location:</strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6">{item.location}</MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow className="p-1">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Description:</strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6">{item.description}</MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow className="p-1 ">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Case Status:</strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6" className="red-text">
                          {item.status}
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow className="p-1">
                        <MDBCol size="5" sm="6" xs="6" md="6">
                          <strong>Crime Scene:</strong>
                        </MDBCol>
                        <MDBCol  md="3">
                          <img
                            height="250"
                            width="270"
                            src={item.file}
                            alt="crime scene"
                            className="img-responsive"
                          />
                        </MDBCol>
                      </MDBRow>
                      <br />
                      <br />
                      <MDBRow className="text-center">
                        <br />
                        <MDBCol>
                            <Link
                              to={"edit-status/" + item._id}
                              style={{
                                color: "white",
                                fontSize: "15px",
                                letterSpacing: "1px",
                                wordSpacing: "4px",
                              }}
                              className="btn btn-primary"
                            >
                             Edit Status
                            </Link>
                            <Link
                              to={"update-case-history/" + item._id}
                              style={{
                                color: "white",
                                fontSize: "15px",
                                letterSpacing: "1px",
                                wordSpacing: "4px",

                              }}
                              className="btn btn-primary"
                            >
                              Enter Case Details
                            </Link>
                            <Link
                              to={"viewcase/" + item._id}
                              style={{
                                color: "white",
                                fontSize: "15px",
                                letterSpacing: "1px",
                                wordSpacing: "4px",
                              }}
                              className="btn btn-primary"
                            >
                              Case Details
                            </Link>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBContainer>
            ))
          ) : (
            <h1
              style={{ fontSize: "2vw", marginTop: "10%" }}
              className="font-weight-bold"
            >
              {" "}
              No results found
            </h1>
          )}
        </main>
      </div>
    );
  }
}

View.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(View);
