import React from "react";
// import { MDBContainer, MDBRow} from "mdbreact";
import { Link } from "react-router-dom";
import img1 from "../../Images/green_tick.jpg";

class Reportsuccessfull extends React.Component {
  render() {
    return (
      <div style={{
        margin: "0",
        position: "absolute",
        top: "50%",
        width: "100%",
        transform: "translateY(-50%)",
        textAlign: "center"
      }}>
        <img src={img1} className="img-fluid" alt="" style={{ borderRadius: "60rem", height: "22vh", width: "12vh" }} />
        <p style={{ fontSize: "4vw", color: "#26B249" }} className="font-weight-bold successfull-page-text">Thank You!</p>
        <p style={{ fontSize: "4vw", color: "#00247E" }} className="font-weight-bold successfull-page-text">Your FIR Has Been Successfully Registered.</p>
        <p style={{ fontSize: "4vw", color: "purple" , textDecoration:"underline"}} className="font-weight-bold successfull-page-text"><Link to="/report">Go Back</Link></p>
      </div>

    );
  }
}

export default Reportsuccessfull;