import React from "react";

import "./cards-menu.scss";

const CardsMenu = () => {
  return (
    <div className="cardsmenu">
      <div className="container">
        <ul className="cardsmenu__items">
          <li className="cardsmenu__item">
            <a className="cardsmenu__link" href="/">Package Summery</a>
          </li>
          <li className="cardsmenu__item">
            <a className="cardsmenu__link" href="/">Hotel Information</a>
          </li>
          <li className="cardsmenu__item">
            <a className="cardsmenu__link" href="/">Rooms</a>
          </li>
          <li className="cardsmenu__item">
            <a className="cardsmenu__link" href="/">Facilities & Activities</a>
          </li>
          <li className="cardsmenu__item">
            <a className="cardsmenu__link" href="/">Dining & Entertainment</a>
          </li>
          <li className="cardsmenu__item">
            <a className="cardsmenu__link" href="/">Reviews</a>{" "}
          </li>
          <li className="cardsmenu__item">
            <a className="cardsmenu__link" href="/">Questions & Answers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardsMenu;
