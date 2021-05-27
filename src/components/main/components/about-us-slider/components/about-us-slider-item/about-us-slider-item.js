import React from "react";

import "./about-us-slider-item.scss";

const AboutUsSliderItem = ({
  slideritem,
  sliderwrapper,
  slidercontainer,
  user_logo,
  user_name,
  user_date,
  star,
  user_text,
}) => {
  return (
    <div className={slideritem ? `${slideritem}` : "about_us_slider__item"}>
      <div
        className={
          sliderwrapper ? `${sliderwrapper}` : "about_us_slider__wrapper"
        }
      >
        <div
          className={
            slidercontainer
              ? `${slidercontainer}`
              : "about_us_slider__container"
          }
        >
          <div className="about_us_slider__logo">
            <img src={user_logo} alt="user_logo" />
          </div>
          <a href="/" className="about_us_slider__name">{user_name}</a>
          <span className="about_us_slider__date">{user_date}</span>
          <div className="about_us_slider__stars">
            <img className="about_us_slider__star"  src={star} alt="star" />
            <img className="about_us_slider__star"  src={star} alt="star" />
            <img className="about_us_slider__star"  src={star} alt="star" />
            <img className="about_us_slider__star"  src={star} alt="star" />
            <img className="about_us_slider__star"  src={star} alt="star" />
          </div>
          <p className="about_us_slider__text">{user_text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSliderItem;
