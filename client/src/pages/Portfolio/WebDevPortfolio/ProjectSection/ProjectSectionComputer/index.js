import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GnormMusic from "../../../../../components/GnormMusic";
import OnlinePortfolioComputer from "../../../../../components/OnlinePortfolio/Computer";
import AllChatV2Computer from "../../../../../components/AllChatV2/Computer";
import AllChatV1Computer from "../../../../../components/AllChat/Computer";

class ProjectSectionComputer extends Component {
    render() {
        
        const { subSection } = this.props.computer;
        
        return (
            <div id="project-page">
                <Grid id="project-header-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-header" as="h1">Full-Stack Web Development Projects</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="project-subheader" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="project-container">
                    <GnormMusic />
                    <OnlinePortfolioComputer subSection={subSection} />
                    <AllChatV2Computer subSection={subSection} />
                    <AllChatV1Computer subSection={subSection} />
                </Grid>
            </div>
        );
    }
};

export default ProjectSectionComputer;