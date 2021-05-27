import React from "react";
import Button from "../buttons/button";

import "./booking.scss";

import phone from "./images/phone.svg";
import user from "./images/user.svg";
import home from "./images/home.svg";

const Booking = () => {
  return (
    <div className="booking">
      <div className="booking__top">
        <div className="booking__left">
          <p className="booking__text">price starts as</p>
          <strong className="booking___price">$ 8,500</strong>
          <p className="booking__text">per room / night</p>
        </div>
        <div className="booking__right">
          <div className="booking__right_item">
            <img className="booking__user" src={user} alt="user" />
            <strong className="booking__user_text">2 x Guests</strong>
          </div>
          <div className="booking__right_item">
            <img className="booking__home" src={home} alt="home" />
            <strong className="booking__user_text">1 x Room</strong>
          </div>
        </div>
      </div>
      <div className="booking__center">
        <strong className="booking__center_text">Quick Booking</strong>
        <div className="booking__center_item">
          <img className="booking__phone" src={phone} alt="phone" />
          12100
        </div>
      </div>
      <Button text1={"View Other Options"} clname={"booking__button"} />
    </div>
  );
};

export default Booking;
