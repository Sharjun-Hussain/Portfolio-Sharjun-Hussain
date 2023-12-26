import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeIcon from '../assets/Icons/Home.gif'
import ContactIcon from '../assets/Icons/Contact.gif'

import Offcanvas from "react-bootstrap/Offcanvas";

function TopNav() {
  return (
    <>
      <Navbar expand="lg" className=" my-3 ">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#action1"> <img src={HomeIcon} alt="Home Icon" width={25} /> HOME</Nav.Link>
                <Nav.Link href="#action2">PROJECTS</Nav.Link>
                <Nav.Link href="#action2"><img src={ContactIcon} alt="Home Icon" width={25} /> CONTACT ME</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
