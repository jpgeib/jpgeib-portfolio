import React, { Component } from "react";
import FooterComputer from "./Computer";
import FooterTablet from "./Tablet";
import FooterMobile from "./Mobile";

class Footer extends Component {
    render() {

        const { width } = this.props;
        const { computer, tablet, mobile } = this.props.footer;

        return (
            <>
                {width <= 426 && <FooterMobile mobile={mobile} />}
                {(width >= 427 && width <= 1023) && <FooterTablet tablet={tablet} />}
                {width >= 1024 && <FooterComputer computer={computer} />}
            </>
        );
    }
}

export default Footer;