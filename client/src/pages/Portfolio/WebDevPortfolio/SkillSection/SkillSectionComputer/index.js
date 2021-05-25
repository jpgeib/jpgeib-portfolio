import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Computer";
import CSS from "../../../../../components/CSS/Computer";
import JavaScript from "../../../../../components/JavaScript/Computer";
import JQuery from "../../../../../components/JQuery/Computer";
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
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="skills-headers-container-computer">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="skills-header-computer" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-computer" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="skills-container-computer">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <HTML5 />
                        <CSS />
                        <JavaScript />
                        <JQuery />
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <SQL />
                        <MongoDB />
                        <ReactLogo />
                        <ReduxLogo />
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}></Responsive>
                        <ExpressLogo />
                        <Canto />
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}></Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionComputer;