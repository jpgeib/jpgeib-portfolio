import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import "./style.css";

export default (props) => (
    <Menu id="navbar" pointing secondary>
        <Menu.Item as={Link} content="Home" to="/" />
        <Menu.Item as={Link} content="Contact" to="/contact" />
        <Menu.Item as={Link} content="Portfolio" to="/portfolio" />
    </Menu>
);