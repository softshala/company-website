import React from "react";

import "./servicecard.css";
const ServiceCard = ({ title, description, highlighted, Icon }) => {
  return (
    <div className={`service-card ${highlighted ? "" : ""}`}>
      {Icon && <Icon className="service-icon" />}

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
