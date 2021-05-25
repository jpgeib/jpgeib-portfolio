import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import Canto from "../../../assets/images/canto-logo-orange.png";

class LargeScreen extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
};

export default LargeScreen;