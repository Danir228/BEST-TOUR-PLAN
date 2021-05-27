import React from "react";
import ActivitiesItem from "./components/activities-item/activities-item";

import "./activities.scss";

import image_1 from "./images/1.svg";
import image_2 from "./images/2.svg";
import image_3 from "./images/3.svg";
import image_4 from "./images/4.svg";

const Activities = () => {
  return (
    <div className="activities">
      <div className="container">
        <div className="activities__wrapper">
          <div className="activities__header">
            <h3 className="activities__title">Other Activities</h3>
          </div>
          <div className="activities__body">
            <ActivitiesItem
              image={image_1}
              title="The curious corner of chamarel"
            />
            <ActivitiesItem image={image_2} title="Gymkhana club golf course" />
            <ActivitiesItem
              image={image_3}
              title="Tamarind falls hiking trip - full day"
            />
            <ActivitiesItem
              image={image_4}
              title="The blue marine discovery quest"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
