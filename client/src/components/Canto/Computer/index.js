import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Canto from "../../../assets/images/canto-logo-orange.png";

class Computer extends Component {
    render() {

        const { icon, header } = this.props.canto;

        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image style={icon} src={Canto} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header style={header} as="h2">Canto</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;