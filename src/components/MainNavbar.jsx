import React from "react";
import "../css/components/MainNavbar.css";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <header className="navHeader">
      <div className="logo">Tea Time</div>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/ingredients">Ingredients</Link>
          </li>
          <li>
            <Link to="mixes">Mixes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavbar;
