import React, { Component } from "react";
import { Grid, Form, Button, TextArea, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { email, required } from "redux-form-validators";

import "./style.css";

class ContactForm extends Component {

    renderName = ({ input, meta }) => {
        return (
            <Form.Input
                {...input}
                error={meta.touched && meta.error}
                autoComplete="off"
                placeholder="Enter your name..."
            />
        )
    }

    renderEmail = ({ input, meta }) => {
        return (
            <Form.Input
                {...input}
                error={meta.touched && meta.error}
                autoComplete="off"
                placeholder="Enter your email..."
            />
        )
    }

    renderDescription = ({ input, meta }) => {
        return (
            <Form.Input
                {...input}
                error={meta.touched && meta.error}
                icon="write"
                control={TextArea}
                autoComplete="off"
                placeholder="e.g. Business, Collaboration, etc."
            />
        )
    }

    onSubmit = () => {
        const { reset } = this.props;
        this.props.onSubmit();
        reset("contact");
    }

    render() {
        const { handleSubmit, invalid, submitting, submitFailed } = this.props;
        return (
            <>
                <Form id="contact-form" onSubmit={handleSubmit(this.onSubmit)} method="POST" >
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width="16">
                                <Header id="name-header" as="h3">Name:</Header>
                            </Grid.Column>
                            <Grid.Column width="16">
                                <Field
                                    name="name"
                                    component={this.renderName}
                                    validate={
                                        required({ msg: "You must provide a name." })
                                    }
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="email-header" as="h3">E-mail:</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Field
                                    name="email"
                                    component={this.renderEmail}
                                    validate={
                                        [
                                            required({ msg: "You must provide an e-mail address." }),
                                            email({ msg: "You must provide a valid e-mail address." })
                                        ]
                                    }
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header id="descrip-header" as="h3">Description:</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Field
                                    name="description"
                                    component={this.renderDescription}
                                    validate={
                                        required({ msg: "You must provide a description." })
                                    }
                                />
                            </Grid.Column>


                        </Grid.Row>
                        <Grid.Row>
                            <Button
                                id="contact-submit-btn"
                                content="Submit"
                                fluid
                                size="large"
                                type="submit"
                                disabled={invalid || submitting || submitFailed}
                            />
                        </Grid.Row>
                    </Grid>
                </Form>
            </>
        );
    }

}

export default reduxForm({ form: "contact" })(ContactForm);

