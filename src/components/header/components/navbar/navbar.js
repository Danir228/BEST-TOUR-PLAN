import React from "react";
import Search from "./components/search";
import Shop from "./components/shop";
import User from "./components/user";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__items">
          <div className="navbar__left">
            <strong className="navbar__heading">
              Best <strong className="navbar__heading_item">tour</strong> plan
            </strong>
            <Search />
          </div>
          <Shop />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
