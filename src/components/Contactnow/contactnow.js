import React, { useState, useEffect } from "react";
import "./contactnow.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// Email.send({
//   Host: "smtp.elasticemail.com",
//   Username: "username",
//   Password: "password",
//   To: "them@website.com",
//   From: "you@isp.com",
//   Subject: "This is the subject",
//   Body: "And this is the body",
// }).then((message) => alert(message));

function ContactNow() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  useEffect(() => {
    console.log("this method called when i get to this screen");
    // Perform any data fetching or subscriptions here
    emailjs.init({
      publicKey: publicKey,
    });
  }, []);

  const seriveId = "service_5xnchn7";
  const publicKey = "Xoav8Np5VdCfwicUW";

  const templateId = "template_qfqlk3p";

  // const seriveId = "service_dv2kwjl";
  // const publicKey = "rSuRXwu8i3AexgZQs";

  // const templateId = "template_5emunp9";

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.firstName.trim()) {
      formErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      formErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Email is not valid";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be 10 digits";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const bodyMessage = `Full Name: ${formData.firstName}${formData.lastName}<br> Email: ${formData.email}<br> Phone Number: ${formData.phoneNumber}<br> Message: ${formData.message}`;

      const templateParams = {
        from_name: fullName,
        from_email: formData.email,

        to_name: "SoftShala",
        message: formData.message,
        name: fullName,
        email: formData.email,
        phone: formData.phoneNumber,
      };

      // window.Email.send({
      //   Host: "smtp.elasticemail.co m",
      //   Username: "flaman241@gmail.com",
      //   Password: "E9A4320E7DFB59C581A7FBF91D3C5C0EB235",
      //   To: "flaman241@gmail.com",
      //   From: for,
      //   // Subject: "This is the subject",

      //   Body: bodyMessage,
      // })
      //   .then((message) => alert("Mail sent successfully!"))
      //   .catch((error) => console.error("Failed to send email:", error));

      emailjs.send(seriveId, templateId, templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
      // Form is valid, proceed with submission logic
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <Container fluid className="contactnow-section">
      <Row className="contactrow-section">
        <Col lg={6} className="first-section">
          <div className="contact-text ">
            <h1>Contact Now</h1>
            <p>Boost Your business with Salesforce Excellence.</p>
          </div>
        </Col>

        <Col lg={6} className="second-section">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="firstName" className="form-first-name">
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="lastName" className="form-last-name">
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Form.Group controlId="email" className="form-email">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group controlId="phoneNumber" className="form-phone-number">
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                isInvalid={!!errors.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Form.Group controlId="message" className="form-message">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Container className="button-container">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Container>
            <br></br>
          </Form>
          {submitted && (
            <Alert variant="success">
              Your message has been submitted successfully!
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ContactNow;
