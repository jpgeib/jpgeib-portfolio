import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default (props) => (
    <Menu pointing secondary>
        <Menu.Item as={Link} content="Home" to="/" />
        <Menu.Item as={Link} content="Contact" to="/contact" />
        <Menu.Item as={Link} content="Portfolio" to="/portfolio" />
    </Menu>
);