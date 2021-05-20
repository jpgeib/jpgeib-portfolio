import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive, Icon } from "semantic-ui-react";
import AllChatV2 from "../../../assets/screenshots/AllChatV2.png";
import HerokuIcon from "../../../assets/images/heroku-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                        <Image id="allchatv2-image-mobile" src={AllChatV2} size="big" />
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv2-container-mobile">
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <Header id="allchatv2-header-mobile" as="h2">AllChat V2</Header>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv2-links-container-mobile">
                                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                <Header id="github-header-mobile" as="h3"><a id="allchatv2-github-mobile" href="https://github.com/paulmhan/AllChat-v2" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                            </Responsive>
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                <Header id="heroku-header-mobile" as="h3"><a id="allchatv2-heroku-mobile" href="https://all-chat-v2.herokuapp.com" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                            </Responsive>
                                        </Responsive>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-mobile">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                        <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-mobile">Technologies used: React/Redux, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
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