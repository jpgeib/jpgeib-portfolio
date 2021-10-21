import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GnormMusicComputer from "../../../../../components/GnormMusic/Computer";
import OnlinePortfolioComputer from "../../../../../components/OnlinePortfolio/Computer";
import AllChatV2Computer from "../../../../../components/AllChatV2/Computer";
import AllChatV1Computer from "../../../../../components/AllChat/Computer";

class ProjectSectionComputer extends Component {
    render() {
        
        const { general, subSection } = this.props.computer;
        
        return (
            <div style={general.page}>
                <Grid style={general.headerContainer}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={general.header} as="h1">Full-Stack Web Development Projects</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={general.subheader} as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid style={general.container}>
                    <GnormMusicComputer subSection={subSection} />
                    <OnlinePortfolioComputer subSection={subSection} />
                    <AllChatV2Computer subSection={subSection} />
                    <AllChatV1Computer subSection={subSection} />
                </Grid>
            </div>
        );
    }
};

export default ProjectSectionComputer;