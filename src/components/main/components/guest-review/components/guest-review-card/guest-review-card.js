import React from "react";
import Button from "../../../buttons/button";

import "./guest-review-card.scss";

const GuestReviewCard = ({
  image,
  star,
  title,
  general_text,
  map_min,
  user,
  home,
  room_text1,
  room_text2,
  room_text3,
  old_price,
  new_price,
  inactive,
}) => {
  return (
    <div className={inactive ? `advisor_card ${inactive}` : "advisor_card"}>
      <div className="advisor_card__image_wrapper">
        <img className="advisor_card__image" src={image} alt="card" />
        <Button text1="Flash Offer" clname="advisor_card__button1" />
      </div>
      <div className="advisor_card__information">
        <div className="advisor_card__information_wrapper">
          <div className="advisor_card__header">
            <div className="advisor_card__stars">
              <img className="advisor_card__star" src={star} alt="star" />
              <img className="advisor_card__star" src={star} alt="star" />
              <img className="advisor_card__star" src={star} alt="star" />
              <img className="advisor_card__star" src={star} alt="star" />
              <img className="advisor_card__star" src={star} alt="star" />
            </div>
            <h3 className="advisor_card__title">{title}</h3>
          </div>
          <div className="advisor_card__body">
            <p className="advisor_card__text">{general_text}</p>
            <section className="advisor_card__room">
              <div className="advisor_card__room_item">
                <img
                  className="advisor_card__room_image"
                  src={map_min}
                  alt="MAP"
                />
                <strong className="advisor_card__room_text">
                  {room_text1}
                </strong>
              </div>
              <div className="advisor_card__room_item">
                <img
                  className="advisor_card__room_image"
                  src={user}
                  alt="USER"
                />
                <strong className="advisor_card__room_text">
                  {room_text2}
                </strong>
              </div>
              <div className="advisor_card__room_item">
                <img
                  className="advisor_card__room_image"
                  src={home}
                  alt="HOME"
                />
                <strong className="advisor_card__room_text">
                  {room_text3}
                </strong>
              </div>
            </section>
          </div>
          <div className="advisor_card__footer">
            <strong className="advisor_card__old_price">{old_price}</strong>
            <strong className="advisor_card__new_price">{new_price}</strong>
          </div>
        </div>
        <Button text1="Book Now" clname="advisor_card__booknow" />
      </div>
    </div>
  );
};

export default GuestReviewCard;
