import React from "react";
import Button from "../buttons/button";

import "./hotel-name.scss";

import star from "./images/star.svg";

const HotelName = () => {
  return (
    <div className="hotelname">
      <div className="container">
        <div className="hotelname__items">
          <div className="hotelname__left">
            <ul className="hotelname__stars">
              <li className="hotelname__star">
                <img className="hotelname__star_image" src={star} alt="star" />
              </li>
              <li className="hotelname__star">
                <img className="hotelname__star_image" src={star} alt="star" />
              </li>
              <li className="hotelname__star">
                <img className="hotelname__star_image" src={star} alt="star" />
              </li>
              <li className="hotelname__star">
                <img className="hotelname__star_image" src={star} alt="star" />
              </li>
              <li className="hotelname__star">
                <img className="hotelname__star_image" src={star} alt="star" />
              </li>
            </ul>
            <section className="hotelname__name">
              <h3 className="hotelname__name_title">GRAND HILTON HOTEL</h3>
              <Button text1={"Flash Offer"} clname={"hotelname__offer"} />
            </section>

            <a href="/" className="hotelname__link">
              Half-Board/ All Inclusive + Complimentary Activities + Child Stays
              Free
            </a>
          </div>
          <div className="hotelname__right">
            <Button
              text1={"User Rattings"}
              text2={"4.5/5"}
              clname={"hotelname__rattings"}
              clname2={"hotelname__text1"}
              clname3={"hotelname__text2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelName;
