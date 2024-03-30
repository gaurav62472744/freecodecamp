import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import freecodecamp from "../assets/freecodecamp.jpg";
import BasicMenu from "./Menu";
import LanguageMenu from "./Language";
import { Button } from "@mui/material";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(token !== null);
  }, []);

  const handleSignOut = () => {
    // Clear token from session storage
    sessionStorage.removeItem('token');
    // Redirect to home page
    navigate('/');
    window.location.reload()
  };

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
        <Link to="/"> {/* Use Link component for redirection to home page */}
          <img src={freecodecamp} alt="logo" width={"100%"} height={"100%"} />
        </Link>
      </div>

      <div id="menubar">
        <LanguageMenu />
        <BasicMenu />
        {isLoggedIn ? (
          <button
            style={{
              color: "black",
              backgroundColor: "#fecc4c",
              fontSize: "20px",
              marginLeft: "5px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            onClick={handleSignOut}
          >
            Logout
          </button>
        ) : (
          <button
            style={{
              color: "black",
              backgroundColor: "#fecc4c",
              fontSize: "20px",
              marginLeft: "5px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate('/login'); // Redirect to login page using navigate
            }}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
