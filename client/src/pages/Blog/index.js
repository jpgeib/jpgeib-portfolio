import React, { Component } from "react";
import "./style.css";
import BlogComputer from "./BlogComputer";
import BlogMobile from "./BlogMobile";
import BlogTablet from "./BlogTablet";
import { Grid, Image, Header, Divider } from "semantic-ui-react";
import StyleFolders from "../../assets/screenshots/style-folder-structure.png";
import FixingResponsive from "../../assets/screenshots/fixing-responsive-logic.png";
import LearnedCSharp from "../../assets/screenshots/learned-CSharp.png";

class Blog extends Component {
    render() {

        const { width, text } = this.props;
        const { computer, tablet, mobile } = this.props.blog;

        {/* {width <= 426 && <BlogMobile mobile={mobile} text={text} />}
                {(width >= 427 && width <= 1023) && <BlogTablet tablet={tablet} text={text} />}
                {width >= 1024 && <BlogComputer computer={computer} text={text} />} */}
        const blogData = [
            {
                id: 1,
                image: LearnedCSharp,
                entry: text.entry3
            }
        ];

        return (
            <div id="page">
                <Grid id="header-container">
                    <Grid.Row>
                        <Grid.Column>
                            <Header className="header" as="h1">Web Developer Blog</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header className="header" as="h3">This is where I post updates on what I'm currently working on, what I'm learning, or interesting discoveries I've found.</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="blog-container">
                    {blogData.map((blog, index) => (
                        <>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Image size="big" src={blog.image} />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Header className="entry" as="h2">03/03/22 - 1:07 PM</Header>
                                    <Header className="entry" as="h3">{blog.entry.paragraph1}</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Divider inverted />
                        </>
                    ))}
                    {/* <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={entry} as="h3">{entry3.paragraph2}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="big" src={FixingResponsive} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header style={entry} as="h2">11/20/21 - 5:10 PM</Header>
                            <Header style={entry} as="h3">{entry2.paragraph1}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column width={16}>
                            <Header style={entry} as="h3">{entry2.paragraph2}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider inverted />
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
                            <Image size="medium" src={StyleFolders} />
                        </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={8}>
                            <Header style={entry} as="h2">11/16/21 - 6:53 PM</Header>
                            <Header style={entry} as="h3">{entry1}</Header>
                        </Grid.Column>
                    </Grid.Row> */}
                </Grid>
            </div>
        );
    }
};

export default Blog;