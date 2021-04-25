import React, { Component } from "react";
import axios from "axios";
import { MDBBtn } from "mdbreact";
import DashboardNavbarforAdminwithoutLogout from "../AdminDashboard/DashboardNavbarforAdminwithoutLogout";
import SideNavigationforAdminwithoutLogout from "./SideNavigationforAdminwithoutLogout";

class EditStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }

  componentDidMount = () => {
    this.getCaseById();
  };

  // To get Case based on ID
  getCaseById() {
    axios
      .get(
        "http://localhost:5000/api/addcrime/edit-status/" +
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
    const { status } = this.state;
    axios
      .put(
        "http://localhost:5000/api/addcrime/updateCaseStatus/" +
          this.props.match.params._id,
        {
          status: status,
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
        <DashboardNavbarforAdminwithoutLogout />
        <SideNavigationforAdminwithoutLogout />
        <main id="content">
          <div
            style={{
              left: "60%",
              top: "40%",
              position: "absolute",
              transform: "translate(-50%,-50%)",
            }}
          >
            <form onSubmit={this.handleSubmit}>
              <label
                style={{ display: "block", color: "#00247E", fontSize: "40px" }}
                className="font-weight-bold signup-signin-heading"
              >
                Status:{" "}
              </label>
              
              <input
                name="status"
                type="text"
                value={this.state.status}
                onChange={this.handleChange}
                className="form-control"
                style={{
                  width: "370px",
                  height: "52px",
                  display: "inline-block",
                }}
              />
              <MDBBtn
                type="submit"
                value="submit"
                gradient="blue"
                style={{
                  fontSize: "18px",
                  letterSpacing: "2px",
                  borderRadius: "4px",
                  width: "200px",
                }}
              >
                Submit
              </MDBBtn>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default EditStatus;
