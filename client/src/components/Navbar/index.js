import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

import "./style.css";

export default (props) => (
    <Menu id="navbar" pointing secondary>
        <Menu.Item as={Link} content="Home" to="/" />
        {/* <Menu.Item as={Link} content="Contact" to="/contact" /> */}
        <Dropdown item text="Portfolio">
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Dropdown text="Web Development">
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/webdev/projects" text="Projects" />
                            <Dropdown.Item as={Link} to="/webdev/skills" text="Skills" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/adobe" text="Adobe Creative Cloud" />
            </Dropdown.Menu>
        </Dropdown>
    </Menu>
);