import React from "react";
import {
  CheckInCheckOut,
  Entertainment,
  LandBased,
  MealPlanAvailable,
  PurchaseInclusions,
  WaterBased,
} from "../arrays/package-summery-items";
import CardItem from "../card-item/card-item";
import PackageSummeryHeader from "../package-summery-header/package-summery-header";

import "./package-summery-details.scss";

import stroke from "../images/stroke.svg";

const PackageSummeryDetails = () => {
  return (
    <div className="packagesummerydetails">
      <PackageSummeryHeader title={"Package Summery Details"} />
      <div className="packagesummerydetails__body">
        <div className="packagesummerydetails__wrapper">
          <div className="packagesummerydetails__top">
            {" "}
            <CardItem
              subtitle={"Purchase Inclusions"}
              items={PurchaseInclusions}
              icon={stroke}
            />
            <CardItem
              subtitle={"Complimentary Land Based Activities"}
              items={LandBased}
              icon={stroke}
            />
            <CardItem
              subtitle={"Complimentary Water Based Activities"}
              items={WaterBased}
              icon={stroke}
            />
          </div>
          <div className="packagesummerydetails__bottom">
            <CardItem
              subtitle={"Meal Plan Available"}
              items={MealPlanAvailable}
              icon={stroke}
            />
            <CardItem
              subtitle={"Entertainment"}
              items={Entertainment}
              icon={stroke}
            />
            <CardItem
              subtitle={"Check In & Check Out"}
              items={CheckInCheckOut}
              icon={stroke}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSummeryDetails;
