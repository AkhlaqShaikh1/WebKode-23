import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './EventDetails.css';
import { useLocation } from 'react-router-dom';
import Gallery from '../gallery/Gallery';
import NavBar from '../navbar/Navbar';
import events from '../data';

const EventDetailsPage = () => {
  const { state } = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const eventData = events.find((item) => item.title === state?.title);
    setData(eventData);
  }, [state]);

  return (
    <>
      <NavBar />
      <Container style={{color: "rgba(0, 0, 0, 0.87)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "4px",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  overflow: "hidden",
  backgroundColor: "rgba(60, 60, 60, 0.4)"}}>
        <Row className="mt-4 text-light">
          <Col xs={12} className="text-center">
            <h1 className="event-name">{data.title}</h1>
            <p className="event-date">{data.date}</p>
          </Col>
        </Row>

        <Row className="mt-4 text-light">
          <Col xs={12}>
            <p className="description-text">{data.longDescription}</p>
          </Col>
        </Row>

        <Row className="mt-4 text-light">
          <Col xs={12}>
            {/* Add your gallery/slider component here */}
            {/* Example: <GallerySlider /> */}
            <Gallery />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            {/* Add your leaderboard component here */}
            {/* Example: <Leaderboard /> */}
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12}>
            {/* Add your sponsor component here */}
            {/* Example: <Sponsors /> */}
          </Col>
        </Row>
        <Row className="mt-4 text-light ">
          <h3 className="winners-heading">Winners</h3>
        <Col xs={12} className="table-container-winner">
    {data && data.participants && data.participants.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {data.participants.map((participant, index) => (
            <tr key={index}>
              <td>{participant.rank}</td>
              <td>{participant.name}</td>
              <td>{participant.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No participants found.</p>
    )}
  </Col>
</Row>
      </Container>
    </>
  );
};

export default EventDetailsPage;
