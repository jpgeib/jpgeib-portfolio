import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChat from "../../../../../assets/images/AllChatV2.png";
import FeastFitness from "../../../../../assets/images/Feast-Fitness.png";
import OnlinePortfolio from "../../../../../assets/images/jpgeib-portfolio.png";

import "./style.css";

class ProjectSectionMobile extends Component {
    render() {
        return (
            <div id="project-page-mobile">
                <Responsive {...Responsive.onlyMobile} maxwidth={414} as={Grid} id="project-headers-container-mobile">
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="project-header-mobile" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="project-subheader-mobile" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="project-container-mobile">
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                            <Image src={OnlinePortfolio} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="portfolio-container-mobile">
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={5}>
                                        <Header id="portfolio-header-mobile" as="h2">Online Portfolio</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={11}>
                                        <Header id="github-header-mobile" as="h3">Github: <a id="portfolio-github-mobile" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                        <Header id="heroku-header-mobile" as="h3">Heroku: <a id="portfolio-heroku-mobile" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-mobile">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                            <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                            <List.Item className="project-list-item-mobile">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                            <Image src={AllChat} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchat-container-mobile">
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={5}>
                                        <Header id="allchat-header-mobile" as="h2">AllChat</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={11}>
                                        <Header id="github-header-mobile" as="h3">Github: <a id="allchat-github-mobile" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                        <Header id="heroku-header-mobile" as="h3">Heroku: <a id="allchat-heroku-mobile" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-mobile">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-mobile">Technologies used: React/Redux, CSS, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                            <Image src={FeastFitness} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="feast-fitness-container-mobile">
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={5}>
                                        <Header id="feast-fitness-header-mobile" as="h2">Feast-Fitness</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={11}>
                                        <Header id="github-header-mobile" as="h3">Github: <a id="feast-fitness-github-mobile" href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-mobile">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-mobile">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
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

export default ProjectSectionMobile;