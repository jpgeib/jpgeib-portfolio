import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/LargeScreen";
import CSS from "../../../../../components/CSS/LargeScreen";
import JavaScript from "../../../../../components/JavaScript/LargeScreen";
import JQuery from "../../../../../components/JQuery/LargeScreen";
import SQL from "../../../../../components/SQL/LargeScreen";
import MongoDB from "../../../../../components/MongoDB/LargeScreen";
import ReactLogo from "../../../../../components/React/LargeScreen";
import ReduxLogo from "../../../../../components/Redux/LargeScreen";
import ExpressLogo from "../../../../../components/Express/LargeScreen";
import Canto from "../../../../../components/Canto/LargeScreen";

import "./style.css";

class SkillSectionLarge extends Component {
    render() {
        return (
            <div id="skills-page-large">
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="skills-headers-container-large">
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="skills-header-large" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-large" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="skills-container-large">
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <HTML5 />
                        <CSS />
                        <JavaScript />
                        <JQuery />
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <SQL />
                        <MongoDB />
                        <ReactLogo />
                        <ReduxLogo />
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}></Responsive>
                        <ExpressLogo />
                        <Canto />
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}></Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionLarge;