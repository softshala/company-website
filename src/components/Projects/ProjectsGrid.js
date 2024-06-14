import React from "react";

import "./project.css";

import Project from "./Project";
import { Col, Container, Row } from "react-bootstrap";
const projects = [
  {
    id: 1,
    name: "Community Setup for Non-Profit Organization to Improve Material Distribution and Support Processes.",
    details:
      "Set up a Salesforce community for the organization to provide a platform for users to interact with the organization online. Created multiple custom panel for materials forms on LWC which were exposed to the community to collect data from users. Developed REST resources for distribution, dispatch receipts, and inventory, enabling external services to post or retrieve data from the organizationsystem. Configured community branding, layout, and custom theme to match the non-profit organizationbranding and website. Implemented moderation rules and roles to ensure that user-generated content is appropriate and meets the organizationstandards.",
    description:
      "The client is a non-profit organization that supports disaster-affected people in India by providing essential items such as health kits, clothes, and food items. To improve their material distribution and support processes, we were tasked with setting up a Salesforce community. The project involved creating an online platform on community cloud for users to submit forms and interact with the organization",
  },
  {
    id: 1,
    name: "CSV Loader Tool for Efficient User Data Import in Salesforce for an Event Management Firm",
    details:
      "Developed Lightning Web Components to allow for the import of CSV files containing user data, and mapped the CSV columns to the appropriate fields in the Salesforce object.Utilized bulk API to efficiently insert large amounts of user data into Salesforce.Created downloadable reports to allow users to easily view the imported data, as well as reports for bulk inserting users into multiple permission sets and public groups.Implemented email functionality to automatically send the CSV report to the useremail for easy reference.Implemented validation rules to ensure data accuracy and prevent duplicates during data import.",
    description:
      "The client was an event management firm looking to efficiently upload user data to Salesforce. The goal was to create a tool for bulk uploading users, matching CSV columns to Salesforce fields, and generating downloadable reports. Additional features included inserting users into multiple permission sets and public groups.",
  },
  {
    id: 1,
    name: "Sales cloud Implementation for Visa and Passport Service Provider Company",
    details:
      "Installed cf-7 plug-in into the website portal, so that whenever any customer fills the form into the website, the information will be saved as leads into the salesforce directly.Used Apex class and triggers for checking the duplication of the leads.Mapped standard fields of WordPress with the custom fields of Salesforce.Created a Web to case form on the website portal that can help the end customer to track the status of the application. The status of the application will directly be mailed to the given email address of the customer.Created an LWC component that help the client to share a link of the website through email to ask the customer for Ratings and Review.Created an LWC component for invoice template that has the capability to fetch the data and the sales rep can mail that invoice directly to the customer.Integrated Calendly with Salesforce so that customers can book appointments according to their convenience from the website itself.Integrate Salesforce with Sharepoint to store documents received from Salesforce directly in Sharepoint.",
    description:
      "The Client has a business in Australia and works as a mediator for customers who want to apply at the Indian High Commission. The business requirement of the project was that the client wanted an automated system through which they could manage their leads and get all the necessary information from customers to get government approval.",
  },
  {
    id: 1,
    name: "Custom Lead, Account, Contact, and Opportunity Assignment for an Online Education Platform",
    details:
      "Conducted a detailed analysis of the clientbusiness requirements to understand the specific needs and challenges related to assigning leads, accounts, and opportunities to the correct users. Configured Lead mapping field to account, ensuring that the correct leads are assigned to the correct accounts. Developed a custom lead, account, contact, and opportunity assignment rule, which allows the client to assign the right records to the right users based on Location type. Created a Web to Lead form to store the information of leads, making it easy for the client to manage their leads.",
    description:
      "The client is an online education platform that provides various courses related to medical students in the United Kingdom. The business requirement of the project is to create a Flow to assign leads, accounts, and account-related opportunities.",
  },
  {
    id: 1,
    name: "Integration of Nylas with Zoom, Google, Microsoft, and Salesforce for a Business Consultant Firm",
    details:
      " Conducted a thorough analysis of the existing Salesforce and Nylas systems to identify the potential integration points and requirements for the project. Developed a custom integration between Salesforce and Nylas using APIs and webhooks, with separate configurations for the two types of Nylas accounts. Configured the necessary components in Nylas to enable syncing with Salesforce for the accounts that could sync, and set up the custom workflow for meeting scheduling and event scheduling using virtual calendars and email notifications. Created a custom meeting scheduling system for accounts that couldn&#39;t sync with Nylas, allowing users to generate custom meeting invitations and send them to their contacts. Developed custom APIs to retrieve and update the data in Nylas and Salesforce, ensuring that the data was accurate, reliable, and secure. Implemented authentication and authorization features to control access to the Nylas and Salesforce data, ensuring that only authorized personnel could access the sensitive data. Conducted extensive testing to ensure the reliability and performance of the new system, and resolved any issues that arose during testing.",
    description:
      "The client is a Business consultant firm in the United States which provides leads to the Real Estates business. The business requirement of the project was that the client wanted the integration of Nylas with Zoom, Google, Microsoft, and Salesforce.",
  },
  {
    id: 1,
    name: "Online Headphone-Selling Website Enhancements with UI Design and OCAPI Implementation",
    details:
      "Designed website pages including pop windows of PDP, menu, and footer based on Figma designs provided by the client, utilizing Tailwind and custom CSS for styling.Configured OCAPI and provided Postman collections to shipping providers to enable them to utilize OCAPI for updating shipment status and tracking number custom attributes.Developed a job that was triggered by shipping providers using OCAPI to send shipment emails to customers, improving the customer experience and providing real-time tracking information.Utilized SiteGenesis, the Salesforce B2C Commerce Cloud platform, to set up the clientwebsite and implement custom functionalities.Developed and implemented custom email templates for sending emails to customers upon order shipment, improving customer communication and experience.Created a custom cartridge for sending and fetching orders to and from an FTP server, enabling efficient order management and processing.Integrated Avalara with SFCC for taxation functionality, allowing for accurate and automated tax calculations and management.",
    description:
      "The client is an online headphone-selling website based in the USA. The business requirement of the project is to have the website pages created and also needed to update the shipment status and tracking number.",
  },
  {
    id: 1,
    name: "OCAPI for Shipment Status & Tracking",
    details:
      "Needed to  the shipment status and tracking number.Configured OCAPI so that the shipping providers can utilize OCAPI calls to update shipment status and tracking number custom attribute.Created a job to send the shipment via emailsImplement 2FA for customer loginCreated custom pages for checkout flowImplement notify me a functionality to notify when the product is back in stockCreated a job that was triggered using OCAPI to send shipment emails.This implementation helped them to improve shipment tracking",
    description:
      "The client was based in the USA and they already had a system in place and were using SFCC for their business but were not able to get the shipment tracking data and status. So, they wanted to incorporate this feature to improve the user experience.",
  },
  {
    name: "CPQ Implementation for Technology Solution Provider",
    details:
      " Customized AppExchange application to manage products and pricing according to the regions worldwide.Implemented a discount approval system where every discount needs approval from higher authorities.Implemented multi-currency in Salesforce CPQ.Created bundles with multiple features and multiple product optionsImplemented option layouts.The customization made it super easy to manage products even in the different regions with multi-currency by saving clients valuable time in managing products.",
    description:
      "The client is a technology solution provider and they design and implement innovative solutions for business and advanced infrastructure. The business requirement was to customize their AppExchange application",
  },

  // Add more project data as needed...
];

const ProjectGrid = () => {
  return (
    <Container fluid className="project-container">
      <h1 className="work-text">Our Work</h1>
      {projects.map((project) => (
        <Col>
          <Project
            key={project.id}
            name={project.name}
            details={project.details}
            description={project.description}
          />
        </Col>
      ))}
    </Container>
  );
};

export default ProjectGrid;
