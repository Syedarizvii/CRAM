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
  MDBFormInline
} from "mdbreact";
import axios from "axios";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases_list: [],
      loading: true,
      search: "",
    };
  }

  getData() {
    axios.get("api/addcrime/viewcrimes").then((res) => {
      var data = res.data;
      this.setState({ cases_list: data.crime });
    });
    this.state.loading = false;
  }
  componentDidMount() {
    this.getData();
  }

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.state.cases_list);

    let filteredcases = this.state.cases_list.filter((items) => {
      return (
        items.location
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div id="View">
        <MDBCard className="mb-5 ml-5 mr-5">
          <MDBCardBody
            id="breadcrumb"
            className="d-flex align-items-center justify-content-between"
          >
            <MDBFormInline className="md-form m-0">
              <input
                className="form-control form-control-sm"
                type="search"
                placeholder="Type your query"
                aria-label="Search"
                onChange={this.onChange.bind(this)}
                value={this.state.search}
              />
            </MDBFormInline>
          </MDBCardBody>
        </MDBCard>
        {this.state.loading === true ? (
          <div
            class="d-flex justify-content-center"
            style={{ marginTop: "8%" }}
          >
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : filteredcases.filter(
            (items) =>
              items.reportedby.toLowerCase() === user.name.toLowerCase()
          ).length > 0 ? (
          filteredcases
            .filter(
              (item) =>
                user.name.toLowerCase() === item.reportedby.toLowerCase()
            )
            .map((item) => (
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
                    Your Complaint Details
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
                          <strong>Province:</strong>
                        </MDBCol>
                        <MDBCol size="7" sm="6" xs="6" md="6">{item.Province}</MDBCol>
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
                        <MDBCol lg="7" md="3">
                          <img
                            height="250"
                            width="270"
                            src={item.file}
                            alt="crime scene"
                            className="img-responsive"
                          />
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
            You haven't Reported any Case yet.
          </h1>
        )}
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



