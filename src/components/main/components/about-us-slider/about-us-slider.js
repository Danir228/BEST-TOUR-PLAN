import React from "react";
import AboutUsSliderItem from "./components/about-us-slider-item/about-us-slider-item";

import "./about-us-slider.scss";

import logo from "./images/megan.svg";
import star from "./images/star.svg";
import Carousel from "nuka-carousel";

const array = [
  <AboutUsSliderItem
    user_logo={logo}
    user_name="Megan Fox"
    user_date="Stayed 18 Nov, 2019"
    star={star}
    user_text="It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. "
  />,
  <AboutUsSliderItem
    user_logo={logo}
    user_name="Megan Fox"
    user_date="Stayed 18 Nov, 2019"
    star={star}
    user_text="It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. "
  />,
  <AboutUsSliderItem
    user_logo={logo}
    user_name="Megan Fox"
    user_date="Stayed 18 Nov, 2019"
    star={star}
    user_text="It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. "
  />,
  <AboutUsSliderItem
    user_logo={logo}
    user_name="Megan Fox"
    user_date="Stayed 18 Nov, 2019"
    star={star}
    user_text="It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. "
  />,
];

const AboutUsSlider = () => {
  return (
    <div className="about_us_slider">
      <div className="container">
        <div className="about_us_slider__header">
          <h3 className="about_us_slider__title">
            What people thinks about us
          </h3>
        </div>
        <Carousel>{array.map((item, i) => <div key={i + 0.2221}>{item}</div>)}</Carousel>
      </div>
    </div>
  );
};

export default AboutUsSlider;
