import React from "react";

import "./footer-bottom.scss";

import image from "./images/image.svg";

const FooterBottom = () => {
    return (
        <div className="footer_bottom">
            <ul className="footer_bottom__list">
                <li className="footer_bottom__list_item">Disclaimer</li>
                <li className="footer_bottom__list_item">Conditions of use</li>
                <li className="footer_bottom__list_item">Cancellation policy</li>
            </ul>
            <img src={image} alt="footer-bottom"/>
        </div>
    )
}

export default FooterBottom;