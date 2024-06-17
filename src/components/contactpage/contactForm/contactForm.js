import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const seriveId = "service_5xnchn7";
  const publicKey = "Xoav8Np5VdCfwicUW";
  const templateId = "template_qfqlk3p";

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init({
      publicKey: publicKey,
    });
  }, [publicKey]);

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
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Email is not valid";
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      formErrors.phone = "Phone number is not valid. It should be 10 digits.";
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
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
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
        Phone:
        <input
          className="text-input-field"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
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
      <button type="submit">Send Your Enquiry</button>
    </form>
  );
};

export default ContactForm;
