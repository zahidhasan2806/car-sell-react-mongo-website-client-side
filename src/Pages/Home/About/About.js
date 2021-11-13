import { faCar, faHandshake, faKey, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container className="about mb-5">
            <Row className="p-0">
                <Col md={6} className="about-info bg-dark ">
                    <Row className="text-lg-end text-md-start text-sm-start m-0 p-0">
                        <Col md={6}>
                            <h1><FontAwesomeIcon icon={faCar} /></h1>
                            <h5>ALL BRANDS</h5>
                            <p>We have almost all famous brands.we provide all latest cars.</p>
                        </Col>
                        <Col md={6}>
                            <h1><FontAwesomeIcon icon={faHandshake} /></h1>
                            <h5>FREE SUPPORT</h5>
                            <p>We provide free support to our customers.we are available 24/7.</p>
                        </Col>
                        <Col md={6}>
                            <h1><FontAwesomeIcon icon={faKey} /></h1>
                            <h3>DEALERSHIP</h3>
                            <p>We are are officially associate with some well known brands like BMW,AUDI</p>
                        </Col>

                        <Col md={6}>
                            <h1><FontAwesomeIcon icon={faWallet} /></h1>
                            <h3>AFFORDABLE</h3>
                            <p>Our motto to sell cars with a reasonable price so that people can afford it and we also have EMI system.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}></Col>

            </Row>
        </Container>
    );
};

export default About;