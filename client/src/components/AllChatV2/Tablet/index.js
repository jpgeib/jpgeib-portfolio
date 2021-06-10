import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import AllChatV2 from "../../../assets/screenshots/AllChatV2.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image id="allchatv2-image-tablet" src={AllChatV2} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid id="allchatv2-container-tablet">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="allchatv2-header-tablet" as="h2">AllChat V2</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="github-header-tablet" as="h3">Github: <a id="allchatv2-github-tablet" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                    <Header id="heroku-header-tablet" as="h3">Heroku: <a id="allchatv2-heroku-tablet" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-tablet">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                        <List.Item className="project-list-item-tablet">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-tablet">Technologies used: React/Redux.js, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
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