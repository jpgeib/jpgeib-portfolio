import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GnormMusicComputer from "../../../../../components/GnormMusic/Computer";
import OnlinePortfolioComputer from "../../../../../components/OnlinePortfolio/Computer";
import AllChatV2Computer from "../../../../../components/AllChatV2/Computer";
import AllChatV1Computer from "../../../../../components/AllChat/Computer";

import "./style.css";

class ProjectSectionComputer extends Component {
    render() {
        return (
            <div id="project-page-computer">
                <Grid id="project-headers-container-computer">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-header-computer" as="h1">Full-Stack Web Development Projects</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-subheader-computer" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="project-container-computer">
                    <GnormMusicComputer />
                    <OnlinePortfolioComputer />
                    <AllChatV2Computer />
                    <AllChatV1Computer />
                </Grid>
            </div>
        );
    }
};

export default ProjectSectionComputer;