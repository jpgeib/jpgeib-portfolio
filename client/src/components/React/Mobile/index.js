import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ReactLogo from "../../../assets/images/classic-react-logo.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="react-logo-mobile" src={ReactLogo} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="react-header-mobile" as="h2">React.js</Header>
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