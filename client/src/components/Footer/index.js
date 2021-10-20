import React from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import ReactLogoWhite from "../../assets/images/React-Logo-White.png";
import SemanticLogoWhite from "../../assets/images/semantic-ui-logo.png"

import "./style.css";

const Footer = (props) => {
    return (
        <Grid id="footer">
            <Grid.Row>
                <Grid.Column>
                    <Header id="footer-header" as="h1">Powered by:</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={1}>
                    <Image id="footer-react-image" size="tiny" src={ReactLogoWhite} />
                </Grid.Column>
                <Grid.Column width={1}>
                    <Image id="footer-semantic-image" size="tiny" src={SemanticLogoWhite} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Footer;