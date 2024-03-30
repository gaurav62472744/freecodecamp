import React from "react";
import "./Aluminicard.css";
const Aluminicard = ({ img, name, location, company, history }) => {
  return (
    <div id="card">
      <div id="photo">
        <img src={img} alt="" width={"100%"} height={"100%"} />
      </div>
      <div id="info">
        <div id="adress">
          <p className="add">
            <b>{name}</b> in {location}
          </p>
          <p className="add">
            software engineer in<b>{company}</b>
          </p>
        </div>
        <div id="history">{history}</div>
      </div>
    </div>
  );
};

export default Aluminicard;
