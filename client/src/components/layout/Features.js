import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "../../style.css";

const Features = () => {
  return (
    <MDBContainer id="Features">
      <div>
        <h1 className=" font-weight-bold text-center black-text mt-5">
          Our Features
        </h1>
        <div className="heading-line mb-5">
          <div className="heading-line-dot"></div>
        </div>
      </div>
      <MDBRow>
        <MDBCol lg="4" md="6" sm="12" xs="12">
          <div className="feature-card my-3 p-4" style={{height:"350px"}}>
            <span className="feature-Icons mb-4">
              <i class="fas fa-user-edit"></i>
            </span>
            <h3 className="text-center font-weight-bold font-color">
              Crime Reporting
            </h3>
            <p style={{ textAlign: "justify" }}>
              It will let citizens to register the crime online from anywhere
              and save their time and they can also upload Images of the crime
              scenes. It will provide users with the most reliable complaint
              process.
            </p>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="6" sm="12" xs="12">
          <div className="feature-card my-3 p-4 " style={{height:"350px"}}>
            <span className="feature-Icons mb-4">
              <i class="fas fa-map-marked-alt"></i>
            </span>
            <h3 className="text-center font-weight-bold font-color">
              Management
            </h3>
            <p style={{ textAlign: "justify" }}>
              Our System will help the police in managing the crime records
              easily. It will help police to make the privacy of crime- related
              data over manual data. It will also reduce manual work.
            </p>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="6" sm="12" xs="12">
          <div className="feature-card my-3 p-4" style={{height:"350px"}}>
            <span className="feature-Icons mb-4">
              <i class="fas fa-chart-bar"></i>
            </span>
            <h3 className="text-center font-weight-bold font-color">
              Analysis
            </h3>
            <p style={{ textAlign: "justify" }}>
              Our System will provide the real-time analysis of crimes in the
              form of charts that will help the Police to visualize and identify
              high-crime areas and the best way to respond.
            </p>
          </div>
        </MDBCol>

        <MDBCol lg="4" md="6" sm="12" xs="12">
          <div className="feature-card my-3 p-4" style={{height:"350px"}}>
            <span className="feature-Icons mb-4">
              <i class="fa fa-database"></i>
            </span>
            <h3 className="text-center font-weight-bold font-color">
              Visualization
            </h3>
            <p style={{ textAlign: "justify" }}>
              Our system will help the citizen in finding out the areas or
              places where crime rate is high by showing the visualization of
              crimes on the map which helps them in taking the preliminary
              actions for their safety.
            </p>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="6" sm="12" xs="12">
          <div className="feature-card my-3 p-4" style={{height:"350px"}}>
            <span className="feature-Icons mb-4">
              <i class="fa fa-database"></i>
            </span>
            <h3 className="text-center font-weight-bold font-color">Privacy</h3>
            <p style={{ textAlign: "justify" }}>
              Our System will help in providing the privacy of crime-related
              data over manually data storage as by using manual method there
              can be loss of records. So it will aldo maintains the privacy of recorded data.
            </p>
          </div>
        </MDBCol>
        <MDBCol lg="4" md="6" sm="12" xs="12">
          <div className="feature-card my-3 p-4" style={{height:"350px"}}>
            <span className="feature-Icons mb-4">
              <i class="fa fa-database"></i>
            </span>
            <h3 className="text-center font-weight-bold font-color">
              Faster Response
            </h3>
            <p style={{ textAlign: "justify" }}>
              This system will be helpful in society in solving crimes, getting
              faster response from the authority. Our system will help the
              citizen to track the status of their reported complaint time by
              time.
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Features;
