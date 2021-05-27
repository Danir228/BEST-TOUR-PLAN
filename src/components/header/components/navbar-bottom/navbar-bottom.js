import React from "react";

import "./navbar-bottom.scss";

const NavbarBottom = () => {
  return (
    <div className="navbarbottom">
      <div className="container">
        <nav className="navbarbottom__menu">
          <ul className="navbarbottom__items">
            <li className="navbarbottom__item">All Deals</li>
            <li className="navbarbottom__item">Hotels</li>
            <li className="navbarbottom__item">Activities</li>
            <li className="navbarbottom__item">Hotel Day Packages</li>
            <li className="navbarbottom__item">Restaurants</li>
            <li className="navbarbottom__item">Events</li>
            <li className="navbarbottom__item">Rodrigues</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarBottom;
