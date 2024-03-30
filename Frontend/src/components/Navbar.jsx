import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import freecodecamp from "../assets/freecodecamp.jpg";
import BasicMenu from "./Menu";
import LanguageMenu from "./Language";
import Profile from "./Profile";
const Navbar = () => {
  return (
    <div id="Navbar">
      <div id="searchbox">
        <div id="searchicon">
          <SearchIcon />
          <input
            type="text"
            id="inputbox"
            placeholder="Search 10700+ tutorials"
          />
        </div>
      </div>

      <div style={{ height: "28px", width: "278px" }} id="logo">
        <img src={freecodecamp} alt="logo" width={"100%"} height={"100%"} />
      </div>

      <div id="menubar">
        <LanguageMenu />
        <BasicMenu />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
