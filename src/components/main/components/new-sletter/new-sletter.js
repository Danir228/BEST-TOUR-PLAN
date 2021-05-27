import React from "react";

import "./new-sletter.scss";

const NewSletter = () => {
  return (
    <div className="new_sletter">
      <div className="new_sletter__wrapper">
        <div className="container">
          <div className="new_sletter__container">
            <section className="new_sletter__texts">
              <span className="new_sletter__text">subscribe to our</span>
              <strong className="new_sletter__text">Newsletter</strong>
            </section>
            <section className="new_sletter__inputs">
              <input
                className="new_sletter__input"
                type="input"
                placeholder="Your email address"
              />
              <input type="submit" className="new_sletter__submit" value="Send" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSletter;
