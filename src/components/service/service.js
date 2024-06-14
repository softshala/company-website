import React from "react";
import ServiceCard from "./service_card/ServiceCard";
import "./service.css";
import { icons } from "react-icons";

import {
  FaSalesforce,
  FaPython,
  FaReact,
  FaMicrosoft,
  FaBoxOpen,
} from "react-icons/fa";

const services = [
  {
    title: "Salesforce Development",
    description:
      "It involves leveraging Salesforce's robust features and tools to build tailored solutions that enhance business processes, improve customer engagement, and drive overall efficiency.",
    icon: FaSalesforce,
  },
  {
    title: "Salesforce Managed Services",
    description:
      "Salesforce Managed Services play a crucial role in maintaining the health and effectiveness of a Salesforce implementation, ensuring that it evolves with the organization's needs.",
    icon: FaSalesforce,
  },
  {
    title: "Python Development",
    description:
      "Python development refers to the process of creating software applications, scripts, and solutions using the Python programming language.",
    icon: FaPython,
  },
  {
    title: "ReactJs Development",
    description:
      "ReactJS development empowers developers to create dynamic and efficient user interfaces for single-page applications, enabling a smooth and responsive user experience.",
    icon: FaReact,
    highlighted: true,
  },
  {
    title: "Power BI",
    description:
      "Power BI is a business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities.",
    icon: FaMicrosoft,
  },
  {
    title: "Salesforce Integration Services",
    description:
      "Salesforce Integration Services ensure the seamless operation and communication of various systems within an enterprise environment.",
    icon: FaSalesforce,
  },
  {
    title: "Hire a Resource",
    description:
      "ReactJS development empowers developers to create dynamic and efficient user interfaces for single-page applications, enabling a smooth and responsive user experience.",
    icon: FaBoxOpen,
  },
];
const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <p>This text briefly introduces visitors to your main services.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            highlighted={service.highlighted}
            Icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
