import React, { Component } from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import ReactLogoWhite from "../../assets/images/React-Logo-White.png";
import SemanticLogoWhite from "../../assets/images/semantic-ui-logo.png";

import "./style.css";

class Footer extends Component {
    render() {

        const { width } = this.props;

        return (
            <>
                {/* {width <= 426 && <FooterMobile mobile={mobile} />}
                {(width >= 427 && width <= 1023) && <FooterTablet tablet={tablet} />}
                {width >= 1024 && <FooterComputer computer={computer} />} */}

                <Grid id="footer">
                    <Grid.Row>
                        <Grid.Column>
                            <Header id="footer-header" as="h1">Powered by:</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="footer-icons">
                        <Grid.Column width={1}>
                            <a href="https://reactjs.org/" target=":blank">
                                <Image className="footer-link" id="react-link" size="tiny" src={ReactLogoWhite} />
                            </a>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <a href="https://react.semantic-ui.com/" target=":blank">
                                <Image className="footer-link" id="semantic-link" size="tiny" src={SemanticLogoWhite} />
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default Footer;