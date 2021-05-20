import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import AdobeApps from "../../../components/AdobeApps";

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
                    <AdobeApps />
                </Grid>
            </div>
        )
    }
}

export default AdobePortfolio;