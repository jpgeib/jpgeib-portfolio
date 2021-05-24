import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/LargeScreen";
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

class SkillSectionLarge extends Component {
    render() {
        return (
            <div id="skills-page-large">
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="skills-headers-container-large">
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="skills-header-large" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-large" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid} id="skills-container-large">
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <HTML5 />
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="css-logo-large" src={CSS} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="css-header-large" as="h2">CSS</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="javascript-logo-large" src={JavaScript} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="javascript-header-large" as="h2">JavaScript</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="jquery-logo-large" src={jQuery} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="jquery-header-large" as="h2">jQuery</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="sql-logo-large" src={SQL} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="sql-header-large" as="h2">SQL</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="mongo-logo-large" src={MongoDB} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="mongo-header-large" as="h2">MongoDB</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="react-logo-large" src={ReactLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="react-header-large" as="h2">React.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="redux-logo-large" src={ReduxLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="redux-header-large" as="h2">Redux.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}></Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="express-logo-large" src={ExpressLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="express-header-large" as="h2">Express.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Image id="canto-logo-large" src={Canto} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                        <Header id="canto-header-large" as="h2">Canto</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}></Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionLarge;