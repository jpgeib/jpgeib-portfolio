import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import JQuery from "../../../assets/images/jquery-logo.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <Image id="jquery-logo-mobile" src={JQuery} size="small" />
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                    <Header id="jquery-header-mobile" as="h2">jQuery</Header>
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