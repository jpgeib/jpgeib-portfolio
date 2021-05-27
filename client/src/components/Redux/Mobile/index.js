import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ReduxLogo from "../../../assets/images/redux-logo.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="redux-logo-mobile" src={ReduxLogo} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="redux-header-mobile" as="h2">Redux.js</Header>
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