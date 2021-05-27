import React from "react";
import Button from "../../../buttons/button";

import "./activities-item.scss";

const ActivitiesItem = ({ image, title }) => {
  return (
    <div className="activities__item">
      <div className="activities__item_background"></div>
      <img className="activities__item_image" src={image} alt="activities" />
      <div className="activities__item_body">
        <h3 className="activities__item_title">{title}</h3>
        <Button
          clname="activities__item_button"
          clname2="activities__item_text"
          text1="Book Now"
        />
      </div>
    </div>
  );
};

export default ActivitiesItem;
