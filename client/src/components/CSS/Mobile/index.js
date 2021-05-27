import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import CSS from "../../../assets/images/CSS-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="css-logo-mobile" src={CSS} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="css-header-mobile" as="h2">CSS</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
};

export default Mobile;