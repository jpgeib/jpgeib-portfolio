import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import AllChatV1 from "../../../assets/screenshots/AllChatV1.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={AllChatV1} size="big" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid id="allchatv1-container-computer">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="allchatv1-header-computer" as="h2">AllChat V1</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="github-header-computer" as="h3">Github: <a id="allchatv1-github-computer" href="https://github.com/paulmhan/AllChat" target=":blank">https://github.com/paulmhan/AllChat</a></Header>
                                    <Header id="heroku-header-computer" as="h3">Heroku: <a id="allchatv1-heroku-computer" href="https://all-chat-app.herokuapp.com/" target=":blank">https://all-chat-app.herokuapp.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-computer">A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                        <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-computer">Technologies used: React.js, Semantic UI React Framework, CSS</List.Item>
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