import { Card, Col, Container, Row } from "react-bootstrap";
import Bookmarking from "../assets/Icons/Bookmarking.gif";
import { Link } from "react-router-dom";
import { content } from "../Utilities/content";

const Projects = () => {
  return (
    <Container id="projects" className=" project-section ">
      <Row>
        <Col>
          <div className="projectheading text-end pt-5 ">
            <h2
              style={{ textTransform: "Capitalize" }}
              className="afterandbefore"
            >
              {" "}
              <span
                className="d-none d-lg-inline "
                style={{ fontSize: "25px" }}
              >
                03.
              </span>{" "}
              Some Things I’ve Built
            </h2>{" "}
            <div />
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4} xs={12}>
          <div className="Project-Card ">
            <Card>
              <Card.Header className="d-flex  justify-content-start ">
                <img
                  src={Bookmarking}
                  width={45}
                  style={{
                    background: "transparent",
                    marginLeft: "13px",
                    marginTop: "10px",
                  }}
                />
              </Card.Header>
              <Card.Body className=" text-white ">
                <div
                  className="px-4 text-white"
                  style={{ background: "transparent", fontSize: "22px" }}
                >
                  <Link to="https://github.com/Sharjun-Hussain/Portfolio-Sharjun-Hussain">
                    PortFolio
                  </Link>
                </div>
                <div
                  className="px-4 pt-3 text-white"
                  style={{
                    background: "transparent",
                    fontSize: "17px",
                    fontWeight: 300,
                    opacity: 0.8,
                  }}
                >
                  {" "}
                  My Portfolio site built with React, hosted on Netlify for
                  seamless accessibility. Utilizing GitHub Actions ensures
                  continuous deployment, keeping the content fresh and
                  up-to-date.
                </div>
              </Card.Body>
              <Card.Footer>
                <div
                  className="px-4 text-white mb-3 text-center"
                  style={{
                    background: "transparent",
                    fontSize: "12px",
                    fontWeight: 300,
                    opacity: 0.6,
                  }}
                >
                  React JS | React Bootstrap | Netlify | Framer Motion | Github
                  Action
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Col>

        <Col md={4} xs={12}>
          <div className="Project-Card">
            <Card>
              <Card.Header className="d-flex  justify-content-start ">
                <img
                  src={Bookmarking}
                  width={45}
                  style={{
                    background: "transparent",
                    marginLeft: "13px",
                    marginTop: "10px",
                  }}
                />
              </Card.Header>
              <Card.Body className=" text-white ">
                <div
                  className="px-4 text-white"
                  style={{ background: "transparent", fontSize: "22px" }}
                >
                  <Link to="https://github.com/Sharjun-Hussain/EventnSpot-Web-Application">
                    EventSpot Hall Booking
                  </Link>
                </div>

                <div
                  className="px-4 pt-3 text-white"
                  style={{
                    background: "transparent",
                    fontSize: "17px",
                    fontWeight: 300,
                    opacity: 0.8,
                  }}
                >
                  {" "}
                  The Event Hall Booking System based on the MERN stack is a web
                  application that allows users to search for and book event
                  halls or banquet venues.
                </div>
              </Card.Body>
              <Card.Footer>
                <div
                  className="px-4 text-white mb-3 text-center"
                  style={{
                    background: "transparent",
                    fontSize: "13px",
                    fontWeight: 300,
                    opacity: 0.6,
                  }}
                >
                  Mern Stack | Bootstrap | Netlify | Github Action | Cyclic |
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Col>

        <Col md={4} xs={12}>
          <div className="Project-Card">
            <Card>
              <Card.Header className="d-flex  justify-content-start ">
                <img
                  src={Bookmarking}
                  width={45}
                  style={{
                    background: "transparent",
                    marginLeft: "13px",
                    marginTop: "10px",
                  }}
                />
              </Card.Header>
              <Card.Body className=" text-white ">
                <div
                  className="px-4 text-white"
                  style={{ background: "transparent", fontSize: "22px" }}
                >
                  Accounting Book
                </div>
                <div
                  className="px-4 text-white"
                  style={{
                    background: "transparent",
                    fontSize: "17px",
                    fontWeight: 300,
                    opacity: 0.8,
                  }}
                >
                  {" "}
                  Accounting Book is a application designed to streamline
                  financial management. It enables users to track both income
                  and expenses. With its user-friendly interface and secure
                  infrastructure, This is the ideal solution for businesses to
                  maintain organized and accurate financial records.
                </div>
              </Card.Body>
              <Card.Footer>
                <div
                  className="px-4 text-white mb-3 text-center"
                  style={{
                    background: "transparent",
                    fontSize: "13px",
                    fontWeight: 300,
                    opacity: 0.6,
                  }}
                >
                  Mern Stack | Bootstrap | Github Action | Netlify CI/CD
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Col>

        <Col md={4} xs={12}>
          <div className="Project-Card">
            <Card>
              <Card.Header className="d-flex  justify-content-start ">
                <img
                  src={Bookmarking}
                  width={45}
                  style={{
                    background: "transparent",
                    marginLeft: "13px",
                    marginTop: "10px",
                  }}
                />
              </Card.Header>
              <Card.Body className=" text-white ">
                <div
                  className="px-4 text-white"
                  style={{ background: "transparent", fontSize: "22px" }}
                >
                  Landing Page For Jannah Marketing (PVT) LTD
                </div>
                <div
                  className="px-4 text-white"
                  style={{
                    background: "transparent",
                    fontSize: "17px",
                    fontWeight: 300,
                    opacity: 0.8,
                  }}
                >
                  {" "}
                  I recently developed a landing page for Jannah Marketing (PVT)
                  Ltd, a leading beverage company. This landing page, built
                  using React, showcases the company's diverse range of
                  beverages and highlights its commitment to quality and
                  customer satisfaction.
                </div>
              </Card.Body>
              <Card.Footer>
                <div
                  className="px-4 text-white mb-3 text-center"
                  style={{
                    background: "transparent",
                    fontSize: "13px",
                    fontWeight: 300,
                    opacity: 0.6,
                  }}
                >
                  Mern Stack | Bootstrap | Github Pages | Git
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Col>

        <Col md={4} xs={12}>
          <div className="Project-Card">
            <Card>
              <Card.Header className="d-flex  justify-content-start ">
                <img
                  src={Bookmarking}
                  width={45}
                  style={{
                    background: "transparent",
                    marginLeft: "13px",
                    marginTop: "10px",
                  }}
                />
              </Card.Header>
              <Card.Body className=" text-white ">
                <div
                  className="px-4 text-white"
                  style={{ background: "transparent", fontSize: "22px" }}
                >
                  E-Commerce Site For JSON Electric Shop
                </div>
                <div
                  className="px-4 text-white"
                  style={{
                    background: "transparent",
                    fontSize: "17px",
                    fontWeight: 300,
                    opacity: 0.8,
                  }}
                >
                  {" "}
                  JSON Electric Shop is a comprehensive e-commerce site built
                  using WooCommerce and WordPress, designed to provide a
                  seamless shopping experience for customers looking for
                  electrical products.
                </div>
              </Card.Body>
              <Card.Footer>
                <div
                  className="px-4 text-white mb-3 text-center"
                  style={{
                    background: "transparent",
                    fontSize: "13px",
                    fontWeight: 300,
                    opacity: 0.6,
                  }}
                >
                  Wordpress | WooCommerce |
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Col>

        <Col md={4} xs={12}>
          <div className="Project-Card">
            <Card>
              <Card.Header className="d-flex  justify-content-start ">
                <img
                  src={Bookmarking}
                  width={45}
                  style={{
                    background: "transparent",
                    marginLeft: "13px",
                    marginTop: "10px",
                  }}
                />
              </Card.Header>
              <Card.Body className=" text-white ">
                <div
                  className="px-4 text-white"
                  style={{ background: "transparent", fontSize: "22px" }}
                >
                  URL Shortener
                </div>
                <div
                  className="px-4 text-white"
                  style={{
                    background: "transparent",
                    fontSize: "17px",
                    fontWeight: 300,
                    opacity: 0.8,
                  }}
                >
                  {" "}
                  URL Shortener is an application designed to shorten the long
                  web addresses. This tool allows users to convert lengthy URLs
                  into shorter, easy-to-share links.
                </div>
              </Card.Body>
              <Card.Footer>
                <div
                  className="px-4 text-white mb-3 text-center"
                  style={{
                    background: "transparent",
                    fontSize: "13px",
                    fontWeight: 300,
                    opacity: 0.6,
                  }}
                >
                  React | Github | Github Action | Cpanel Hosting | Rest API
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
