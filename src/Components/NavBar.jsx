import Container from "react-bootstrap/Container";
import logo from "../assets/Logo/logo.png";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeIcon from "../assets/Icons/Home.gif";
import ContactIcon from "../assets/Icons/Contact.gif";

import Offcanvas from "react-bootstrap/Offcanvas";

function TopNav() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="ms-2 py-4 " href="#home">
            <img src={logo} width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} data-bs-dismiss="offcanvas" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body data-bs-dismiss="offcanvas" >
              <Nav className=" d-flex  justify-content-end flex-grow-1 pe-3  my-3  py-4">
                <Nav.Link href="#about" className="px-3 ">
                  {" "}
                  <img
                    src={HomeIcon}
                    className="me-2"
                    alt="Home Icon"
                    width={25}
                  />{" "}
                  <span className="text-white">01. </span> About
                </Nav.Link>
                <Nav.Link href="#projects" className="px-3">
                  {" "}
                  <img
                    src={HomeIcon}
                    className="me-3"
                    alt="Home Icon"
                    width={25}
                  />
                       <span className="text-white">02. </span> Projects
                </Nav.Link>
                <Nav.Link href="#contact" className="px-3  ">
                  <img
                    src={ContactIcon}
                    className="me-2"
                    alt="Home Icon"
                    width={25}
                  />{" "}
                      <span className="text-white ">03. </span> Contact
                </Nav.Link>
                <a className="Resumebutton">Resume</a>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
