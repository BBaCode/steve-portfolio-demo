import React from "react";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav">
      <div className="navTitle">Stephen Bassett</div>
      <ul className="navList">
        <li className="navLinks">Work</li>
        <li className="navLinks">Contact</li>
        <li className="navLinks">Twitter</li>
      </ul>
    </div>
  );
}

export default NavBar;
