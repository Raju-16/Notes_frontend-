import React from "react";
import "../styles/style.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar">
      <GiHamburgerMenu color="white" />
      <span style={{ marginLeft: "10px" }}>Notes</span>
    </div>
  );
};

export default Navbar;
