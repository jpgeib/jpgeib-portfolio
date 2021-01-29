import React from "react";
import { Header, Icon } from "semantic-ui-react";

import "./style.css";

const SocialLinks = () => {
    return (
        <div id="social-container">
            <Header id="social-header" as="h2">Social Links:</Header>
            <a href="https://github.com/jpgeib" target=":blank"><Icon id="github" size="huge" name="github" /></a>
            <a href="https://www.linkedin.com/in/james-geib-0b6493160" target=":blank"><Icon id="linkedin" size="huge" name="linkedin" /></a>
        </div>
    );
}

export default SocialLinks;