import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import WebDevMenu from "../../containers/WebDevMenu";

import "./style.css";

class SkillSection extends Component {
    render() {
        return (
            <div>
                <WebDevMenu />
                <Header as="h1">Skills</Header>
            </div>
        );
    }
}

export default SkillSection;