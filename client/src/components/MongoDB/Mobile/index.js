import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MongoDB from "../../../assets/images/mongodb-logo.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="mongo-logo-mobile" src={MongoDB} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="mongo-header-mobile" as="h2">MongoDB</Header>
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