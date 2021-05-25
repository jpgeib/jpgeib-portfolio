import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import SQL from "../../../assets/images/sql-logo.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Image id="sql-logo-computer" src={SQL} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Header id="sql-header-computer" as="h2">SQL</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Computer;