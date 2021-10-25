import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import JavaScript from "../../../assets/images/Javascript-icon.png";

class Tablet extends Component {
    render() {

        const { icon, header } = this.props.javascript;

        return (
            <>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image style={icon} src={JavaScript} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header style={header} as="h2">JavaScript</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Tablet;