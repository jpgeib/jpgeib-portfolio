import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ReduxLogo from "../../../assets/images/redux-logo.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="redux-logo-computer" src={ReduxLogo} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="redux-header-computer" as="h2">Redux.js</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;