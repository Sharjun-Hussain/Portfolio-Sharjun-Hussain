// import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -20 }}
      transition={{ duration: 1 }}
    >
      {/* <div>Side element</div> */}
      <Container id="Home">
        <Row>
          <Col className="Hero-section">
            {" "}
            <h1 className="small-heading pb-2 ">Hi, my name is </h1>
            <h2 className="big-heading">Sharjun Hussain.</h2>
            <h3 className="sub-heading">I build things for the web.</h3>
            <p>
              I’m a fulstack dev specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement. I
              am an enthusiastic and fast learner with expertise in React JS,
              Node JS, Express JS, Laravel, and Bootstrap. As a full-stack
              developer, I have honed my skills in these technologies and have a
              strong passion for creating excellent web applications.
            </p>
            <a
              className="button"
              href="https://linkedin.com/in/sharjun-hussain"
            >
              Connect with Me
            </a>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Hero;
