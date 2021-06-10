import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Computer";
import CSS from "../../../../../components/CSS/Computer";
import JavaScript from "../../../../../components/JavaScript/Computer";

import SQL from "../../../../../components/SQL/Computer";
import MongoDB from "../../../../../components/MongoDB/Computer";
import ReactLogo from "../../../../../components/React/Computer";
import ReduxLogo from "../../../../../components/Redux/Computer";
import ExpressLogo from "../../../../../components/Express/Computer";
import Canto from "../../../../../components/Canto/Computer";

import "./style.css";

class SkillSectionComputer extends Component {
    render() {
        return (
            <div id="skills-page-computer">
                <Grid id="skills-headers-container-computer">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-header-computer" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-subheader-computer" as="h3">I am proficient in the following technologies:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="skills-container-computer">
                    <Grid.Row>
                        <HTML5 />
                        <CSS />
                        <JavaScript />
                        
                    </Grid.Row>
                    <Grid.Row>
                        <SQL />
                        <MongoDB />
                        <ReactLogo />
                        <ReduxLogo />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}></Grid.Column>
                        <ExpressLogo />
                        <Canto />
                        <Grid.Column width={4}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SkillSectionComputer;