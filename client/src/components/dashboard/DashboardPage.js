import React from "react";
import View from "./View";

const DashboardPage = () => {
  return (
    <div>
      {/* <SearchSection/> */}
      <h4
        style={{
          color: "#00247E",
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "Dancing Script",
        }}
        className="font-weight-bold signup-signin-heading"
      >
        Your Reported Cases
      </h4>
      <div className="heading-line">
        <div className="heading-line-dot"></div>
      </div>
      <View />
    </div>
  );
};

export default DashboardPage;
