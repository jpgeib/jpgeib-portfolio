import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import CSS from "../../../assets/images/CSS-icon.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="css-logo-tablet" src={CSS} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="css-header-tablet" as="h2">CSS</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Tablet;