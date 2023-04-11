import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="copyright">
      <div className="copyright__content">
        <p className="m-h-10">
          Copyright
          <img
            src="https://assets.scaler.com/assets/scaler/svg/copyright-cf0f03018b8d83eae3708502180eefc1d40751202d8ad50acaaa84bbb07defb4.svg.gz"
            alt="copyright"
          />
          2023 InterviewBit Technologies Pte. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
