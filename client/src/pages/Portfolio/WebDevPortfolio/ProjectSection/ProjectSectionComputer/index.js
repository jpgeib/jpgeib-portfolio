import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import AllChat from "../../../../../assets/images/AllChatV2.png";
import FeastFitness from "../../../../../assets/images/Feast-Fitness.png";
import OnlinePortfolio from "../../../../../assets/images/jpgeib-portfolio.png";

import "./style.css";

class ProjectSectionComputer extends Component {
    render() {
        return (
            <div id="project-page">
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxwidth={1571} as={Grid} id="project-headers-container">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="project-header" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="project-subheader" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="project-container">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Image src={OnlinePortfolio} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="portfolio-container">
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={5}>
                                        <Header id="portfolio-header" as="h2">Online Portfolio</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={11}>
                                        <Header id="github-header" as="h3">Github: <a id="portfolio-github" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                        <Header id="heroku-header" as="h3">Heroku: <a id="portfolio-heroku" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                            <List.Item className="project-list-item">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                            <List.Item className="project-list-item">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Image src={AllChat} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="allchat-container">
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={5}>
                                        <Header id="allchat-header" as="h2">AllChat</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={11}>
                                        <Header id="github-header" as="h3">Github: <a id="allchat-github" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                        <Header id="heroku-header" as="h3">Heroku: <a id="allchat-heroku" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item className="project-list-item">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item">Technologies used: React/Redux, CSS, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Image src={FeastFitness} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="feast-fitness-container">
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={5}>
                                        <Header id="feast-fitness-header" as="h2">Feast-Fitness</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={11}>
                                        <Header id="github-header" as="h3">Github: <a id="feast-fitness-github" href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="project-list-item">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
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

export default ProjectSectionComputer;