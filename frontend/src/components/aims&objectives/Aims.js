import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Aims.css';

function AimsAndObjectives() {
  return (
<div className="aims-and-objectives-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="aims-and-objectives-header">Our Aims and Objectives</h2>
            <p className="aims-and-objectives-text">Our club has the following aims and objectives:</p>
            <ul className="aims-and-objectives-list">
              <li>To provide a supportive community for students interested in coding</li>
              <li>To foster a culture of learning and collaboration among members</li>
              <li>To organize regular meetups, workshops, and hackathons to promote skill-building</li>
              <li>To encourage members to pursue personal coding projects and showcase their work</li>
              <li>To provide mentorship and resources for members seeking career opportunities in tech</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AimsAndObjectives;
