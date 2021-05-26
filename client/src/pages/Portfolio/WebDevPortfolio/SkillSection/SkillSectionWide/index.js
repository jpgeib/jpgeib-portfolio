import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/WideScreen";
import CSS from "../../../../../components/CSS/WideScreen";
import JavaScript from "../../../../../components/JavaScript/WideScreen";
import JQuery from "../../../../../components/JQuery/WideScreen";
import SQL from "../../../../../components/SQL/WideScreen";
import MongoDB from "../../../../../components/MongoDB/WideScreen";
import ReactLogo from "../../../../../components/React/WideScreen";
import ReduxLogo from "../../../../../components/Redux/WideScreen";
import ExpressLogo from "../../../../../components/Express/WideScreen";
import Canto from "../../../../../components/Canto/WideScreen";

import "./style.css";

class SkillSectionWide extends Component {
    render() {
        return (
            <div id="skills-page-wide">
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="skills-headers-container-wide">
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="skills-header-wide" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-wide" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="skills-container-wide">
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <HTML5 />
                        <CSS />
                        <JavaScript />
                        <JQuery />
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <SQL />
                        <MongoDB />
                        <ReactLogo />
                        <ReduxLogo />
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}></Responsive>
                        <ExpressLogo />
                        <Canto />
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}></Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionWide;