import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import FirstImg from "../Assets/1.jpg";
import SecondImg from "../Assets/2.jpg";

export default class CarouselBox extends Component {
    render() {
        return (
        <Container>
            <Carousel>
                <Carousel.Item>
                        <img
                            className="d-block w-100 h-35 mt-3"
                            src={ FirstImg }
                            alt="asd"
                        />
                        <Carousel.Caption>
                            <h3>Sample image</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                            className="d-block w-100 h-35 mt-3"
                            src={ SecondImg }
                            alt="asd"
                        />
                        <Carousel.Caption>
                            <h3>Sample image</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
        )
    }
}