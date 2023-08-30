import React, { Component } from "react";
import BlogComputer from "./BlogComputer";
import BlogMobile from "./BlogMobile";
import BlogTablet from "./BlogTablet";

class Blog extends Component {
    render() {

        const { width, text } = this.props;
        const { computer, tablet, mobile } = this.props.blog;

        return (
            <>
                {/* {width <= 426 && <BlogMobile mobile={mobile} text={text} />}
                {(width >= 427 && width <= 1023) && <BlogTablet tablet={tablet} text={text} />}
                {width >= 1024 && <BlogComputer computer={computer} text={text} />} */}
            </>
        );
    }
};

export default Blog;