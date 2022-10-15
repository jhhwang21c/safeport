import React from "react";
import "./Navibar.css";

function Navibar(props) {
  const { logo, className } = props;

  return (
    <div className={`navibar-2 ${className || ""}`}>
      <img className="logo-2" src={logo} alt="Logo" />
      <div className="safe-port-2 inter-normal-black-37px">
        <span className="span inter-normal-black-37px">SafePort</span>
      </div>
      <div className="search-container-2">
        <img className="icon-search-2" src="/img/image-1-2@2x.png" alt="icon-search" />
        <div className="search-items-collections-and-wallets-2 inter-normal-black-20px">
          <span className="span inter-normal-black-20px">Search items, collections, and wallets</span>
        </div>
      </div>
      <div className="place-2 inter-normal-black-30px">
        <span className="span inter-normal-black-30px">Register</span>
      </div>
      <div className="claim-2 inter-normal-black-30px">
        <span className="span inter-normal-black-30px">Claim</span>
      </div>
      <div className="explore-2 inter-normal-black-30px">
        <span className="span inter-normal-black-30px">Explore</span>
      </div>
      <div className="connect-wallet-2">
        <div className="my-page-2 inter-normal-white-24px">
          <span className="span inter-normal-white-24px">My Page</span>
        </div>
      </div>
    </div>
  );
}

export default Navibar;
