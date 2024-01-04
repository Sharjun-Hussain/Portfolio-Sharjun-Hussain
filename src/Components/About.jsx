import { Col, Container, Image, Row } from "react-bootstrap";
import My from "../assets/My.jpg";
import { Suspense } from "react";

const About = () => {
  return (
   
      <Container id="about" className=" about-section ">
        <Row>
          <Col>
            <div className="heading ">
              <h2>
                {" "}
                <span style={{ fontSize: "20px" }}>01.</span> About Me
              </h2>{" "}
              <hr />
              <div />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6} xs={12} className="order-1 order-md-0">
            <p>
              As a dedicated full-stack developer, I specialize in React JS,
              Node JS, Express JS, Laravel, and Bootstrap. With a keen passion
              for crafting top-tier web applications, my skills cover dynamic
              user interfaces and robust server-side logic. Committed to
              excellence, I bring proficiency and enthusiasm to every project.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <Container className="">
              <Row>
              <Col md={6} xs={6} className="">
                <ul>
                  <li>React JS</li>
                  <li>Express JS</li>
                  <li>Javascript</li>
                  <li>Laravel</li>
                  <li>React Bootstrap</li>
                  <li>Github Actions | Netlify CI/CD</li>
                </ul>
              </Col>
              <Col md={6} xs={6} >
                <ul>
                  <li>My SQL</li>
                  <li>PHP</li>
                  <li>MongoDB </li>
                  <li>Wordpress</li>
                  <li>MongoDB</li>
                  <li>Docker</li>
                </ul>
              </Col>
              </Row>
              
            </Container>
          </Col>
          <Col md={6} xs={12} className="MyImage-Container order-0 ">
           <Suspense fallback="Loading">
            <Image
              src={My}
              fluid
              className=" mt-3 MyImage order-0 "
              thumbnail
              width={350}
            />
            </Suspense> 
           
          </Col>
        </Row>
      </Container>
    
  );
};

export default About;
