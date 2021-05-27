import React from "react";

import "./package-summery-header.scss";

const PackageSummeryHeader = ({title}) => {
  return (
    <div className="packagesummery_header">
      <h3 className="packagesummery_title">{title}</h3>
    </div>
  );
};

export default PackageSummeryHeader;
