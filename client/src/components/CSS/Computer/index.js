import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import CSS from "../../../assets/images/CSS-icon.png";

class Computer extends Component {
    render() {

        const { icon, header } = this.props.css3;

        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image style={icon} src={CSS} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header style={header} as="h2">CSS</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;