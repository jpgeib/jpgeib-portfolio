import React, { Component } from "react";
import BlogComputer from "./BlogComputer";
import BlogMobile from "./BlogMobile";
import BlogTablet from "./BlogTablet";

class Blog extends Component {
    render() {

        const { width } = this.props;
        const { computer, tablet, mobile } = this.props.blog;

        return (
            <>
                {width <= 426 && <BlogMobile mobile={mobile} />}
                {(width >= 427 && width <= 1023) && <BlogTablet tablet={tablet} />}
                {width >= 1024 && <BlogComputer computer={computer} />}
            </>
        );
    }
};

export default Blog;