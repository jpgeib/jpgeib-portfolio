import React, { Component } from "react";
import FooterComputer from "./Computer";

class Footer extends Component {
    render() {

        const { computer } = this.props.footer;

        return (
            <>
                <FooterComputer computer={computer} />
            </>
        );
    }
}

export default Footer;