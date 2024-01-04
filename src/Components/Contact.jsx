/* eslint-disable react/no-unescaped-entities */
// import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ duration: 1 }}
        >
          {/* <div>Side element</div> */}
          <Container id="contact">
            <Row>
              <Col>
                <div className="heading text-center  ">
                  <h2>
                    {" "}
                    <span style={{ fontSize: "16px" }}>03. What's Next</span>
                  </h2>{" "}
                  <div />
                </div>
              </Col>
            </Row>
          </Container>
        </motion.div>

        <Container>
          <Row>
            <h2 className="big-heading-Contact text-center opacity-75  text-capitalize ">
              Get In Touch
            </h2>
            <div className="contact-text mt-3">
              I am actively seeking new opportunities as a full-stack software
              developer. My inbox is always open for inquiries or job-related
              discussions. Whether you have a question or want to discuss
              potential opportunities, feel free to reach out. I'm enthusiastic
              about exploring new roles and would love to connect with you!
            </div>

            <div className="pt-5 d-flex  justify-content-center ">
              <a className="button" href="mailto:mrjoon005@gmail.com">
                Say Hello
              </a>
            </div>
          </Row>
        </Container>
      </div>

      <div className="footer d-flex justify-content-center pb-5">
        Designed By Sharjun Hussain.
      </div>
    </div>
  );
};

export default Contact;
