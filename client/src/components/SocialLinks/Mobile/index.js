import React from "react";
import { Header, Icon } from "semantic-ui-react";

export default (props) => {

    const { container, text, icon } = props.social;

    return (
        <div style={container}>
            <Header style={text} as="h2">Social Links:</Header>
            <a href="https://github.com/jpgeib" target=":blank"><Icon style={icon} size="huge" name="github" /></a>
            <a href="https://www.linkedin.com/in/james-geib-0b6493160" target=":blank"><Icon style={icon} size="huge" name="linkedin" /></a>
        </div>
    );
}