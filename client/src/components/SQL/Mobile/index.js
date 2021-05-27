import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import SQL from "../../../assets/images/sql-logo.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="sql-logo-mobile" src={SQL} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="sql-header-mobile" as="h2">SQL</Header>
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