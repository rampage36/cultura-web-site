import React, { Component } from "react";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import SmallLogo from "../Assets/SMALLLOGO.png";

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card className="m-3">
                            <img
                                width={100}
                                height={100}
                                className="mr-3"
                                src={ SmallLogo }
                            />
                        <Card.Body>
                            <h5>Track Name</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis, et hendrerit velit porta.
                            Suspendisse hendrerit erat ligula.
                            </p>
                        </Card.Body>
                        </Card>
                        <Card className="m-3">
                            <img
                                width={100}
                                height={100}
                                className="mr-3"
                                src={ SmallLogo }
                            />
                        <Card.Body>
                            <h5>Track Name</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis, et hendrerit velit porta.
                            Suspendisse hendrerit erat ligula.
                            </p>
                        </Card.Body>
                        </Card>
                        <Card className="m-3">
                            <img
                                width={100}
                                height={100}
                                className="mr-3"
                                src={ SmallLogo }
                            />
                        <Card.Body>
                            <h5>Track Name</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis, et hendrerit velit porta.
                            Suspendisse hendrerit erat ligula.
                            </p>
                        </Card.Body>
                        </Card>
                        <Card className="m-3">
                            <img
                                width={100}
                                height={100}
                                className="mr-3"
                                src={ SmallLogo }
                            />
                        <Card.Body>
                            <h5>Track Name</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis, et hendrerit velit porta.
                            Suspendisse hendrerit erat ligula.
                            </p>
                        </Card.Body>
                        </Card>
                        <Card className="m-3">
                            <img
                                width={100}
                                height={100}
                                className="mr-3"
                                src={ SmallLogo }
                            />
                        <Card.Body>
                            <h5>Track Name</h5>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis, et hendrerit velit porta.
                            Suspendisse hendrerit erat ligula.
                            </p>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Lorem</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Lorem</ListGroup.Item>
                                <ListGroup.Item>Amen</ListGroup.Item>
                                <ListGroup.Item>Ipsum</ListGroup.Item>
                                <ListGroup.Item>Nullam</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Integer accumsan consectetur sagittis.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}