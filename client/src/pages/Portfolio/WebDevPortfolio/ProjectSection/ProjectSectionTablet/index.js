import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import OnlinePortfolioTablet from "../../../../../components/OnlinePortfolio/Tablet";
import AllChatV2 from "../../../../../assets/images/AllChatV2.png";
import AllChatV1 from "../../../../../assets/images/AllChatV1.png";

import "./style.css";

class ProjectSectionTablet extends Component {
    render() {
        return (
            <div id="project-page-tablet">
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxwidth={799} as={Grid} id="project-headers-container-tablet">
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="project-header-tablet" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="project-subheader-tablet" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="project-container-tablet">
                    <OnlinePortfolioTablet />
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Image id="allchatv2-image-tablet" src={AllChatV2} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="allchatv2-container-tablet">
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="allchatv2-header-tablet" as="h2">AllChat V2</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="github-header-tablet" as="h3">Github: <a id="allchatv2-github-tablet" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                        <Header id="heroku-header-tablet" as="h3">Heroku: <a id="allchatv2-heroku-tablet" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-tablet">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item className="project-list-item-tablet">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-tablet">Technologies used: React/Redux, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Image id="allchatv1-image-tablet" src={AllChatV1} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="allchatv1-container-tablet">
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="allchatv1-header-tablet" as="h2">AllChat V1</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="github-header-tablet" as="h3">Github: <a id="allchatv1-github-tablet" href="https://github.com/paulmhan/AllChat" target=":blank">https://github.com/paulmhan/AllChat</a></Header>
                                        <Header id="heroku-header-tablet" as="h3">Heroku: <a id="allchatv1-heroku-tablet" href="https://all-chat-app.herokuapp.com/" target=":blank">https://all-chat-app.herokuapp.com/</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-tablet">A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                            <List.Item className="project-list-item-tablet">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-tablet">Technologies used: React, Semantic UI React Framework, CSS</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionTablet;