import React from "react";
import PackageHighlightsCard from "./components/package-highlights-card/package-highlights-card";
import OfferDetailsCard from "./components/offer-details-card/offer-details-card";

import "./package-summery.scss";
import PackageSummeryDetails from "./components/package-summery-details/package-summery-details";

const PackageSummery = () => {
  return (
    <div className="packagesummery">
      <div className="container">
        <div className="packagesummery__top">
          <PackageHighlightsCard />
          <OfferDetailsCard />
        </div>
        <div className="packagesummery__bottom">
          <PackageSummeryDetails />
        </div>
      </div>
    </div>
  );
};

export default PackageSummery;
