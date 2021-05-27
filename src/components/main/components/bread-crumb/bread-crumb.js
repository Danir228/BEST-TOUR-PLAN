import React from "react";

import "./bread-crumb.scss";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <div className="breadcrumb_items">
          <a href="/" className="breadcrumb_item">
            Home / Flash Offers / Grand Hilton Hotel
          </a>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
