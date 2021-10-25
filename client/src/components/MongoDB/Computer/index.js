import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import MongoDB from "../../../assets/images/mongodb-logo.png";

class Computer extends Component {
    render() {

        const { icon, header } = this.props.mongodb;

        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image style={icon} src={MongoDB} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header style={header} as="h2">MongoDB</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;