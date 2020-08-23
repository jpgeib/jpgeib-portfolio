import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Header } from "semantic-ui-react";
import WebDevIcon from "../../assets/images/webdev-icon.png";
import AdobeIcon from "../../assets/images/creative-cloud-icon.png"

import "./style.css";

class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio-page">
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="portfolio-header" as="h1">My Portfolios</Header>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Header id="portfolio-subheader" as="h3">Please select which portfolio you would like to view:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid container id="portfolio-container">
                    <Grid.Column width={8}>
                        <Image as={Link} to="/webdev" id="webdev-icon" src={WebDevIcon} size="medium" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image as={Link} to="/adobe" id="adobe-icon" src={AdobeIcon} size="medium" />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Portfolio;