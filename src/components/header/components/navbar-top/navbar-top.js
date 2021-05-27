import React from "react";

import "./navbar-top.scss";

import surprise from "../images/surprise.svg";
import star from "../images/star.svg";

const NavbarTop = () => {
  return (
    <div className="navbar_top">
      <div className="container">
        <div className="navbar_top__items">
          <div className="navbar_top__left">
            <strong className="navbar_top__left_item">Questions? Need Help?</strong>
            <strong className="navbar_top__left_item">
              Call us on{" "}
              <a href="tel:(+123) 456 1500" className="navbar_top__telefone">
                (+123) 456 1500
              </a>
            </strong>
          </div>
          <div className="navbar_top__right">
            <a className="navbar_top__surprise" href="/">
              <img
                className="navbar_top__surprise_item"
                src={surprise}
                alt="surprise"
              />{" "}
              BTP Gift Card
            </a>
            <a className="navbar_top__star" href="/">
              <img
                className="navbar_top__star_item"
                src={star}
                alt="surprise"
              />{" "}
              Loyalty Program
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
