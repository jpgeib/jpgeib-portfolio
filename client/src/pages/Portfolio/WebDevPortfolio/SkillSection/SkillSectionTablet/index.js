import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Tablet";
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

class SkillSectionTablet extends Component {
    render() {
        return (
            <div id="skills-page-tablet">
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="skills-headers-container-tablet">
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="skills-header-tablet" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-tablet" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid} id="skills-container-tablet">
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <HTML5 />
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="css-logo-tablet" src={CSS} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="css-header-tablet" as="h2">CSS</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="javascript-logo-tablet" src={JavaScript} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="javascript-header-tablet" as="h2">JavaScript</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="jquery-logo-tablet" src={jQuery} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="jquery-header-tablet" as="h2">jQuery</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="sql-logo-tablet" src={SQL} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="sql-header-tablet" as="h2">SQL</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="mongo-logo-tablet" src={MongoDB} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="mongo-header-tablet" as="h2">MongoDB</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="react-logo-tablet" src={ReactLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="react-header-tablet" as="h2">React.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="redux-logo-tablet" src={ReduxLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="redux-header-tablet" as="h2">Redux.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="express-logo-tablet" src={ExpressLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="express-header-tablet" as="h2">Express.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Image id="canto-logo-tablet" src={Canto} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                        <Header id="canto-header-tablet" as="h2">Canto</Header>
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

export default SkillSectionTablet;