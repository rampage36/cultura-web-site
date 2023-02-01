import React, { Component } from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import FirstAboutImg from "../Assets/3.jpg";
import SecondAboutImg from "../Assets/5.jpg";
import ThirdAboutImg from "../Assets/4.jpg";

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-4">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Sample</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Photo</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Music</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="d-block mt-3" >
                                <Tab.Pane eventKey="first">
                                    <img src={ FirstAboutImg }
                                    heigh="850"
                                    width="650"/>
                                    <p>
                                    <pre  />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis,
                                    et hendrerit velit porta. Suspendisse hendrerit erat ligula.<br/>
                                    <pre  />Nullam ultrices commodo elit, mattis feugiat diam euismod in.
                                    Cras quis risus enim. Curabitur auctor tellus vitae posuere porta.
                                    Mauris molestie erat vel ultricies pulvinar. 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <img src={ SecondAboutImg }
                                    heigh="850"
                                    width="650"/>
                                    <p>
                                    <pre  />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis,
                                    et hendrerit velit porta. Suspendisse hendrerit erat ligula.<br/>
                                    <pre  />Nullam ultrices commodo elit, mattis feugiat diam euismod in.
                                    Cras quis risus enim. Curabitur auctor tellus vitae posuere porta.
                                    Mauris molestie erat vel ultricies pulvinar. 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey="third">
                                    <img src={ ThirdAboutImg }
                                    heigh="850"
                                    width="650"/>
                                    <p>
                                    <pre  />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Integer accumsan consectetur sagittis. Nullam viverra lorem et ligula iaculis,
                                    et hendrerit velit porta. Suspendisse hendrerit erat ligula.<br/>
                                    <pre  />Nullam ultrices commodo elit, mattis feugiat diam euismod in.
                                    Cras quis risus enim. Curabitur auctor tellus vitae posuere porta.
                                    Mauris molestie erat vel ultricies pulvinar. 
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}