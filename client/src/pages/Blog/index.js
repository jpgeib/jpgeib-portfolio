import React, { Component } from "react";
import BlogComputer from "./BlogComputer";
import BlogMobile from "./BlogMobile";
import BlogTablet from "./BlogTablet";

class Blog extends Component {
    render() {

        const { computer, tablet, mobile } = this.props.blog;

        return (
            <>
                <BlogMobile mobile={mobile} />
                <BlogTablet tablet={tablet} />
                <BlogComputer computer={computer} />
            </>
        );
    }
};

export default Blog;