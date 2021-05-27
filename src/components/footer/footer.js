import React from "react";
import ContactDetails from "./components/contact-details/contact-details";
import FooterBottom from "./components/footer-bottom/footer-bottom";
import FooterNav from "./components/footer-navigation/footer-navgation";
import MessageForm from "./components/message-form/message-form";

import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <FooterNav />
                <div className="footer__wrapper">
                    <ContactDetails />
                    <MessageForm />
                </div>
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer;