import React from "react";
import {
  OfferDetails,
  OfferDetailsItem,
} from "../arrays/package-summery-items";
import CardItem from "../card-item/card-item";

import "./offer-details-card.scss";
import "../styles/general.scss";

import calendar from "../images/calendar.svg";
import stroke from "../images/stroke.svg";
import PackageSummeryHeader from "../package-summery-header/package-summery-header";

const OfferDetailsCard = () => {
  return (
    <div className="packagesummery_top__card">
      <PackageSummeryHeader title={"Offer Details"} />
      <div className="packagesummery_top__body">
        <div className="packagesummery_top__wrapper">
          <CardItem items={OfferDetails} icon={stroke} name="offer" />
          <CardItem items={OfferDetailsItem} icon={calendar}/>
          <strong className="packagesummery_top__valid">* Valid until 30 April 2020</strong>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsCard;
