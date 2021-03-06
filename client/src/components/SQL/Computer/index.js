import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import SQL from "../../../assets/images/sql-logo.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="sql-logo-computer" src={SQL} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="sql-header-computer" as="h2">SQL</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;