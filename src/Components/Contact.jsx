/* eslint-disable react/no-unescaped-entities */
// import Tilt from "react-parallax-tilt";

import  Twitter  from "../assets/Icons/Twitter.svg";
import  Linkedin  from "../assets/Icons/Linkedin.svg";
import  Mail  from "../assets/Icons/Mail.svg";
import  Github  from "../assets/Icons/Github.svg";
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
                    <span style={{ fontSize: "16px" }}>04. What's Next</span>
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
        <Container>
          <Row>
            <Col>
            <div className="SocialIconsWrapper d-flex justify-content-center gap-3 ">
              <a href="https://twitter.com/sharjun_hussain/"><div className="Social"><img src={Twitter} width={30} /></div></a>
              <a href="https://www.linkedin.com/in/sharjun-hussain/"><div className="Social"><img src={Linkedin} width={22} /></div></a>
              <a href="https://github.com/Sharjun-Hussain/"><div className="Social"><img src={Github} width={25} /></div></a>
              <a href="mailto:sharjunhussain@outlook.com"> <div className="Social"><img src={Mail} width={30} /></div></a>
              
            </div>
            </Col>
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
