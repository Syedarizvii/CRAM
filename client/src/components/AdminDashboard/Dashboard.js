import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";
// import Chart from "./Chart";
import axios from "axios";
import image from "../../Images/blue1.png";
import redcard from "../../Images/red-card.png";
import yellowcard from "../../Images/yellow-card.png";
import greencard from "../../Images/green-card.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: [],
    };
  }

  getData() {
    axios.get("http://localhost:5000/api/addcrime/viewcrimes").then((res) => {
      const data = res.data;
      this.setState({ case: data.crime });
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h4
          style={{
            color: "#00247E",
            textAlign: "center",
            fontSize: "40px",
          }}
          className="font-weight-bold signup-signin-heading"
        >
          Visualization of Crimes
        </h4>
        <div className="heading-line mb-5">
          <div className="heading-line-dot"></div>
        </div>
        <MDBRow>
          <MDBCol>
            <MDBCard className="mb-5">
              <MDBCardBody style={{ textAlign: "center" }}>
                <MDBCardTitle className="font-family">Sindh</MDBCardTitle>
                <MDBCardText style={{ fontSize: "16px" }}>
                  Total Number of reported cases
                </MDBCardText>
                <h1 className="font-family">
                  {
                    this.state.case.filter(
                      (items) => items.Province === "Sindh"
                    ).length
                  }
                </h1>
                <MDBCardImage className="img-fluid" src={image} waves />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="mb-5">
              <MDBCardBody style={{ textAlign: "center" }}>
                <MDBCardTitle className="font-family">Punjab</MDBCardTitle>
                <MDBCardText style={{ fontSize: "16px" }}>
                  Total Number of reported cases
                </MDBCardText>
                <h1 className="font-family">
                  {
                    this.state.case.filter(
                      (items) => items.Province === "Punjab"
                    ).length
                  }
                </h1>
                <MDBCardImage className="img-fluid" src={redcard} waves />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="mb-5">
              <MDBCardBody style={{ textAlign: "center" }}>
                <MDBCardTitle className="font-family">Balochistan</MDBCardTitle>
                <MDBCardText style={{ fontSize: "16px" }}>
                  Total Number of reported cases
                </MDBCardText>
                <h1 className="font-family">
                  {
                    this.state.case.filter(
                      (items) => items.Province === "Balochistan"
                    ).length
                  }
                </h1>
                <MDBCardImage className="img-fluid" src={yellowcard} waves />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className="mb-5">
              <MDBCardBody style={{ textAlign: "center" }}>
                <MDBCardTitle className="font-family">KPK</MDBCardTitle>
                <MDBCardText style={{ fontSize: "16px" }}>
                  Total Number of reported cases
                </MDBCardText>
                <h1 className="font-family">
                  {
                    this.state.case.filter((items) => items.Province === "KPK")
                      .length
                  }
                </h1>
                <MDBCardImage className="img-fluid" src={greencard} waves />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <iframe
            md="12"
            lg="12"
            xl="12"
            xs="12"
            sm="12"
            title="chart"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="100%"
            height="500"
            className="mb-5"
            src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=b42a5962-e0f1-4021-a1ca-8e46f83840ba&autoRefresh=10&theme=light"
          ></iframe>
        </MDBRow>

        <MDBRow>
          <iframe
            md="12"
            lg="12"
            xl="12"
            xs="12"
            sm="12"
            title="chart"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="100%"
            height="500"
            src="https://charts.mongodb.com/charts-e-cram-rthiz/embed/charts?id=1a69fc45-8b7e-411b-beed-dedabab28c3b&theme=light"
          ></iframe>
        </MDBRow>
      </div>
    );
  }
}

export default Dashboard;
