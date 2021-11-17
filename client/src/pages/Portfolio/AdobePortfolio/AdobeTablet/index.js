import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import AdobeAppsTablet from "../../../../components/AdobeApps/Tablet";

class AdobeTablet extends Component {
    render() {

        const { page, headerContainer, header, subheader, container } = this.props.adobe;

        return (
            <div style={page}>
                <Grid style={headerContainer}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={header} as="h1">Adobe Creative Cloud Portfolio</Header>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Header style={subheader} as="h3">Click on an icon to view examples from the following Adobe software:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid style={container}>
                    <AdobeAppsTablet />
                </Grid>
            </div>
        )
    }
}

export default AdobeTablet;