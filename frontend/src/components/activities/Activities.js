import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Activities.css";
import events from "../data";
import { useNavigate } from "react-router-dom";
import EventScheduleTable from "../tables/Table";
function ClubActivities() {
  const navigate = useNavigate();
  const now = new Date();

  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < now;
  });

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate > now;
  });

  const ongoingEvents = events.filter((event) => {
    const eventstart = new Date(event.start);
    const eventEndDate = new Date(event.endDate);
    return eventstart <= now && eventEndDate >= now;
  });
  console.log(ongoingEvents)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderEventCards = (events,btnText) => {
    return events.map((event, index) => {
      return (
        <Col key={index} md={4} className="mb-4">
          <Card className="m-2 event-card">
            <Card.Img variant="top" src={event.image} />
            <Card.Body className="event-card-body">
              <Card.Title className="text-light">{event.title}</Card.Title>
              <Card.Text className="text-light">{event.description}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  if(btnText==="Learn More"){
                  navigate(`/event/detail`, {
                    state: {
                      ...event,
                    },
                  })}else{
                    if(index!==2){
                    navigate(`/registeration/${event.type}`, {
                    state: {
                      ...event,
                    },
                  })
                  }};
                }}
              >
                {(index===2 && btnText==="Register")?"Open soon!":btnText}
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-lights">
                {event.start
                  ? `Starts on ${event.start}`
                  : `Date: ${event.date}`}
              </small>
            </Card.Footer>
          </Card>
        </Col>
      );
    });
  };

  return (
    <><div className="club-activities-container" id="event">
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="club-activities-header">Events</h2>
          <p className="club-activities-text">
            Check out our ongoing events below.
          </p>
        </Col>
      </Row>
      {ongoingEvents.length > 0 && (
        <Row className="justify-content-center">
          <Col xs={12} lg={5} className="event-table-container">
            {/* <span>Date</span><h3 className="event-heading text-center text-light"><img className="me-2 rounded-circle img-fluid" src={logo1} style={{ width: '50px', height: '50px' }} />{ongoingEvents[0].title}</h3><a>ffff</a>
             */}
             <Row className="align-items-center">
  <Col xs={3}>
  <span className="text-light">Date: 9 June, 23</span>
  </Col>
  <Col xs={6} className="d-flex justify-content-center">
    <h3 className="event-heading text-center text-light">
      {ongoingEvents[0].title}
    </h3>
  </Col>
  <Col xs={3}>
  <Button className="btn btn-primary shake-on-hover" style={{ backgroundColor: "rgb(201, 117, 81)", borderColor: "rgb(201, 117, 81)" }} disabled>Register</Button>

  </Col>
</Row>
            <hr className="hr" />
            
              <EventScheduleTable index={0}/>
            
          </Col>
          <Col xs={12} lg={5} className="event-table-container ">
            <Row className="align-items-center">
  <Col xs={3}>
    <span className="text-light">Date: 9 June, 23</span>
  </Col>
  <Col xs={6} className="d-flex justify-content-center">
    <h3 className="event-heading text-center text-light">
      {ongoingEvents[1].title}
    </h3>
  </Col>
  <Col xs={3}>
  <Button className="btn btn-primary shake-on-hover" style={{ backgroundColor: "rgb(201, 117, 81)", borderColor: "rgb(201, 117, 81)" }} disabled>Register</Button>
  </Col>
</Row>
            <hr className="hr" />
            
            <EventScheduleTable index={1}/>
            
          </Col>
        </Row>
      )}
    </Container>
  </div>
  
    <div className="club-activities-container" id="event">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={8} className="text-center">
            <h2 className="club-activities-header">Club Activities</h2>
            <p className="club-activities-text">
              Check out our past, ongoing, and upcoming events below.
            </p>
          </Col>
        </Row>
        {pastEvents.length > 0 && (
          <>
            <h3 className="text-light">Past Events</h3>
            <Slider {...settings}>{renderEventCards(pastEvents,"Learn More")}</Slider>
            <hr className="hr" />
          </>
        )}

        {upcomingEvents.length > 0 && (
          <>
            <h3 className="text-light">Upcoming Events</h3>
            <Slider {...settings}>{renderEventCards(upcomingEvents,"Register")}</Slider>
          </>
        )}
      </Container>
    </div></>
  );
}

export default ClubActivities;
