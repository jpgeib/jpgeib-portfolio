import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MongoDB from "../../../assets/images/mongodb-logo.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="mongo-logo-tablet" src={MongoDB} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="mongo-header-tablet" as="h2">MongoDB</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Tablet;