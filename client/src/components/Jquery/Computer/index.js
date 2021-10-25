import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Jquery from "../../../assets/images/jquery-logo.png";

class Computer extends Component {
    render() {

        const { icon, header } = this.props.jQuery;

        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image style={icon} src={Jquery} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header style={header} as="h2">jQuery</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;