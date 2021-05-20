import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import OnlinePortfolioComputer from "../../../../../components/OnlinePortfolio/Computer";
import AllChatV2 from "../../../../../assets/images/AllChatV2.png";
import AllChatV1 from "../../../../../assets/images/AllChatV1.png";

import "./style.css";

class ProjectSectionComputer extends Component {
    render() {
        return (
            <div id="project-page-computer">
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxwidth={1571} as={Grid} id="project-headers-container-computer">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="project-header-computer" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="project-subheader-computer" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="project-container-computer">
                    <OnlinePortfolioComputer />
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Image src={AllChatV2} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="allchatv2-container-computer">
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="allchatv2-header-computer" as="h2">AllChat V2</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="github-header-computer" as="h3">Github: <a id="allchatv2-github-computer" href="https://github.com/paulmhan/AllChat-v2" target=":blank">https://github.com/paulmhan/AllChat-v2</a></Header>
                                        <Header id="heroku-header-computer" as="h3">Heroku: <a id="allchatv2-heroku-computer" href="https://all-chat-v2.herokuapp.com" target=":blank">https://all-chat-v2.herokuapp.com</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-computer">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-computer">Technologies used: React/Redux, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Image src={AllChatV1} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="allchatv1-container-computer">
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="allchatv1-header-computer" as="h2">AllChat V1</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="github-header-computer" as="h3">Github: <a id="allchatv1-github-computer" href="https://github.com/paulmhan/AllChat" target=":blank">https://github.com/paulmhan/AllChat</a></Header>
                                        <Header id="heroku-header-computer" as="h3">Heroku: <a id="allchatv1-heroku-computer" href="https://all-chat-app.herokuapp.com/" target=":blank">https://all-chat-app.herokuapp.com/</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
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
                    {/* <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Image src={FeastFitness} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="feast-fitness-container-computer">
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="feast-fitness-header-computer" as="h2">Feast-Fitness</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="github-header-computer" as="h3">Github: <a id="feast-fitness-github-computer" href="https://github.com/paulmhan/feast-fitness" target=":blank">https://github.com/paulmhan/feast-fitness</a></Header>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-computer">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-computer">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive> */}
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionComputer;