import React from "react";
import "../components/navbarStyle.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
function Navbarr() {
  return (
    <>
      <Navbar
        className="navbarContainer d-flex  justify-content-center shadow "
        expand="lg"
        bg="light"
        variant="light"
        collapseOnSelect
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 d-flex justify-content-evenly align-items-center">
              <Nav.Link href="/">Home page</Nav.Link>
              <NavDropdown title="Left dropdown" id="navbarScrollingDropdown">
                <div>
                  <NavDropdown.Item href="anypage" className="p-2 px-4">
                    Any page
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div href="#action4" className=" px-3 dropend">
                    <NavDropdown
                      title=" Second page  "
                      id="navbarScrollingDropdown2"
                    >
                      <NavDropdown.Item
                        href="/anotherpage"
                        className="p-2 px-4"
                      >
                        Another page
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/anypage" className="p-2 px-4">
                        Any page
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <div href="#action5" className="px-3 dropend">
                        <NavDropdown
                          title="Third level"
                          id="navbarScrollingDropdown2"
                        >
                          <NavDropdown.Item href="anypage" className="p-2 px-4">
                            Any page
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item
                            href="anotherpage"
                            className="p-2 px-4"
                          >
                            Another page
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                    </NavDropdown>
                  </div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="anotherpage" className="p-2 px-4">
                    Another page
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="#pricing">Mega Menu</Nav.Link>
              <Nav.Link href="anypage">Any page</Nav.Link>
              <Nav.Link href="#pricing">Right dropdown</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
