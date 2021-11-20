import React from "react";
import { Header, Icon } from "semantic-ui-react";

export default (props) => {

    const { header, phone, email } = props.contact;

    return (
        <>
            <Header style={header} as="h2">Contact Info:</Header>
            <Header style={phone} as="h3"><Icon size="huge" name="phone" />(203)-736-7540</Header>
            <Header style={email} as="h3"><Icon size="huge" name="mail" />jpgeib2@gmail.com</Header>
        </>
    );
};