import React from "react";
import CardItem from "../card-item/card-item";
import { PackageHighlights } from "../arrays/package-summery-items";
import PackageSummeryHeader from "../package-summery-header/package-summery-header";

import "./package-highlights-card.scss";
import "../styles/general.scss";

import stroke from "../images/stroke.svg";

const PackageHighlightsCard = () => {
  return (
    <div className="packagesummery_top__card">
        <PackageSummeryHeader title={"Package Highlights"}/>
      <div className="packagesummery_top__body">
        <div className="packagesummery_top__wrapper">
          <section className="packagehighlights_items">
            <CardItem items={PackageHighlights} icon={stroke} name="highlights" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default PackageHighlightsCard;
