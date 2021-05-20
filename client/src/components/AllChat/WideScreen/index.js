import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChatV1 from "../../../assets/screenshots/AllChatV1.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                        <Image src={AllChatV1} size="big" />
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid} id="allchatv1-container-wide">
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={5}>
                                    <Header id="allchatv1-header-wide" as="h2">AllChat V1</Header>
                                </Responsive>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={11}>
                                    <Header id="github-header-wide" as="h3">Github: <a id="allchatv1-github-wide" href="https://github.com/paulmhan/AllChat" target=":blank">https://github.com/paulmhan/AllChat</a></Header>
                                    <Header id="heroku-header-wide" as="h3">Heroku: <a id="allchatv1-heroku-wide" href="https://all-chat-app.herokuapp.com/" target=":blank">https://all-chat-app.herokuapp.com/</a></Header>
                                </Responsive>
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-wide">A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                        <List.Item className="project-list-item-wide">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-wide">Technologies used: React, Semantic UI React Framework, CSS</List.Item>
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

export default WideScreen;