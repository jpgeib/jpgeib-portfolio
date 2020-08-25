import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import AllChat from "../../../assets/images/AllChatV2.png";
import FeastFitness from "../../../assets/images/Feast-Fitness.png";

import "./style.css";

class WebDevPortfolio extends Component {
    render() {
        return (
            <div id="webdev-page">
                <Grid container>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="webdev-header" as="h1">Full-Stack Web Development Portfolio</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="webdev-subheader" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="webdev-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={AllChat} size="big" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={5}>
                                        <Header as="h2">AllChat</Header>
                                    </Grid.Column>
                                    <Grid.Column width={11}>
                                        <Header as="h3">Github: <a href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                        <Header as="h3">Heroku: <a href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <List bulleted size="massive">
                                            <List.Item>An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item>Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item>Technologies used: React/Redux, CSS, Adobe Photoshop</List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={FeastFitness} size="big" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={5}>
                                        <Header as="h2">Feast-Fitness</Header>
                                    </Grid.Column>
                                    <Grid.Column width={11}>
                                        <Header as="h3">Github: <a href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <List bulleted size="massive">
                                            <List.Item>A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item>Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item>Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

export default WebDevPortfolio;