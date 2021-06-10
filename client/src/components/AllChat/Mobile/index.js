import React, { Component } from "react";
import { Grid, Header, Image, List, Icon } from "semantic-ui-react";
import AllChatV1 from "../../../assets/screenshots/AllChatV1.png";
import HerokuIcon from "../../../assets/images/heroku-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image id="allchatv1-image-mobile" src={AllChatV1} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid id="allchatv1-container-mobile">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="allchatv1-header-mobile" as="h2">AllChat V1</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Grid id="allchatv1-links-container-mobile">
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header id="github-header-mobile" as="h3"><a id="allchatv1-github-mobile" href="https://github.com/paulmhan/AllChat" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Header id="heroku-header-mobile" as="h3"><a id="allchatv1-heroku-mobile" href="https://all-chat-app.herokuapp.com/" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-mobile">A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                        <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-mobile">Technologies used: React.js, Semantic UI React Framework, CSS</List.Item>
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

export default Mobile;