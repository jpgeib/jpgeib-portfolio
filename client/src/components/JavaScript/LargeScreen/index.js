import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import JavaScript from "../../../assets/images/Javascript-icon.png";

class LargeScreen extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
};

export default LargeScreen;