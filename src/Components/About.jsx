// import { Suspense, } from "react";
import { Col, Container, Row } from "react-bootstrap";
import My from "../assets/My.jpg";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (

    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -20 }}
      transition={{ duration: 1 , delay:0.5}}
    >
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
            As an accomplished full-stack developer, I specialize in crafting
            dynamic and user-friendly web applications. With a keen focus on application
            development, I am gearing towards creating Point of Sale (POS)
            systems and cloning applications. My commitment to delivering
            engaging and innovative web solutions is evident in the successful
            development of my portfolio site.  I am well-prepared to bring my
            expertise to new development endeavors and collaborative teams.
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
              <Col md={6} xs={6}>
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
          <LazyLoadImage src={My} alt="Hello" effect="blur" width={350} />
          {/* <Suspense fallback={<div>Loading</div>}>
            <Image
              src={My}
              fluid
              className=" mt-3 MyImage order-0 "
              thumbnail
              width={350}
              loading="lazy"
            />
            </Suspense>  */}
        </Col>
      </Row>
    </Container>
    </motion.div>
  );
};

export default About;
