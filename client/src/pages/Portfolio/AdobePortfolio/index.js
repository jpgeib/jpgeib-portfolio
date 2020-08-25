import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Photoshop from "../../../assets/images/PhotoShop_Icon.png";
import InDesign from "../../../assets/images/InDesign-icon.png";
import PremierePro from "../../../assets/images/Premiere-Pro-icon.png";
import Illustrator from "../../../assets/images/Illustrator_icon.png";

import "./style.css";

class AdobePortfolio extends Component {
    render() {
        return (
            <div id="adobe-page">
                <Grid id="adobe-headers-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="adobe-header" as="h1">Adobe Creative Cloud Portfolio</Header>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Header id="adobe-subheader" as="h3">Click on an icon to view examples from the following Adobe software:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="adobe-container">
                    <Grid.Row>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={4}>
                            <Image id="photoshop-icon" src={Photoshop} size="small" />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image id="illustrator-icon" src={Illustrator} size="small" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={4}>
                            <Image id="indesign-icon" src={InDesign} size="small" />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Image id="premiere-icon" src={PremierePro} size="small" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default AdobePortfolio;