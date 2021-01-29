import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../assets/images/HTML-icon.png";
import CSS from "../../assets/images/CSS-icon.png";
import JavaScript from "../../assets/images/Javascript-icon.png";
import jQuery from "../../assets/images/jquery-logo.png";
import SQL from "../../assets/images/sql-logo.png";
import MongoDB from "../../assets/images/mongodb-logo.png";
import ReactLogo from "../../assets/images/classic-react-logo.png";
import ReduxLogo from "../../assets/images/redux-logo.png";
import ExpressLogo from "../../assets/images/expressjs.png";
import Canto from "../../assets/images/canto-logo-orange.png";

import "./style.css";

class SkillSectionWide extends Component {
    render() {
        return (
            <div id="skills-page-wide">
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="skills-headers-container-wide">
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="skills-header-wide" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="skills-subheader-wide" as="h3">I am proficient in the following technologies:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="skills-container-wide">
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="html5-logo-wide" src={HTML5} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="html5-header-wide" as="h2">HTML5</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="css-logo-wide" src={CSS} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="css-header-wide" as="h2">CSS</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="javascript-logo-wide" src={JavaScript} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="javascript-header-wide" as="h2">JavaScript</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="jquery-logo-wide" src={jQuery} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="jquery-header-wide" as="h2">jQuery</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="sql-logo-wide" src={SQL} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="sql-header-wide" as="h2">SQL</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="mongo-logo-wide" src={MongoDB} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="mongo-header-wide" as="h2">MongoDB</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="react-logo-wide" src={ReactLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="react-header-wide" as="h2">React.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="redux-logo-wide" src={ReduxLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="redux-header-wide" as="h2">Redux.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}></Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="express-logo-wide" src={ExpressLogo} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="express-header-wide" as="h2">Express.js</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Image id="canto-logo-wide" src={Canto} size="small" />
                                    </Responsive>
                                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                        <Header id="canto-header-wide" as="h2">Canto</Header>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}></Responsive>
                    </Responsive>
                </Responsive>
            </div>
        );
    }
}

export default SkillSectionWide;