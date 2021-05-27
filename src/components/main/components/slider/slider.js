import React from "react";
import Booking from "../booking/booking";
import Map from "../map/map";

import "./slider.scss";

import slider from "./images/Slider.svg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="slider__items">
          <img src={slider} alt="slider" className="slider__image" />
          <div className="slider__booking">
            <Booking />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
