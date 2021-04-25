import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBFormInline,
  MDBBtn,
} from "mdbreact";

class BreadcrumSection extends Component {
  state = {
    search: ""
  };

  onChange = (e) => {
    this.setState({search : e.terget.value});
  };

  render() {

    return (
      <MDBCard className="mb-5">
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
              onChange={this.onChange}
            />
            <MDBBtn size="sm" color="primary" className="my-0" type="submit">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBFormInline>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default BreadcrumSection;
