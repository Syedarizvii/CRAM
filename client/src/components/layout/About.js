import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import "../../style.css";
import { MDBAnimation } from "mdbreact";

const About = () => {
  return (
    <section className="pb-5 pt-3 mx-5" id="About">
      <div>
        <h1 className=" font-weight-bold text-center black-text">About Us</h1>
        <div className="heading-line mb-5">
          <div className="heading-line-dot"></div>
        </div>
      </div>
      <MDBRow>
        <MDBCol xl="6" lg="12" md="12" className="about-us-image">
          <MDBAnimation type="bounce" infinite className="slower">
            <div className="outer">
              <div className="inner">&nbsp;</div>
            </div>
          </MDBAnimation>
          <img
            className="about-image img-fluid"
            src={require("../../Images/about-us-imageee.png")}
            alt=""
          />
        </MDBCol>

        <MDBCol xl="6" lg="12" md="12">
          <h1 className="black-text w-responsive font-weight-bold my-3">
            “To Protect<span style={{ color: "#0C5ADB" }}> and To Serve.”</span>
          </h1>
          <p
            className="black-text "
            style={{ fontSize: 18, textAlign: "justify" }}
          >
            It will provide users with the most reliable complaint process and
            help the police in managing the crime records easily The real time
            analysis of data will help the Law Enforcement Agencies (LEA) to
            identify high-crime areas, types of crime being committed, and the
            best way to respond.
          </p>
          <MDBRow>
            <MDBCol lg="2" md="3" sm="12" xs="12" className="text-center">
              <span className="About-Icons mb-4">
                <i class="fas fa-user-edit"></i>
              </span>
            </MDBCol>
            <MDBCol lg="10" md="9" sm="12" xs="12">
              <h4>Online Reporting</h4>
              <p style={{textAlign: "justify"}}>
                It will provide users with the most reliable complaint process
                and There will be no need for a citizen to go to the police
                station by themselves. By using our application, the citizen can
                report a crime online from anywhere at any place.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="2" md="3" sm="12" xs="12" className="text-center">
              <span className="About-Icons mb-4">
                <i class="fas fa-map-marked-alt"></i>
              </span>
            </MDBCol>
            <MDBCol lg="10" md="9" sm="12" xs="12">
              <h4>Management</h4>
              <p style={{textAlign: "justify"}}>
                Our System will help the police in managing the crime records
                easily and it will let police department in
                updating the reported case status i.e. (either solved or in
                process).
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="2" md="3" sm="12" xs="12" className="text-center">
              <span className="About-Icons mb-4">
                <i class="fas fa-chart-bar"></i>
              </span>
            </MDBCol>
            <MDBCol lg="10" md="9" sm="12" xs="12">
              <h4>Analysis</h4>
              <p style={{textAlign: "justify"}}>
                Our System will provide the real-time analysis of crimes in the
                form of charts that will help the Police
                to visualize and identify high-crime areas,
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default About;
