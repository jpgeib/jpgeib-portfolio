import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Tablet";
import CSS from "../../../../../components/CSS/Tablet";
import JavaScript from "../../../../../components/JavaScript/Tablet";
import Jquery from "../../../../../components/Jquery/Tablet";
import SQL from "../../../../../components/SQL/Tablet";
import MongoDB from "../../../../../components/MongoDB/Tablet";
import ReactLogo from "../../../../../components/React/Tablet";
import ReduxLogo from "../../../../../components/Redux/Tablet";
import ExpressLogo from "../../../../../components/Express/Tablet";
import Canto from "../../../../../components/Canto/Tablet";

import "./style.css";

class SkillSectionTablet extends Component {
    render() {
        return (
            <div id="skills-page-tablet">
                <Grid id="skills-headers-container-tablet">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-header-tablet" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-subheader-tablet" as="h3">I am proficient in the following technologies:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="skills-container-tablet">
                    <Grid.Row>
                        <HTML5 />
                        <CSS />
                    </Grid.Row>
                    <Grid.Row>
                        <JavaScript />
                        <Jquery />
                    </Grid.Row>
                    <Grid.Row>
                        <SQL />
                        <MongoDB />
                    </Grid.Row>
                    <Grid.Row>
                        <ReactLogo />
                        <ReduxLogo />
                    </Grid.Row>
                    <Grid.Row>
                        <ExpressLogo />
                        <Canto />
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SkillSectionTablet;