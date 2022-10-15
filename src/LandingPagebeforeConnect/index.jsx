import React from "react";
import Navibar from "../Navibar";
import "./LandingPagebeforeConnect.css";

function LandingPagebeforeConnect(props) {
  const { navibarProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page-before-connect screen">
        <Navibar logo={navibarProps.logo} className={navibarProps.className} />
      </div>
    </div>
  );
}

export default LandingPagebeforeConnect;
