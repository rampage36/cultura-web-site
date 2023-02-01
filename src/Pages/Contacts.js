import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1> Contact with us </h1>
                <Form>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Text>
                            We'll never share you email with anyone else...
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                        <Form.label> Sample text </Form.label>
                        <Form.Control as="textarea" rows="4" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckBox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" > Submit </Button>
                </Form>
            </Container>
        )
    }
}