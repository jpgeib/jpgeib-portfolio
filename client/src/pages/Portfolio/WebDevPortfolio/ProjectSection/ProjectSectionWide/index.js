import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChatV2 from "../../../../../assets/images/AllChatV2.png";
import AllChatV1 from "../../../../../assets/images/AllChatV1.png";
import OnlinePortfolio from "../../../../../assets/screenshots/jpgeib-portfolio.png";

import "./style.css";

class ProjectSectionWide extends Component {
    render() {
        return (
            <div id="project-page-wide">
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="project-headers-container-wide">
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="project-header-wide" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="project-subheader-wide" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="project-container-wide">
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                            <Image src={OnlinePortfolio} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid} id="portfolio-container-wide">
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={5}>
                                        <Header id="portfolio-header-wide" as="h2">Online Portfolio</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={11}>
                                        <Header id="github-header-wide" as="h3">Github: <a id="portfolio-github-wide" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                        <Header id="heroku-header-wide" as="h3">Heroku: <a id="portfolio-heroku-wide" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-wide">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                            <List.Item className="project-list-item-wide">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                            <List.Item className="project-list-item-wide">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
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
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionWide;