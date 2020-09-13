import React,  { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class WebDevMenu extends Component {

    state = { activeItem: "projects" }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return(
            <Menu attached="top" tabular>
                <Menu.Item 
                    as={Link}
                    to="/webdev/projects"
                    name="projects"
                    active={activeItem === "projects"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/webdev/skills"
                    name="skills"
                    active={activeItem === "skills"}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
};