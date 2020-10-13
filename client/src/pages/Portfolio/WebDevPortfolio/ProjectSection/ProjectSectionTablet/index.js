import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChatV2 from "../../../../../assets/images/AllChatV2.png";
import AllChatV1 from "../../../../../assets/images/AllChatV1.png";
import FeastFitness from "../../../../../assets/images/Feast-Fitness.png";
import OnlinePortfolio from "../../../../../assets/images/jpgeib-portfolio.png";

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
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Image src={OnlinePortfolio} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="portfolio-container-tablet">
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="portfolio-header-tablet" as="h2">Online Portfolio</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="github-header-tablet" as="h3">Github: <a id="portfolio-github-tablet" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                        <Header id="heroku-header-tablet" as="h3">Heroku: <a id="portfolio-heroku-tablet" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-tablet">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                            <List.Item className="project-list-item-tablet">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                            <List.Item className="project-list-item-tablet">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
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
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Image id="feast-fitness-image-tablet" src={FeastFitness} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="feast-fitness-container-tablet">
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="feast-fitness-header-tablet" as="h2">Feast-Fitness</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="github-header-tablet" as="h3">Github: <a id="feast-fitness-github-tablet" href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-tablet">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="project-list-item-tablet">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-tablet">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
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