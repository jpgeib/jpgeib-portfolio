import React, { Component } from "react";
import { Form, Button, TextArea } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { email, required } from "redux-form-validators";

import "./style.css";

class ContactForm extends Component {

    renderName = ({ input, meta, placeholder }) => {
        return(
            <Form.Input 
                {...input}
                error={meta.touched && meta.error}
                fluid
                autoComplete="off"
                placeholder={placeholder}
            />
        )
    }

    renderEmail = ({ input, meta }) => {
        return(
            <Form.Input 
                {...input}
                error={meta.touched && meta.error}
                fluid
                icon="user"
                iconPosition="left"
                autoComplete="off"
                placeholder="Enter your email..."
            />
        )
    }

    renderDescription = ({ input, meta }) => {
        return(
            <Form.Input 
                {...input}
                error={meta.touched && meta.error}
                fluid
                icon="write"
                control={TextArea}
                iconPosition="left"
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
        return(
            <>
                <Form id="contact-form" onSubmit={handleSubmit(this.onSubmit)} method="POST" >
                    <Field 
                        name="name"
                        component={this.renderName}
                        validate={
                            required({ msg: "You must provide a name." })
                        }
                    />
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
                    <Field 
                        name="description"
                        component={this.renderDescription}
                        validate={
                            required({ msg: "You must provide a description." })
                        }
                    />
                    <Button
                        id="contact-submit-btn"
                        content="Submit"
                        fluid
                        size="large"
                        type="submit"
                        disabled={invalid || submitting || submitFailed}
                    />
                </Form>
            </>
        );
    }

}

export default reduxForm({ form: "contact" })(ContactForm);

