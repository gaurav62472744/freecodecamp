import React from "react";
import "./Certification.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Certifications = ({ img, text }) => {
  return (
    <div id="box">
      <div id="sub-box">
        <div id="logo">
          <img src={img} alt="" height={"100%"} width={"100%"} />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
      <div id="arrow">
        <KeyboardDoubleArrowRightIcon />
      </div>
    </div>
  );
};

export default Certifications;
