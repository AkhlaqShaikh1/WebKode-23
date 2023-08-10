import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Dialog from '../modal/Modal';
import './Hero.css';
import Membership from '../membership/Membership';

function Hero() {
  const [show, setShow] = useState(false);
  const handleModalClose = () => {
    setShow(false);
  };
  return (
<div className="hero-container d-flex flex-column justify-content-center align-items-right" id='hero'>
  <Container fluid>
    <Row>
      <Col lg={{ span: 8, offset: 2 }} xl={{ span: 5, offset: 7}} className="text-right">
        <h1 className="hero-header">Be A Part Of TechTribe</h1>
        <p className="hero-subtext">We are a community of students who love coding and building cool projects together. Whether you are an experienced developer or just getting started, there's a place for you in our club.</p>
        <Button className="btn-hero" onClick={() => setShow(true)}>Join Our Club</Button>
      </Col>
    </Row>
  </Container>
  <Dialog show={show} setShow={setShow} elem={<Membership handleMembershipSubmit={handleModalClose}/>} title={"Membership Form"} handleModalClose={handleModalClose} navigate='/'/>
</div>


  );
}

export default Hero;


