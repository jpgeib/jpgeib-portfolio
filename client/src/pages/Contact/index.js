import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ContactForm from "../../components/ContactForm";
import emailjs from "emailjs-com";

import "./style.css";


class Contact extends Component {

    state = {
        name: "",
        email: "",
        text: "",
        success: ""
    }

    onSubmit = () => {
        emailjs.sendForm("default_service", "template_0o77yYWu", "#contact-form", "user_3Qcpjg0QCzjUatTj31evA")
            .then(() => {
                this.setState({
                    name: "",
                    email: "",
                    text: "",
                    success: "Message Sent"
                });
                console.log(this.state.success)
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div id="contact-page">
                <Grid id="contact-header-container">
                    <Grid.Column width={16}>
                        <Header id="contact-header" as="h1">Contact</Header>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Header id="contact-subheader1" as="h3">You can reach me directly by phone or email:</Header>
                    </Grid.Column>
                </Grid>
                <Grid id="contact-container1">
                    <Grid.Column width={8}>
                        <Header id="contact-phone" as="h2">Phone: +1 (203)-736-7540</Header>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header id="contact-email" as="h2">E-mail: jpgeib2@gmail.com</Header>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column width={16}>
                        <Header id="OR-connector" as="h1">OR</Header>
                    </Grid.Column>
                </Grid>
                <Grid id="contact-container2">
                    <Grid.Column width={16}>
                        <Header id="contact-subheader2" as="h3">Please enter the following information below:</Header>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <ContactForm
                            onSubmit={this.onSubmit}
                            success={this.state.success}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Contact;