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
                })
            }, (error) => {
                console.log(error.text);
            });
    }

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Grid id="contact-container">
                <Grid.Column width={16}>
                    <Header id="contact-header" as="h1">Contact</Header>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Header id="contact-subheader" as="h3">Please enter the following information:</Header>
                </Grid.Column>
                <Grid.Column width={16}>
                    <ContactForm 
                        onSubmit={this.onSubmit}
                        success={this.state.success}
                    />
                </Grid.Column>
            </Grid>
        );
    }
}

export default Contact;