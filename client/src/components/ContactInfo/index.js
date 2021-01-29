import React from "react";
import { Header, Icon } from "semantic-ui-react";

import "./style.css";

const ContactInfo = () => {
    return (
        <div id="contact-container">
            <Header id="contact-header" as="h2">Contact Info:</Header>
            <Header id="phone" as="h3"><Icon size="huge" name="phone" />(203)-736-7540</Header>
            <Header id="email" as="h3"><Icon size="huge" name="mail" />jpgeib2@gmail.com</Header>
        </div>
    );
};

export default ContactInfo;