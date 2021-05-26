import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import ExpressLogo from "../../../assets/images/expressjs.png";

class Mobile extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
};

export default Mobile;