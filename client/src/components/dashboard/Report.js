import React, { useState } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import '../../style.css';
import Routes from './Routes';
import DashboardNavbarwithoutLogout from "./dashboardNavbarwithoutLogout";
import SidenavbarwithoutLogout from './sidenavbarwithoutLogout';

function submitForm(contentType, data, setResponse) {
  axios({
    url: "/api/addcrime/addCrime",
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType
    }
  })
    .then(response => {
      setResponse(response.data);
      if (response.status === 201) {
        window.location = "/reportsuccessfull";
        // alert("Thank You! Your FIR Has Been Successfully Registered");
      }
      else {
        alert("Opertion Unsuccessful")
      }

    })
    .catch(error => {
      setResponse("error");
    });
}

function Report() {
  const [reportedby, setname] = useState("");
  const [file, setFile] = useState(null);
  const [description, setdescription] = useState("");
  const [location, setlocation] = useState("");
  const [Ocurence_Date, setOcurence_Date] = useState("");
  const [Reported_Date, setReported_Date] = useState("");
  const [Crime_type, setCrime_type] = useState("");
  const [Province, setProvince] = useState("");

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append("reportedby", reportedby);
    formData.append("file", file);
    formData.append("description", description);
    formData.append("Ocurence_Date", Ocurence_Date);
    formData.append("location", location);
    formData.append("Reported_Date", Reported_Date);
    formData.append("Crime_type", Crime_type);
    formData.append("Province", Province);
    submitForm("multipart/form-data", formData, msg => console.log(msg));
  }

  return (
    <div>
      <DashboardNavbarwithoutLogout/>
      <SidenavbarwithoutLogout />
      <main id="content" className="p-5">
        <Routes />
        <MDBContainer className="d-flex justify-content-center pt-5 pb-5">
          <MDBRow>
            <MDBCol>
              <form >
                <MDBCard className="report-card">
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="signup-signin-heading">
                        Report a Crime
                  </h3>
                      <div className="heading-line">
                        <div className="heading-line-dot"></div>
                      </div>
                    </div>
                    <br />
                    <label className="font-color font-weight-bold">
                      Reported By: <br/>(Enter Your Full Name as per Your Profile)
                  </label>
                    <input className="form-control"
                      type="text"
                      value={reportedby}
                      onChange={(e) => { setname(e.target.value) }}
                    />
                    <br />
                    <label className="font-color font-weight-bold">
                      Occurence Date:
                  </label>
                    <input className="form-control"
                      type="date"
                      value={Ocurence_Date}
                      onChange={(e) => { setOcurence_Date(e.target.value) }}
                    />
                    <br />
                    <label className="font-color font-weight-bold">
                      Location:
                  </label>
                    <input className="form-control"
                      type="text"
                      value={location}
                      onChange={(e) => { setlocation(e.target.value) }}
                    />
                     <br />
                    <label className="font-color font-weight-bold">
                      Province:
                  </label>
                    <input className="form-control"
                      type="text"
                      value={Province}
                      onChange={(e) => { setProvince(e.target.value) }}
                    />
                    <br />
                    <label className="font-color font-weight-bold">
                      Crime Type:
                  </label>
                    <select
                      label="Crime Type"
                      value={Crime_type}
                      onChange={(e) => { setCrime_type(e.target.value) }}
                      className="browser-default custom-select">
                      <option>Choose your option</option>
                      <option value="Robbery">Robbery</option>
                      <option value="Snatching">Snatching</option>
                      <option value="Domestic Violence">Domestic Violence</option>
                      <option value="Corruption">Corruption</option>
                      <option value="Abuse">Abuse</option>
                      <option value="Stolen Vehicle">Stolen Vehicle</option>
                      <option value="illegal Construction">illegal Construction</option>
                      <option value="Suspicious Item">Suspicious Item</option>
                    </select>
                    <br />
                    <br />
                    <label className="font-color font-weight-bold">
                      Reported Date:
                  </label>
                    <input className="form-control"
                      type="date"
                      value={Reported_Date}
                      onChange={(e) => { setReported_Date(e.target.value) }}
                    />
                    <br />
                    <label className="font-color font-weight-bold">
                      Upload the Picture of Crime Scene:
                  </label>
                    <br />
                    <div style={{ border: "1px solid #CED4DA", padding: "6px", borderRadius: "3px" }}>
                      <input
                        type="file"
                        name="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                    <br />
                    <label className="font-color font-weight-bold">
                      Description:
                    </label>
                    <br />
                    <textarea
                      label="Description"
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                      rows="5"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                    />
                    <br />
                    <br />
                    <input className="btn-block z-depth-1a white-text blue-gradient-for-report waves-effect waves-light hoverable" type="button" value="Report" onClick={uploadWithFormData} />
                  </MDBCardBody>
                </MDBCard>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer >
        </main>
    </div >


  );
};

export default Report;