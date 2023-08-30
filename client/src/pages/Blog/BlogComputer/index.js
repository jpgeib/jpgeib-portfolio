import React, { Component } from "react";
import { Grid, Image, Header, Divider } from "semantic-ui-react";
import StyleFolders from "../../../assets/screenshots/style-folder-structure.png";
import FixingResponsive from "../../../assets/screenshots/fixing-responsive-logic.png";
import LearnedCSharp from "../../../assets/screenshots/learned-CSharp.png";

class BlogComputer extends Component {
    render() {

        const { page, headerContainer, header, entry, container } = this.props.computer;
        const { entry1, entry2, entry3 } = this.props.text;

        const blogData = [
            { 
                id: 1, 
                image: LearnedCSharp,
                styles: {
                    page,
                    headerContainer,
                    header,
                    entry,
                    container
                },
                text: {
                    entry1,
                    entry2,
                    entry3
                } 
            }
        ];
        return (
            <div style={page}>
                <Grid style={headerContainer}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={header} as="h1">Web Developer Blog</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={header} as="h3">This is where I post updates on what I'm currently working on, what I'm learning, or interesting discoveries I've found.</Header>
                        </Grid.Column>
                    </Grid.Row>   
                </Grid>
                <Grid style={container}>
                    {blogData.map((blog) => (
                    <>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="big" src={blog.image} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header style={blog.styles.entry} as="h2">03/03/22 - 1:07 PM</Header>
                            <Header style={blog.styles.entry} as="h3">{blog.text.entry3.paragraph1}</Header>
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

export default BlogComputer;