import React from "react";
import Button from "../../../main/components/buttons/button";

import "./message-form.scss";

const MessageForm = () => {
  return (
    <form className="message_form">
      <h4 className="message_form__title">Send us a message</h4>
      <div className="message_form__top">
        <input
          className="message_form__name"
          type="input"
          placeholder="Your Full Name*"
        />
        <input
          className="message_form__number"
          type="input"
          placeholder="Phone Number*"
        />
      </div>
      <input
        className="message_form__message"
        type="input"
        placeholder="Phone Number*"
      />
      <div className="message_form__bottom">
        <Button text1="Send" clname="message_form__button" />
        <strong className="message_form__required">* Required Fields</strong>
      </div>
    </form>
  );
};

export default MessageForm;
