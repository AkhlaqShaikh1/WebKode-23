import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Dialog from '../modal/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const [participationType, setParticipationType] = useState("solo");
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const handleFullNameChange = event => setFullName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handleParticipationTypeChange = event => setParticipationType(event.target.value);
  const handleTeamNameChange = event => setTeamName(event.target.value);
  const handleTeamMembersChange = event => setTeamMembers(event.target.value.split(','));
  const navigate = useNavigate()
  const location = useLocation().pathname.split('/')[2]

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    if(participationType==="solo"){
    if (!fullName || !email ) {
      // Check if any required field is empty
      toast.error("Please fill in all required fields");
    } else {
      setValidated(true);
      const { data } = await axios.post('http://localhost:4500/api/user/register', { fullName, email, participationType, teamName, teamMembers });
      if (data.status === "create") {
        toast.success("Registered success!!!")
      } else {
        toast.info("You are already registered")
      }
      setFullName("");
      setEmail("");
      setParticipationType("");
      setTeamName("");
      setTeamMembers([])
      navigate('/')
    }}else if(participationType==="team"){
      if (!teamName || !email || !teamMembers ) {
        // Check if any required field is empty
        toast.error("Please fill in all required fields");
      } else {
        setValidated(true);
        const { data } = await axios.post('http://localhost:4500/api/user/register', { fullName, email, participationType, teamName, teamMembers });
        if (data.status === "create") {
          toast.success("Registered success!!!")
        } else {
          toast.info("You are already registered")
        }
        setFullName("");
        setEmail("");
        setParticipationType("");
        setTeamName("");
        setTeamMembers([])
        navigate('/')
      }
    }else{
      toast.error("Please fill in all required fields");
    }
  }
  return (
    <><Form noValidate validated={validated} onSubmit={handleSubmit}>
      {location !== 'workshop' && <Form.Group controlId="participationType">
        <Form.Label>Participation Type</Form.Label>
        <Form.Control required as="select" value={participationType} onChange={handleParticipationTypeChange}>
          <option value="">--Please select--</option>
          <option value="solo">Solo</option>
          <option value="team">Team</option>
        </Form.Control>
      </Form.Group>}
      {
        participationType === "solo" && (
          <>
            <Form.Group controlId="lastName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required type="text" placeholder="Enter your full name" value={fullName} onChange={handleFullNameChange} />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control required type="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
            </Form.Group>
          </>
        )
      }
      {participationType === 'team' && (
        <>
          <Form.Group controlId="teamName">
            <Form.Label>Team Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your team name" value={teamName} onChange={handleTeamNameChange} />
          </Form.Group>

          <Form.Group controlId="teamMembers">
            <Form.Label>Team Members (comma-separated)</Form.Label>
            <Form.Control required type="text" placeholder="Enter your team members" value={teamMembers} onChange={handleTeamMembersChange} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address of team lead</Form.Label>
            <Form.Control required type="email" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
          </Form.Group>
        </>
      )}

      <Button variant="primary" type="submit" className='mt-2'>Register</Button>
    </Form>
    </>
  );
}
const RegistrationForm = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <Dialog show={show} setShow={setShow} elem={<RegisterForm />} title={"Registeration Form"} />
    </>
  )
}
export default RegistrationForm;
