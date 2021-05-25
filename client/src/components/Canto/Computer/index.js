import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import Canto from "../../../assets/images/canto-logo-orange.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Image id="canto-logo-computer" src={Canto} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Header id="canto-header-computer" as="h2">Canto</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Computer;