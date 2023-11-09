import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import GnormMusicMobile from "../../../../../components/GnormMusic/Mobile";
import OnlinePortfolioMobile from "../../../../../components/OnlinePortfolio/Mobile";
import AllChatV2Mobile from "../../../../../components/AllChatV2/Mobile";
import AllChatV1Mobile from "../../../../../components/AllChat/Mobile";

// import "./style.css";

class ProjectSectionMobile extends Component {
    render() {

        const { general, subSection } = this.props.mobile;

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
                    {/* <GnormMusicMobile subSection={subSection} /> */}
                    <OnlinePortfolioMobile subSection={subSection} />
                    <AllChatV2Mobile subSection={subSection} />
                    <AllChatV1Mobile subSection={subSection} />
                </Grid>
            </div>
        );
    }
};

export default ProjectSectionMobile;