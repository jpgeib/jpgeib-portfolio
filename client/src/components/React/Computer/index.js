import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ReactLogo from "../../../assets/images/classic-react-logo.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="react-logo-computer" src={ReactLogo} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="react-header-computer" as="h2">React.js</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;