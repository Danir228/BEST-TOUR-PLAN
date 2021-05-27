import React from "react";
import {
  ADDITIONALINFORMATION,
  ALLCATEGORIES,
  LEGALINFORMATION,
} from "./components/arrays/footer-navigation-list-items";
import FooterNavItem from "./components/footer-navigation-item/footer-navigation-item";
import facebook from "./images/facebook.svg";
import youtube from "./images/youtube.svg";
import instagram from "./images/instagram.svg";

import "./footer-navgation.scss";

const FooterNav = () => {
  return (
    <div className="footer_nav">
      <h3 className="footer_nav__title">
        Best <strong className="footer_nav__title_item">tour</strong> plan
      </h3>
      <FooterNavItem title="ALL CATEGORIES" list_items={ALLCATEGORIES} />
      <FooterNavItem
        title="ADDITIONAL INFORMATION"
        list_items={ADDITIONALINFORMATION}
        social_title="Social Network"
        facebook={facebook}
        youtube={youtube}
        instagram={instagram}
      />
      <FooterNavItem title="LEGAL INFORMATION" list_items={LEGALINFORMATION} />
    </div>
  );
};

export default FooterNav;
