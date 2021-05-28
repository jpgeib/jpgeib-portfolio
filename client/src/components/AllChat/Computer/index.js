import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChatV1 from "../../../assets/screenshots/AllChatV1.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Row}>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Column} width={8}>
                        <Image src={AllChatV1} size="big" />
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Column} width={8}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid} id="allchatv1-container-computer">
                            <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Row}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Column} width={16}>
                                    <Header id="allchatv1-header-computer" as="h2">AllChat V1</Header>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Column} width={16}>
                                    <Header id="github-header-computer" as="h3">Github: <a id="allchatv1-github-computer" href="https://github.com/paulmhan/AllChat" target=":blank">https://github.com/paulmhan/AllChat</a></Header>
                                    <Header id="heroku-header-computer" as="h3">Heroku: <a id="allchatv1-heroku-computer" href="https://all-chat-app.herokuapp.com/" target=":blank">https://all-chat-app.herokuapp.com/</a></Header>
                                </Responsive>
                            </Responsive>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Row}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Column} width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-computer">A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                        <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                        <List.Item className="project-list-item-computer">Technologies used: React, Semantic UI React Framework, CSS</List.Item>
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

export default Computer;