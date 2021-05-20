import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChatV2 from "../../../assets/screenshots/AllChatV2.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                        <Image src={AllChatV2} size="big" />
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid} id="allchatv2-container-wide">
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={5}>
                                    <Header id="allchatv2-header-wide" as="h2">AllChat V2</Header>
                                </Responsive>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={11}>
                                    <Header id="github-header-wide" as="h3">Github: <a id="allchatv2-github-wide" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                    <Header id="heroku-header-wide" as="h3">Heroku: <a id="allchatv2-heroku-wide" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                </Responsive>
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-wide">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                        <List.Item className="project-list-item-wide">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-wide">Technologies used: React/Redux, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
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