import React from "react";

import "./card-item.scss";

const CardItem = ({ items, subtitle, icon, name }) => {
  // console.log(clname)
  return (
    <>
      <section className="carddetails_items">
        <h3 className="carddetails_subtitle">{subtitle}</h3>
        {items.map((item) => (
          <div key={item.id} className={name ? `carddetails_item ${name}` : "carddetails_item"} >
            <img src={icon} alt="stroke" />
            <strong>{item.text} </strong>
          </div>
        ))}
      </section>
    </>
  );
};

export default CardItem;