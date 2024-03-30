import React from "react";
import "./Buttunfree.css";

const Buttunfree = () => {
  const handleButtonClick = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      // Token is present, redirect to course page
      window.location.href = "/coursepage";
    } else {
      // Token is not present, display message
      alert("Please login to check the courses.");
      // Optionally, you can redirect the user to the login page here
      // window.location.href = "/login";
    }
  };

  return (
    <div>
      <div id="btn">
        <button
          style={{
            cursor: "pointer",
          }}
          onClick={handleButtonClick}
        >
          Get started (it's free)
        </button>
      </div>
    </div>
  );
};

export default Buttunfree;
