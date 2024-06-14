import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const seriveId = "service_5xnchn7";
  const publicKey = "Xoav8Np5VdCfwicUW";

  const templateId = "template_qfqlk3p";
  // const seriveId = "service_dv2kwjl";
  // const publicKey = "rSuRXwu8i3AexgZQs";

  // const templateId = "template_5emunp9";

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init({
      publicKey: publicKey,
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Email is not valid";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "SoftShala",
        message: formData.message,
      };
      emailjs.send(seriveId, templateId, templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="label-text">
        Name:
        <input
          className="text-input-field"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </label>
      <label className="label-text">
        Email:
        <input
          className="text-input-field"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </label>
      <label className="label-text">
        Message:
        <textarea
          className="text-input-field"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <span className="error-message">{errors.message}</span>
        )}
      </label>
      <button type="submit" onClick={handleSubmit}>
        Send Your Enquiry
      </button>
    </form>
  );
};

export default ContactForm;
