import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import WebDevMenu from "../../../containers/WebDevMenu";
import AllChat from "../../../assets/images/AllChatV2.png";
import FeastFitness from "../../../assets/images/Feast-Fitness.png";

import "./style.css";

class WebDevPortfolio extends Component {
    render() {
        return (
            <div id="webdev-page">
                <Grid id="webdev-headers-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="webdev-header" as="h1">Full-Stack Web Development Portfolio</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="webdev-subheader" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

export default WebDevPortfolio;