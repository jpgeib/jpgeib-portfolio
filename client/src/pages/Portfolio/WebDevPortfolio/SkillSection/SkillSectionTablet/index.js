import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Tablet";
import CSS from "../../../../../components/CSS/Tablet";
import JavaScript from "../../../../../components/JavaScript/Tablet";
import JQuery from "../../../../../components/JQuery/Tablet";
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
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="skills-headers-container-tablet">
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="skills-header-tablet" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-tablet" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="skills-container-tablet">
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <HTML5 />
                        <CSS />
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <JavaScript />
                        <JQuery />
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <SQL />
                        <MongoDB />
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <ReactLogo />
                        <ReduxLogo />
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <ExpressLogo />
                        <Canto />
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionTablet;