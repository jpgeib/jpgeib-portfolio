import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import JavaScript from "../../../assets/images/Javascript-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
};

export default Mobile;