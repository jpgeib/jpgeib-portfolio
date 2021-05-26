import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Mobile";
import CSS from "../../../../../components/CSS/Mobile";
import JavaScript from "../../../../../components/JavaScript/Mobile";
import JQuery from "../../../../../components/JQuery/Mobile";
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
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="skills-headers-container-mobile">
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="skills-header-mobile" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-mobile" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="skills-container-mobile">
                    <HTML5 />
                    <CSS />
                    <JavaScript />
                    <JQuery />
                    <SQL />
                    <MongoDB />
                    <ReactLogo />
                    <ReduxLogo />
                    <ExpressLogo />
                    <Canto />
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionMobile;