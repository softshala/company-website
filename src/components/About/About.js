import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import { FaHandsHelping, FaTrophy, FaLightbulb, FaUsers } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header-section">
        <div className="about-header-content">
          <h1>YOUR TRUSTED CONSULTING PARTNER</h1>
          <p>
            As a trusted IT partner, we combine technical expertise and industry
            insights to deliver scalable and secure solutions that optimize
            operations and fuel business growth.
          </p>
        </div>
      </header>

      <Container fluid className="about-main-section">
        <div className="about-us">
          <h1>About Us</h1>

          <section>
            <h2>Who We Are</h2>
            <p>
              Salesforce is the global leader in Customer Relationship
              Management (CRM), bringing companies closer to their customers in
              the digital age. Founded in 1999, Salesforce has revolutionized
              the way businesses operate by providing a comprehensive suite of
              cloud-based applications that drive customer success, empower
              innovation, and foster a collaborative, connected world.
            </p>
          </section>

          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is simple yet profound: to empower businesses to
              achieve greater success by connecting them with their customers in
              innovative ways. We believe in leveraging technology to create a
              more connected, efficient, and inclusive world. Our goal is to
              transform the way companies interact with their customers,
              partners, and employees.
            </p>
          </section>

          <section>
            <h2>Our Values</h2>
            <Row>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body>
                    <FaHandsHelping size={50} />
                    <Card.Title>Trust</Card.Title>
                    <Card.Text>
                      We are dedicated to maintaining the highest level of trust
                      with our customers, partners, and employees through
                      transparency and integrity.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body>
                    <FaTrophy size={50} />
                    <Card.Title>Customer Success</Card.Title>
                    <Card.Text>
                      Our success is deeply intertwined with the success of our
                      customers. We are committed to helping our customers
                      achieve their goals and drive their businesses forward.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body>
                    <FaLightbulb size={50} />
                    <Card.Title>Innovation</Card.Title>
                    <Card.Text>
                      Innovation is in our DNA. We continuously seek new ways to
                      solve problems and create value, ensuring that our
                      solutions are always at the cutting edge of technology.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center">
                  <Card.Body>
                    <FaUsers size={50} />
                    <Card.Title>Equality</Card.Title>
                    <Card.Text>
                      We strive to create a diverse and inclusive environment
                      where everyone feels valued and empowered to bring their
                      authentic selves to work.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          <section>
            <h2>Our Story</h2>
            <p>
              Salesforce was founded by Marc Benioff and Parker Harris with a
              vision to create an on-demand information management service that
              would replace traditional enterprise software technology. Starting
              from a small apartment in San Francisco, Salesforce has grown into
              a global powerhouse, serving hundreds of thousands of businesses
              of all sizes across various industries.
            </p>
            <p>
              Through continuous innovation and a commitment to customer
              success, Salesforce has expanded its offerings to include
              solutions for sales, service, marketing, commerce, and more, all
              built on the trusted Salesforce Platform.
            </p>
          </section>

          <section>
            <h2>Our Impact</h2>
            <p>
              Salesforce is not just about business; we are committed to making
              a positive impact on the world. Our 1-1-1 philanthropic model
              dedicates 1% of our equity, 1% of our product, and 1% of our
              employees' time to improve communities around the world. We
              believe in giving back and making a tangible difference through
              our initiatives in education, equality, and the environment.
            </p>
          </section>

          <section>
            <h2>Leadership</h2>
            <p>
              Our leadership team is composed of visionary leaders who guide our
              company with their expertise and dedication. Led by Marc Benioff,
              our CEO and Chairman, the team is focused on driving our mission
              forward and ensuring we remain at the forefront of innovation and
              customer success.
            </p>
          </section>

          <section>
            <h2>Join Us</h2>
            <p>
              We are always looking for passionate, talented individuals to join
              our team and help us drive the next wave of innovation. Explore
              our careers page to find out how you can be a part of the
              Salesforce family and make an impact.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              We'd love to hear from you! Whether you're interested in our
              products, have a question, or just want to connect, feel free to
              reach out. Visit our contact page for more information on how to
              get in touch.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default AboutPage;
