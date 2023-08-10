import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Membership = ({ handleMembershipSubmit }) => {
  const navigate=useNavigate()
  const [file,setFile]=useState("")
  const [validated, setValidated] = useState(false);
  const [disabled,setDisabled]=useState(false)
  const handleFileChange=(event)=>{
    setFile(event.target.files[0])
  }
  const handleSubmit = async (event) => {
    setDisabled(true)
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      toast.error("Please fill in all required fields");
      setDisabled(false)
      event.stopPropagation();
    } else {
      setValidated(true);
      const data_obj = new FormData(form);
      const payload = {
        email: data_obj.get('email'),
        fullname: data_obj.get('full name'),
        phone: data_obj.get('phone'),
        university: data_obj.get('university'),
        batch: data_obj.get('batch'),
        interest: data_obj.get('interest'),
        domain: data_obj.get('domain'),
        profileImg: data_obj.get('profileImg'),
      };
      // form.reset();
      const response = await axios.post("http://localhost:4500/api/user/membership", payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { data } = response;
      if (response.status === 200) {
        if (data.status === "create") {
          toast.success("Your Request have been received!!")
          handleMembershipSubmit();
        } else {
          toast.info("You are already a member")
          setDisabled(false)
        }
      } else {
        setDisabled(false)
        toast.error('There is an error. Retry!')
      }
      navigate('/');
    }
  };
  

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data">
      <Row className="mb-3">
      <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>Email <span className="text-danger">*</span></Form.Label>
          <Form.Control required type="email" placeholder="Enter email" name="email" readOnly={disabled}/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Full name <span className="text-danger">*</span></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full name"
            name="full name"
            readOnly={disabled}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
        <InputGroup>
  <InputGroup.Text id="basic-addon1">+92</InputGroup.Text>
  <Form.Control
    required
    type="text"
    placeholder="Phone"
    name='phone'
    pattern="[0-9]{11}"
    title="Phone number must be 11 digits"
    readOnly={disabled}
    minLength={11}
    maxLength={11}
    
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }}
  />
</InputGroup>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>University <span className="text-danger">*</span></Form.Label>
        <Form.Select required name="university" disabled={disabled}>
      {/* <option value="">select</option> */}
      <option value="NED University">NED University</option>
      <option value="Karachi University">Karachi University</option>
      <option value="IBA">IBA</option>
    </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>Batch <span className="text-danger">*</span></Form.Label>
        <Form.Select required name="batch" disabled={disabled}>
        {/* <option value="">select</option> */}
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
    </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom03">
        <Form.Label>Domain of Interest <span className="text-danger">*</span></Form.Label>
        <Form.Select required name="interest" disabled={disabled}>
      {/* <option value="">select</option> */}
      {/* <option value="web development">Web development</option> */}
      <option value="computer science">Computer Science</option>
      <option value="artificial intelligence">Artificial Intelligence</option>
      <option value="cyber security">Cyber Security</option>
      <option value="data science">Data Science</option>
    </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom03">
        <Form.Label>Domain <span className="text-danger">*</span></Form.Label>
        <Form.Select required name="domain" disabled={disabled}>
      {/* <option value="">select</option> */}
      <option value="lead">Lead</option>
      <option value="technical">Technical</option>
      <option value="graphicss">Graphics</option>
      <option value="marketing">Marketing</option>
      <option value="social media">Social Media</option>
      {/* <option value="blockchain">Blockchain</option> */}
    </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
<Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>Input picture <span className="text-danger">*</span></Form.Label>
        <Form.Control type="file" required name="profileImg" accept="image/*" onChange={handleFileChange} readOnly={disabled}/>
      </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" disabled={disabled}>Submit form</Button>
    </Form>
  );
}
export default Membership
