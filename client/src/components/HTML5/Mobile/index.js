import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../assets/images/HTML-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
};

export default Mobile;