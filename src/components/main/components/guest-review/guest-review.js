import React, { useState } from "react";
import GuestReviewCard from "./components/guest-review-card/guest-review-card";

import "./guest-review.scss";

import main_image from "./components/images/1.svg";
import star from "./components/images/small-star.svg";
import mappin from "./components/images/map-pin.svg";
import user from "./components/images/user.svg";
import home from "./components/images/home.svg";

const GuestReview = () => {
  const [active, ShowCard] = useState(true);

  const increment = () => {
    ShowCard(!active);
  };

  return (
    <div className="guestreview">
      <div className="container">
        <h3 className="guestreview__title">Other Packages</h3>
        <i className="fas fa-expand-alt" onClick={increment}></i>
        <div className="guestreview__wrapper">
          <GuestReviewCard
            image={main_image}
            star={star}
            title={"Hotel Blue Haven"}
            general_text="Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit.
          Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis
          duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit
          ea ullamco do"
            map_min={mappin}
            user={user}
            home={home}
            room_text1="1749 Wheeler Ridge  Delaware"
            room_text2="2 x Guests"
            room_text3="1 x Room"
            old_price="$ 10,500"
            new_price="$ 8,500"
            inactive={active ? "inactive_card" : ""}
            func={increment}
          />
          <GuestReviewCard
            image={main_image}
            star={star}
            title={"Hotel Blue Haven"}
            general_text="Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit.
          Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis
          duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit
          ea ullamco do"
            map_min={mappin}
            user={user}
            home={home}
            room_text1="1749 Wheeler Ridge  Delaware"
            room_text2="2 x Guests"
            room_text3="1 x Room"
            old_price="$ 10,500"
            new_price="$ 8,500"
            inactive={active ? "inactive_card" : ""}
            func={increment}
          />
          <GuestReviewCard
            image={main_image}
            star={star}
            title={"Hotel Blue Haven"}
            general_text="Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit.
          Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis
          duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit
          ea ullamco do"
            map_min={mappin}
            user={user}
            home={home}
            room_text1="1749 Wheeler Ridge  Delaware"
            room_text2="2 x Guests"
            room_text3="1 x Room"
            old_price="$ 10,500"
            new_price="$ 8,500"
            inactive={active ? "inactive_card" : ""}
            func={increment}
          />
          <GuestReviewCard
            image={main_image}
            star={star}
            title={"Hotel Blue Haven"}
            general_text="Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit.
          Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis
          duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit
          ea ullamco do"
            map_min={mappin}
            user={user}
            home={home}
            room_text1="1749 Wheeler Ridge  Delaware"
            room_text2="2 x Guests"
            room_text3="1 x Room"
            old_price="$ 10,500"
            new_price="$ 8,500"
            inactive={active ? "inactive_card" : ""}
            func={increment}
          />
          <GuestReviewCard
            image={main_image}
            star={star}
            title={"Hotel Blue Haven"}
            general_text="Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit.
          Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis
          duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit
          ea ullamco do"
            map_min={mappin}
            user={user}
            home={home}
            room_text1="1749 Wheeler Ridge  Delaware"
            room_text2="2 x Guests"
            room_text3="1 x Room"
            old_price="$ 10,500"
            new_price="$ 8,500"
            inactive={active ? "inactive_card" : ""}
            func={increment}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestReview;
