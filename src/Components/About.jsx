// import { Suspense, } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import My from "../assets/My.jpg";
import { motion } from "framer-motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -20 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <Container id="about" className=" about-section   ">
        <Row>
          <Col>
            <div className="aboutHeading ">
              <h2 className="text-center text-lg-start mobile-Responsive afterandbefore">
                {" "}
                <span className=" d-none d-lg-inline " style={{ fontSize: "25px" }}>01.</span> ABOUT ME
              </h2>{" "}
              
              <div />
            </div>
          </Col>
        </Row>

        <Row className="content" >
          <Col md={6} xs={12} className="order-1 order-md-0">
            <p>
              As an accomplished full-stack developer, I specialize in crafting
              dynamic and user-friendly web applications. With a keen focus on
              application development, I am gearing towards creating Point of
              Sale (POS) systems and cloning Web applications.
            </p>
            <p>
              My commitment to delivering engaging and innovative web solutions
              is evident in the successful development of my portfolio site. I
              am well-prepared to bring my expertise to new development
              endeavors and collaborative teams.
            </p>
          </Col>
          <Col
            md={6}
            xs={12}
            className=" order-0 d-flex  justify-content-center  "
          >
            <div className="MyImg"></div>
            
            {/* <LazyLoadImage  src={My} alt="Hello" effect="blur" width={350}  /> */}
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
