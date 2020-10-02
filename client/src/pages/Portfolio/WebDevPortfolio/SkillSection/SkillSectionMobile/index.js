import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../assets/images/HTML-icon.png";
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

class SkillSectionMobile extends Component {
    render() {
        return (
            <div id="skills-page-mobile">
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="skills-headers-container-mobile">
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="skills-header-mobile" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-mobile" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="skills-container-mobile">
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="html5-logo-mobile" src={HTML5} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="html5-header-mobile" as="h2">HTML5</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="css-logo-mobile" src={CSS} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="css-header-mobile" as="h2">CSS</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="javascript-logo-mobile" src={JavaScript} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="javascript-header-mobile" as="h2">JavaScript</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="jquery-logo-mobile" src={jQuery} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="jquery-header-mobile" as="h2">jQuery</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="sql-logo-mobile" src={SQL} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="sql-header-mobile" as="h2">SQL</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="mongo-logo-mobile" src={MongoDB} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="mongo-header-mobile" as="h2">MongoDB</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="react-logo-mobile" src={ReactLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="react-header-mobile" as="h2">React.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="redux-logo-mobile" src={ReduxLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="redux-header-mobile" as="h2">Redux.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="express-logo-mobile" src={ExpressLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="express-header-mobile" as="h2">Express.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Image id="canto-logo-mobile" src={Canto} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="canto-header-mobile" as="h2">Canto</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionMobile;