import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GnormMusicTablet from "../../../../../components/GnormMusic/Tablet";
import OnlinePortfolioTablet from "../../../../../components/OnlinePortfolio/Tablet";
import AllChatV2Tablet from "../../../../../components/AllChatV2/Tablet";
import AllChatV1Tablet from "../../../../../components/AllChat/Tablet";

class ProjectSectionTablet extends Component {
    render() {

        const { general, subSection } = this.props.tablet;
        
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
                    {/* <GnormMusicTablet subSection={subSection} /> */}
                    <OnlinePortfolioTablet subSection={subSection} />
                    <AllChatV2Tablet subSection={subSection} />
                    <AllChatV1Tablet subSection={subSection} />
                </Grid>
            </div>
        );
    }
};

export default ProjectSectionTablet;