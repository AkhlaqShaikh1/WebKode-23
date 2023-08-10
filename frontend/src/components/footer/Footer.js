import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.5);",backdropFilter: "blur(10px)",color: "#fff" ,padding: "2rem 0" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>
            We are a community of students who love coding and building cool projects together. Our club is open to students of all levels, from beginners to experienced developers.We believe that learning to code should be fun and collaborative. That's why we organize regular meetups, workshops, and hackathons to bring our members together and provide opportunities for them to learn and grow.
            </p>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>
            
            NED Colony Ring St <br />
              NED University Of Engineering & Technology <br />
              Karachi, Sindh, Pakistan<br />
              Phone: (123) 456-7890 <br />
              Email: <a href="mailto:koderazklubcsit@gmail.com" style={{textDecoration:"none"}} className="text-primary">koderazklubcsit@gmail.com</a>
            </p>
          </Col>
          <Col md={4}>
  <h4 style={{ color: "#fff" }}>Follow Us</h4>
  <ul className="list-unstyled d-flex">
    <li className="me-3">
      <a href="https://www.facebook.com/profile.php?id=100087510656043" target="_blank" rel="noreferrer">
        <FaFacebook size={24} style={{ color: "#fff" }} />
      </a>
    </li>
    <li className="me-3">
      <a href="https://www.linkedin.com/company/koderz-club/" target="_blank" rel="noreferrer">
        <FaLinkedin size={24} style={{ color: "#fff" }} />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/koderzclub/" target="_blank" rel="noreferrer">
        <FaInstagram size={24} style={{ color: "#fff" }} />
      </a>
    </li>
  </ul>
</Col>
        </Row>
        <hr style={{ borderColor: "#fff" }} />
        <p className="text-center fs-0.5" style={{ marginTop: "1rem" }}>
        Made with ❤️ by the TechTribe Team</p>
        <p className="text-center fw-bold fs-7" style={{ marginTop: "0rem" }}>
        Co'De Grace</p>
      </Container>
    </footer>
  );
};

export default Footer;

