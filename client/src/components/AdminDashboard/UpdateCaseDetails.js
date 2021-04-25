import React, { Component } from "react";
import axios from "axios";
import DashboardNavbarforAdminwithoutLogout from "../AdminDashboard/DashboardNavbarforAdminwithoutLogout";
import SideNavigationforAdminwithoutLogout from "./SideNavigationforAdminwithoutLogout";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdbreact";

class UpdateCaseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investigated_by: "",
      designation: "",
    };
  }

  componentDidMount = () => {
    this.getCaseById();
  };

  // To get case based on ID
  getCaseById() {
    axios
      .get(
        "api/addcrime/edit-status/" +
          this.props.match.params._id
      )
      .then((res) => {
        var data = res.data;
        this.setState({ cases_list: data.crime });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To update the record on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { investigated_by } = this.state;
    const { designation } = this.state;

    axios
      .put(
        "api/addcrime/updateCaseDetails/" +
          this.props.match.params._id,
        {
          investigated_by: investigated_by,
          designation: designation,
        }
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/admincases");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <DashboardNavbarforAdminwithoutLogout  />
        <SideNavigationforAdminwithoutLogout />
        <main id="content">
          <MDBContainer>
            <MDBRow className="d-flex justify-content-center" style={{height: "100vh"}}>
              <MDBCol md="6" className="align-self-center">
                <MDBCard className="my-4 ">
                  <MDBCardBody>
                    <form onSubmit={this.handleSubmit}>
                      <p className="h4 text-center py-4 font-weight-bold signup-signin-heading"  
                      style={{ display: "block", color: "#00247E", fontSize: "40px" }}>
                        Update Case Details
                      </p>
                      <div className="heading-line mb-5">
              <div className="heading-line-dot"></div>
            </div>
                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="black-text font-weight-bold"
                        style={{fontSize:"20px"}}
                      >
                        Investigated By:
                      </label>
                      <input
                        id="defaultFormCardNameEx"
                        className="form-control"
                        name="investigated_by"
                        type="text"
                        value={this.state.investigated_by}
                        onChange={this.handleChange}
                      />
                      <br />
                      <label
                        htmlFor="defaultFormCardEmailEx"
                        className="black-text font-weight-bold"
                        style={{fontSize:"20px"}}
                      >
                        Designation:
                      </label>
                      <input
                        type="email"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        name="designation"
                        type="text"
                        value={this.state.designation}
                        onChange={this.handleChange}
                      />
                      <div className="text-center py-4 mt-3">
                        <MDBBtn
                          className="btn"
                          type="submit"
                          gradient="blue"
                          style={{
                            fontSize: "18px",
                            letterSpacing: "2px",
                            borderRadius: "4px",
                            width: "200px",
                          }}
                        >
                          SUBMIT
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default UpdateCaseDetails;
