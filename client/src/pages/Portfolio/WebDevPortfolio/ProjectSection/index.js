import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import AllChat from "../../../../assets/images/AllChatV2.png";
import FeastFitness from "../../../../assets/images/Feast-Fitness.png";

import "./style.css";

class ProjectSection extends Component {
    render() {
        return (
            <Grid id="webdev-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={AllChat} size="big" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid id="allchat-container">
                                <Grid.Row>
                                    <Grid.Column width={5}>
                                        <Header id="allchat-header" as="h2">AllChat</Header>
                                    </Grid.Column>
                                    <Grid.Column width={11}>
                                        <Header id="github-header" as="h3">Github: <a id="allchat-github" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                        <Header id="heroku-header" as="h3">Heroku: <a id="allchat-heroku" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="webdev-list-item">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item className="webdev-list-item">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="webdev-list-item">Technologies used: React/Redux, CSS, Adobe Photoshop</List.Item>
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
                            <Grid id="feast-fitness-container">
                                <Grid.Row>
                                    <Grid.Column width={5}>
                                        <Header id="feast-fitness-header" as="h2">Feast-Fitness</Header>
                                    </Grid.Column>
                                    <Grid.Column width={11}>
                                        <Header id="github-header" as="h3">Github: <a id="feast-fitness-github" href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="webdev-list-item">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="webdev-list-item">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="webdev-list-item">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        );
    }
};

export default ProjectSection;