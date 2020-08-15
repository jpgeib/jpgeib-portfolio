import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import PhotoShop from "../../assets/images/PhotoShop_Icon.png";
import InDesign from "../../assets/images/InDesign-icon.png";
import PremierePro from "../../assets/images/Premiere-Pro-icon.png";

import "./style.css";

class Portfolio extends Component {
    render() {
        return (
            <Grid id="portfolio-container">
                <Grid.Column width={16}>
                    <Header as="h1">My Portfolio</Header>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Header as="h3">Click on an icon/link to view my work:</Header>
                </Grid.Column>
                <Grid.Column>
                    <Image size="small" src={PhotoShop} />
                    <Image size="small" src={InDesign} />
                    <Image size="small" src={PremierePro} />
                </Grid.Column>
            </Grid>
        );
    }
}

export default Portfolio;