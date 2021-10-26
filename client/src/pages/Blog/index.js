import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import Placeholder from "../../assets/screenshots/jpgeib-portfolio.png";

class Blog extends Component {
    render() {

        const { page, headerContainer, header, entry, container } = this.props.blog.computer;

        return (
            <div style={page}>
                <Grid style={headerContainer}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={header} as="h1">Web Developer Blog</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={header} as="h3">This is where I post updates on what I'm currently working on, what I'm learning, or interesting discoveries I've found.</Header>
                        </Grid.Column>
                    </Grid.Row>   
                </Grid>
                <Grid style={container}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="big" src={Placeholder} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header style={entry} as="h2">10/21/21 - 12:08PM</Header>
                            <Header style={entry} as="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad possimus sequi maxime placeat, suscipit delectus maiores nemo, optio minus ullam quae sunt. Adipisci sapiente possimus porro explicabo neque voluptatum placeat?</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="big" src={Placeholder} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header style={entry} as="h2">10/21/21 - 12:08PM</Header>
                            <Header style={entry} as="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad possimus sequi maxime placeat, suscipit delectus maiores nemo, optio minus ullam quae sunt. Adipisci sapiente possimus porro explicabo neque voluptatum placeat?</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

export default Blog;