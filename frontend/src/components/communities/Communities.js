import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../navbar/Navbar';
import { useLocation } from 'react-router-dom';
import "./Communities.css"

const Communities = () => {
    const location = useLocation();
    console.log(location.pathname.split('/')[2].split("%20"))
    let pathname = location.pathname.split('/')[2].replace("%20",' ')
    // pathname=pathname.split("/")
    const [showText, setShowText] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);
  
  
    return (
<Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <h1 className="text-center typing-animation" style={{ color: 'white' }}>Welcome to {pathname} Community</h1>
  {showText && (
    <div className="recruitment-container d-flex flex-column justify-content-center align-items-center">
      <h2 className="recruitment-text text-center typing-animation" style={{ color: 'white' }}>Communities to go live soon!</h2>
      {/* <h3 className='text-light typing-animation'>Stay Tuned</h3> */}
      {/* <Button variant="primary" className="shake-on-hover">Join Now</Button> */}
    </div>
  )}
</Container>
    );;
};

export default Communities;