import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import GnormMusicTablet from "../../../../../components/GnormMusic/Tablet";
import OnlinePortfolioTablet from "../../../../../components/OnlinePortfolio/Tablet";
import AllChatV2Tablet from "../../../../../components/AllChatV2/Tablet";
import AllChatV1Tablet from "../../../../../components/AllChat/Tablet";

import "./style.css";

class ProjectSectionTablet extends Component {
    render() {
        return (
            <div id="project-page-tablet">
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxwidth={799} as={Grid} id="project-headers-container-tablet">
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="project-header-tablet" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="project-subheader-tablet" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="project-container-tablet">
                    <GnormMusicTablet />
                    <OnlinePortfolioTablet />
                    <AllChatV2Tablet />
                    <AllChatV1Tablet />
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionTablet;