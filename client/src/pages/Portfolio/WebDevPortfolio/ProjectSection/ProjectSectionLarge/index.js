import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChat from "../../../../../assets/images/AllChatV2.png";
import FeastFitness from "../../../../../assets/images/Feast-Fitness.png";
import OnlinePortfolio from "../../../../../assets/images/jpgeib-portfolio.png";

import "./style.css";

class ProjectSectionLarge extends Component {
    render() {
        return (
            <div id="project-page-large">
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxwidth={1919} as={Grid} id="project-headers-container-large">
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="project-header-large" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="project-subheader-large" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="project-container-large">
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Image src={OnlinePortfolio} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="portfolio-container-large">
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={5}>
                                        <Header id="portfolio-header-large" as="h2">Online Portfolio</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={11}>
                                        <Header id="github-header-large" as="h3">Github: <a id="portfolio-github-large" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                        <Header id="heroku-header-large" as="h3">Heroku: <a id="portfolio-heroku-large" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-large">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                            <List.Item className="project-list-item-large">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                            <List.Item className="project-list-item-large">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Image src={AllChat} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="allchat-container-large">
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={5}>
                                        <Header id="allchat-header-large" as="h2">AllChat</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={11}>
                                        <Header id="github-header-large" as="h3">Github: <a id="allchat-github-large" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                        <Header id="heroku-header-large" as="h3">Heroku: <a id="allchat-heroku-large" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-large">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item className="project-list-item-large">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-large">Technologies used: React/Redux, CSS, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Image src={FeastFitness} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="feast-fitness-container-large">
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={5}>
                                        <Header id="feast-fitness-header-large" as="h2">Feast-Fitness</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={11}>
                                        <Header id="github-header-large" as="h3">Github: <a id="feast-fitness-github-large" href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-large">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="project-list-item-large">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-large">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
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

export default ProjectSectionLarge;

{/* <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Image src={FeastFitness} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="feast-fitness-container-large">
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={5}>
                                        <Header id="feast-fitness-header-large" as="h2">Feast-Fitness</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={11}>
                                        <Header id="github-header-large" as="h3">Github: <a id="feast-fitness-github-large" href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-large">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="project-list-item-large">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-large">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive> */}