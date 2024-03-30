import React from "react";
import "./Home.css";
import applelogo from "../assets/apple.png";
import google from "../assets/google.png";
import ms from "../assets/microsoft.png";
import spotify from "../assets/spotify2.png";
import Buttunfree from "../components/Buttunfree";
import { data, certifi } from "../components/data";
import Aluminicard from "../components/Aluminicard";
import Certifications from "./Certifications";
const Home = () => {
  return (
    <div>
      <div id="container">
        <h1 className="headline">Learn to Code for - free</h1>
        <h1 className="headline">Build Projects</h1>
        <h1 className="headline">Earn Projects</h1>
        <p className="top-para">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>
        <div className="logo-row">
          <div className="logo-box">
            <img height={"100%"} width={"50%"} src={applelogo} alt="" />
          </div>
          <div className="logo-box">
            <img height={"100%"} width={"100%"} src={google} alt="" />
          </div>
          <div className="logo-box">
            <img height={"100%"} width={"100%"} src={ms} alt="" />
          </div>
          <div className="logo-box">
            <img height={"100%"} width={"100%"} src={spotify} alt="" />
          </div>
        </div>
        <br />
        <Buttunfree />
        <br />
        <div className="banner">
          <img
            src="https://www.freecodecamp.org/static/wide-image-3cb329e8b3cae865be76746fbd069cd2.png"
            alt=""
            height={"100%"}
            width={"100%"}
          />
        </div>
        <div className="bannerline">
          freeCodeCamp students at a local study group in South Korea.
        </div>
      </div>
      <h1 style={{ textAlign: "center" }} className="headline">
        Here is what our alumni say about freeCodeCamp:
      </h1>
      <br />
      {data.map((ele, ind) => (
        <>
          <Aluminicard {...ele} />
          <br />
        </>
      ))}
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Buttunfree />
      </div>
      <br />
      <br />
      <div id="certificate">
        <h1 className="headline">
          Earn free verified certifications with freeCodeCamp's core curriculum:
        </h1>

        <div id="cert_cards">
          {certifi.map((ele, ind) => (
            <Certifications {...ele} />
          ))}
        </div>
        <br />
        <Buttunfree />
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Home;
