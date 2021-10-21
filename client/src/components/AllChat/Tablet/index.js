import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import AllChatV1 from "../../../assets/screenshots/AllChatV1.png";

class Tablet extends Component {
    render() {

        const { image, linkHeader, listItem, header, link, container } = this.props.subSection;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image style={image} src={AllChatV1} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid style={container}>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={header} as="h2">AllChat V1</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header style={linkHeader} as="h3">Github: <a style={link} href="https://github.com/paulmhan/AllChat" target=":blank">https://github.com/paulmhan/AllChat</a></Header>
                                    <Header style={linkHeader} as="h3">Heroku: <a style={link} href="https://all-chat-app.herokuapp.com/" target=":blank">https://all-chat-app.herokuapp.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item style={listItem}>A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                        <List.Item style={listItem}>Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item style={listItem}>Technologies used: React.js, Semantic UI React Framework, CSS</List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
};

export default Tablet;