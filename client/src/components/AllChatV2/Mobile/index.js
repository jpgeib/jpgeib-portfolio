import React, { Component } from "react";
import { Grid, Header, Image, List, Icon } from "semantic-ui-react";
import AllChatV2 from "../../../assets/screenshots/AllChatV2.png";
import HerokuIcon from "../../../assets/images/heroku-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image id="allchatv2-image-mobile" src={AllChatV2} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid id="allchatv2-container-mobile">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="allchatv2-header-mobile" as="h2">AllChat V2</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Grid id="allchatv2-links-container-mobile">
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header id="github-header-mobile" as="h3"><a id="allchatv2-github-mobile" href="https://github.com/paulmhan/AllChat-v2" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Header id="heroku-header-mobile" as="h3"><a id="allchatv2-heroku-mobile" href="https://all-chat-v2.herokuapp.com" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-mobile">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                        <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-mobile">Technologies used: React/Redux.js, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
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