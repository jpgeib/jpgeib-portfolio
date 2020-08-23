import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import WebDevIcon from "../../assets/images/webdev-icon.png";
import AdobeIcon from "../../assets/images/creative-cloud-icon.png"


import "./style.css";

class Portfolio extends Component {
    render() {
        return (
            <Grid id="portfolio-container">
                <Grid.Column width={16}>
                    <Header as="h1">My Portfolio</Header>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Header as="h3">Please select which portfolio you would like to view:</Header>
                </Grid.Column>
                <Grid.Column>
                    <Image src={WebDevIcon} size="large" />
                    <Image src={AdobeIcon} size="large" />
                </Grid.Column>
            </Grid>
        );
    }
}

export default Portfolio;