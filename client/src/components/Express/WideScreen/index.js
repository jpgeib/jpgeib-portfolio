import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import ExpressLogo from "../../../assets/images/expressjs.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Image id="express-logo-wide" src={ExpressLogo} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Header id="express-header-wide" as="h2">Express.js</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default WideScreen;