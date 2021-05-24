import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Computer";
import CSS from "../../../../../assets/images/CSS-icon.png";
import JavaScript from "../../../../../assets/images/Javascript-icon.png";
import jQuery from "../../../../../assets/images/jquery-logo.png";
import SQL from "../../../../../assets/images/sql-logo.png";
import MongoDB from "../../../../../assets/images/mongodb-logo.png";
import ReactLogo from "../../../../../assets/images/classic-react-logo.png";
import ReduxLogo from "../../../../../assets/images/redux-logo.png";
import ExpressLogo from "../../../../../assets/images/expressjs.png";
import Canto from "../../../../../assets/images/canto-logo-orange.png";

import "./style.css";

class SkillSectionComputer extends Component {
    render() {
        return (
            <div id="skills-page-computer">
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="skills-headers-container-computer">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="skills-header-computer" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-computer" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="skills-container-computer">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <HTML5 />
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="css-logo-computer" src={CSS} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="css-header-computer" as="h2">CSS</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="javascript-logo-computer" src={JavaScript} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="javascript-header-computer" as="h2">JavaScript</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="jquery-logo-computer" src={jQuery} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="jquery-header-computer" as="h2">jQuery</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="sql-logo-computer" src={SQL} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="sql-header-computer" as="h2">SQL</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="mongo-logo-computer" src={MongoDB} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="mongo-header-computer" as="h2">MongoDB</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="react-logo-computer" src={ReactLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="react-header-computer" as="h2">React.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="redux-logo-computer" src={ReduxLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="redux-header-computer" as="h2">Redux.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}></Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="express-logo-computer" src={ExpressLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="express-header-computer" as="h2">Express.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Image id="canto-logo-computer" src={Canto} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                        <Header id="canto-header-computer" as="h2">Canto</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}></Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionComputer;