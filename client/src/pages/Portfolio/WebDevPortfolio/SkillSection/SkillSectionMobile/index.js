import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Mobile";
import CSS from "../../../../../components/CSS/Mobile";
import JavaScript from "../../../../../components/JavaScript/Mobile";
import Jquery from "../../../../../components/Jquery/Mobile";
import SQL from "../../../../../components/SQL/Mobile";
import MongoDB from "../../../../../components/MongoDB/Mobile";
import ReactLogo from "../../../../../components/React/Mobile";
import ReduxLogo from "../../../../../components/Redux/Mobile";
import ExpressLogo from "../../../../../components/Express/Mobile";
import Canto from "../../../../../components/Canto/Mobile";

import "./style.css";

class SkillSectionMobile extends Component {
    render() {
        return (
            <div id="skills-page-mobile">
                <Grid id="skills-headers-container-mobile">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-header-mobile" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-subheader-mobile" as="h3">I am proficient in the following technologies:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="skills-container-mobile">
                    <HTML5 />
                    <CSS />
                    <JavaScript />
                    <Jquery />
                    <SQL />
                    <MongoDB />
                    <ReactLogo />
                    <ReduxLogo />
                    <ExpressLogo />
                    <Canto />
                </Grid>
            </div>
        );
    }
}

export default SkillSectionMobile;