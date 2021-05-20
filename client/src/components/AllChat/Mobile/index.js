import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive, Icon } from "semantic-ui-react";
import AllChatV1 from "../../../assets/screenshots/AllChatV1.png";
import HerokuIcon from "../../../assets/images/heroku-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                        <Image id="allchatv1-image-mobile" src={AllChatV1} size="big" />
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv1-container-mobile">
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <Header id="allchatv1-header-mobile" as="h2">AllChat V1</Header>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv1-links-container-mobile">
                                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                <Header id="github-header-mobile" as="h3"><a id="allchatv1-github-mobile" href="https://github.com/paulmhan/AllChat" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                            </Responsive>
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                <Header id="heroku-header-mobile" as="h3"><a id="allchatv1-heroku-mobile" href="https://all-chat-app.herokuapp.com/" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                            </Responsive>
                                        </Responsive>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-mobile">A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                        <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-mobile">Technologies used: React, Semantic UI React Framework, CSS</List.Item>
                                    </List>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Mobile;