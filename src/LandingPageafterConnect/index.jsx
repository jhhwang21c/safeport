import React from "react";
import Navibar from "../Navibar";
import "./LandingPageafterConnect.css";

function LandingPageafterConnect(props) {
  const { box1, box2, box3, box4, box5, spanText1, spanText2, navibarProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page-after-connect screen">
        <Navibar logo={navibarProps.logo} />
        <div className="image-of-items">
          <div className="image-of-items-item" style={{ backgroundImage: `url(${box1})` }}></div>
          <div className="image-of-items-item" style={{ backgroundImage: `url(${box2})` }}></div>
          <div className="image-of-items-item" style={{ backgroundImage: `url(${box3})` }}></div>
          <div className="image-of-items-item" style={{ backgroundImage: `url(${box4})` }}></div>
          <div className="image-of-items-item" style={{ backgroundImage: `url(${box5})` }}></div>
        </div>
        <div className="store-your-physical inter-normal-white-33px">
          <span className="span0">{spanText1}</span>
          <span className="inter-normal-white-33px">{spanText2}</span>
        </div>
      </div>
    </div>
  );
}

export default LandingPageafterConnect;
