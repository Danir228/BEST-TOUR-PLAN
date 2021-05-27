import React from "react";

import "./contact-details.scss"

import location from "./images/location.svg";
import phone from "./images/phone.svg";
import email from "./images/email.svg";

const ContactDetails = () => {
  return (
    <div className="contact_details">
      <section className="contact_details__items">
        <h3 className="contact_details__title">Contact Details</h3>
        <h4 className="contact_details__subtitle">
          Feel free to contact us by phone, email or by our contact form
        </h4>
        <ul className="contact_details__list">
          <li className="contact_details__item">
              <img className="contact_details__image" src={location} alt="location" />
            9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United States
          </li>
          <li className="contact_details__item">
              <img className="contact_details__image" src={phone} alt="phone" />
            <div className="contact_details__item_childs">
              <strong className="contact_details__item_child">
                Tel (business hours) : 269 1500
              </strong>
              <strong className="contact_details__item_child">
                Tel (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00
                pm)
              </strong>
              <strong className="contact_details__item_child">
                Tel (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm)
              </strong>
            </div>
          </li>
          <li className="contact_details__item"> <img className="contact_details__image" src={email} alt="email" />cherly.lawson@example.com</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactDetails;
