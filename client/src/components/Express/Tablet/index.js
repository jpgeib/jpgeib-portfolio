import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ExpressLogo from "../../../assets/images/expressjs.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="express-logo-tablet" src={ExpressLogo} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="express-header-tablet" as="h2">Express.js</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Tablet;