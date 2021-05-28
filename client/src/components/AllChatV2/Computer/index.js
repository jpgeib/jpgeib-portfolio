import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import AllChatV2 from "../../../assets/screenshots/AllChatV2.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={AllChatV2} size="big" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid id="allchatv2-container-computer">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="allchatv2-header-computer" as="h2">AllChat V2</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="github-header-computer" as="h3">Github: <a id="allchatv2-github-computer" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                    <Header id="heroku-header-computer" as="h3">Heroku: <a id="allchatv2-heroku-computer" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-computer">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                        <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-computer">Technologies used: React/Redux, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
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

export default Computer;