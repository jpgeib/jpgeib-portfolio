import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ExpressLogo from "../../../assets/images/expressjs.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="express-logo-computer" src={ExpressLogo} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="express-header-computer" as="h2">Express.js</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;