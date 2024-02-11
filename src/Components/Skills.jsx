import { Container,Row,Col } from "react-bootstrap"



const Skills = () => {
  return (
    <div>
         <Container id="skills" className="about-section">
              <Row>
                <div className="text-center mt-2 mb-5"><h2>Here are a few technologies I’ve been working with recently:</h2></div>
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
    </div>
  )
}

export default Skills