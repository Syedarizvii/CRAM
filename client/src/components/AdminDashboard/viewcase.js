
import React, { Component } from "react";
import axios from "axios";
import DashboardNavbarforAdminwithoutLogout from "../AdminDashboard/DashboardNavbarforAdminwithoutLogout";
import SideNavigationforAdminwithoutLogout from "./SideNavigationforAdminwithoutLogout";
import { MDBRow, MDBCol, MDBCardText, MDBCard, MDBCardBody } from "mdbreact";

class ViewCaseDetails extends Component {
  constructor(props) {
    super(props);
 
  }
  componentDidMount = () => {
    this.getCaseById();
  };

  // To get Case based on ID
  getCaseById() {
    axios
      .get(
        "api/addcrime/editstatus/" +
          this.props.match.params._id
      )
      .then((response) => {
        this.setState({
          designation: response.data.designation,
          investigated_by: response.data.investigated_by,
          status: response.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <DashboardNavbarforAdminwithoutLogout/>
        <SideNavigationforAdminwithoutLogout />
        <main id="content">
          <div className="container">
            <p
              className="h4 text-center pt-5 font-weight-bold signup-signin-heading"
              style={{ display: "block", color: "#00247E", fontSize: "40px" }}
            >
              Case Details
            </p>
            <div className="heading-line mb-5">
              <div className="heading-line-dot"></div>
            </div>
            <MDBCard
              className="note note-primary mx-3 my-4"
              style={{
                boxShadow: "7px 7px 5px 0px rgba(50, 50, 50, 0.75)",
              }}
            >
              <MDBCardBody>
                <MDBCardText>
                  <MDBRow className="p-1">
                    <MDBCol size="6">
                      <strong >
                        {" "}
                        Investigated By :{" "}
                      </strong>
                    </MDBCol>
                    <MDBCol size="6" >
                      {this.state.investigated_by}{" "}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow className="p-1">
                    <MDBCol size="6">
                      <strong >
                        {" "}
                        Designation :{" "}
                      </strong>
                    </MDBCol>
                    <MDBCol size="6" >
                      {this.state.designation}{" "}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow className="p-1">
                    <MDBCol size="6">
                      <strong >
                        {" "}
                        Case Status :{" "}
                      </strong>
                    </MDBCol>
                    <MDBCol size="6" >
                      {this.state.status}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </main>
      </div>
    );
  }
}

export default ViewCaseDetails;
