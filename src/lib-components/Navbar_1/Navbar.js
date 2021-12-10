import React, { useState } from "react";
import "./Navbar.module.css";
import { MdReorder } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="/career">Careers</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}><MdReorder/></button>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="Search..." />
        <button><MdSearch/></button>
      </div>
    </div>
  );
}

export default Navbar;
