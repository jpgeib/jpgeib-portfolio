import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import Canto from "../../../assets/images/canto-logo-orange.png";

class Mobile extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
};

export default Mobile;