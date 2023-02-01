import React, { Component } from "react";
import { Container, Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import logo from './logo.png'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark"> 
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo} 
                            heigh="40"
                            width="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                            /> Cultura 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link> 
                            <Nav.Link href="/about">About us</Nav.Link> 
                            <Nav.Link href="/contacts">Contacts</Nav.Link> 
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='me-sm-2'
                            />
                        </Form> 
                        <Button variant="outline-info">Search</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="about" element={<About/>} />
                        <Route path="/contacts" element={<Contacts/>} />
                        <Route path="/blog" element={<Blog/>} />
                    </Routes>
                </Router>
            </>
        );
    }
}