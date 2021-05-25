import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import SQL from "../../../assets/images/sql-logo.png";

class LargeScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid}>
                        <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Row}>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                <Image id="sql-logo-large" src={SQL} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyLargeScreen} minWidth={1572} maxWidth={1919} as={Grid.Column} width={16}>
                                <Header id="sql-header-large" as="h2">SQL</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default LargeScreen;