import React from "react";

import "./footer-navigation-item.scss";

const FooterNavItem = ({
  title,
  list_items,
  social_title,
  facebook,
  youtube,
  instagram,
}) => {
  return (
    <div className="footer_nav__items">
      <h3 className="footer_nav__item_title">{title}</h3>
      <ul className="footer_nav__list">
        {list_items.map((item, i) => (
          <li key={i + 2.33} className="footer_nav__list_item">
            {item.text}
          </li>
        ))}
      </ul>
      <div className="footer_nav__social_network">
        <strong className="footer_nav__social_title">{social_title}</strong>
        <img className="footer_nav__social_icon" src={facebook} alt="facebook" />
        <img className="footer_nav__social_icon" src={youtube} alt="youtube" />
        <img className="footer_nav__social_icon" src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default FooterNavItem;
