import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import OnlinePortfolioLarge from "../../../../../components/OnlinePortfolio/LargeScreen";
import AllChatV2Large from "../../../../../components/AllChatV2/LargeScreen";
import AllChatV1Large from "../../../../../components/AllChat/LargeScreen";

import "./style.css";

class ProjectSectionLarge extends Component {
    render() {
        return (
            <div id="project-page-large">
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxwidth={1919} as={Grid} id="project-headers-container-large">
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="project-header-large" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="project-subheader-large" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="project-container-large">
                    <OnlinePortfolioLarge />
                    <AllChatV2Large />
                    <AllChatV1Large />
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionLarge;