import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GnormMusicTablet from "../../../../../components/GnormMusic/Tablet";
import OnlinePortfolioTablet from "../../../../../components/OnlinePortfolio/Tablet";
import AllChatV2Tablet from "../../../../../components/AllChatV2/Tablet";
import AllChatV1Tablet from "../../../../../components/AllChat/Tablet";

import "./style.css";

class ProjectSectionTablet extends Component {
    render() {
        return (
            <div id="project-page-tablet">
                <Grid id="project-headers-container-tablet">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-header-tablet" as="h1">Full-Stack Web Development Projects</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-subheader-tablet" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="project-container-tablet">
                    <GnormMusicTablet />
                    <OnlinePortfolioTablet />
                    <AllChatV2Tablet />
                    <AllChatV1Tablet />
                </Grid>
            </div>
        );
    }
};

export default ProjectSectionTablet;