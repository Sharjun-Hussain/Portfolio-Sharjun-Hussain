import { Col, Container, Image, Row } from "react-bootstrap";
import My from '../assets/My.jpg'

const About = () => {
  return (
    <div>
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
          <Col md={6} xs={12}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              pariatur numquam maxime, culpa delectus vel minus magnam
              consequuntur minima tenetur dignissimos laudantium dolor autem
              nesciunt, mollitia quis a eum vitae.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              pariatur numquam maxime, culpa delectus vel minus magnam
              consequuntur minima tenetur dignissimos laudantium dolor autem
              nesciunt, mollitia quis a eum vitae.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              pariatur numquam maxime, culpa delectus vel minus magnam
              consequuntur minima tenetur dignissimos laudantium dolor autem
              nesciunt, mollitia quis a eum vitae.
            </p>
          </Col>
          <Col md={6} xs={12} className="MyImage-Container">
          <div className="top"></div>
            <Image src={My} fluid className=" mt-3 MyImage" thumbnail width={350}/>
            <div className="bg"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
