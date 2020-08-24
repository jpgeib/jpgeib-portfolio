import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";

import "./style.css";

class WebDevPortfolio extends Component {
    render() {
        return (
            <div id="webdev-page">
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="webdev-header" as="h1">Full-Stack Web Development Portfolio</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column id="webdev-subheader" width={16}>
                            <Header as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="webdev-container" container>
                    <Grid.Row>
                        <Grid.Column width={8}>

                        </Grid.Column>
                        <Grid.Column width={8}>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>

                        </Grid.Column>
                        <Grid.Column width={8}>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>

                        </Grid.Column>
                        <Grid.Column width={8}>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

export default WebDevPortfolio;