import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GnormMusicMobile from "../../../../../components/GnormMusic/Mobile";
import OnlinePortfolioMobile from "../../../../../components/OnlinePortfolio/Mobile";
import AllChatV2Mobile from "../../../../../components/AllChatV2/Mobile";
import AllChatV1Mobile from "../../../../../components/AllChat/Mobile";

import "./style.css";

class ProjectSectionMobile extends Component {
    render() {
        return (
            <div id="project-page-mobile">
                <Grid id="project-headers-container-mobile">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-header-mobile" as="h1">Full-Stack Web Development Projects</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-subheader-mobile" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="project-container-mobile">
                    <GnormMusicMobile />
                    <OnlinePortfolioMobile />
                    <AllChatV2Mobile />
                    <AllChatV1Mobile />
                </Grid>
            </div>
        );
    }
};

export default ProjectSectionMobile;