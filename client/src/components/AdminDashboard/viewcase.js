import React, { Component } from "react";
import axios from "axios";
import DashboardNavbarforAdminwithoutLogout from "../AdminDashboard/DashboardNavbarforAdminwithoutLogout";
import SideNavigationforAdminwithoutLogout from "./SideNavigationforAdminwithoutLogout";
import { MDBRow, MDBCol, MDBCardText, MDBCard, MDBCardBody } from "mdbreact";

class ViewCaseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases_list: {},
    };
  }

  // To get Case based on ID
  getCaseById() {
    axios
      .get("/api/addcrime/editstatus/" + this.props.match.params._id)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.designation);
        var data = response.data;
        this.setState({ cases_list: data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount = () => {
    this.getCaseById();
  };


  render() {
    return (
      <div>
        <DashboardNavbarforAdminwithoutLogout />
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
                      <strong> Investigated By : </strong>
                    </MDBCol>
                    <MDBCol size="6">{this.state.cases_list.investigated_by} </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow className="p-1">
                    <MDBCol size="6">
                      <strong> Designation : </strong>
                    </MDBCol>
                    <MDBCol size="6">{this.state.cases_list.designation} </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow className="p-1">
                    <MDBCol size="6">
                      <strong> Case Status : </strong>
                    </MDBCol>
                    <MDBCol size="6">{this.state.cases_list.status}</MDBCol>
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

// import React, { Component } from "react";
// import axios from "axios";
// class ViewCaseDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cases_list: {},
//     };
//   }

//   // To get Case based on ID
//   getCaseById() {
//     axios
//       .get("/api/addcrime/editstatus/" + this.props.match.params._id)
//       .then((response) => {
//         console.log(response.data);
//         console.log(response.data.designation);
//         var data = response.data;
//         this.setState({ cases_list: data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   componentDidMount = () => {
//     this.getCaseById();
//   };

//   render() {
//     console.log(this.state.cases_list);
//     return (
//       <div className="container">
//         <h1>
//           investigated By:
//           {this.state.cases_list.investigated_by}
//           <br />
//           Designation:
//           {this.state.cases_list.designation}
//           <br />
//           Case Status:
//           {this.state.cases_list.status}
//         </h1>
//       </div>
//     );
//   }
// }
// export default ViewCaseDetails;
