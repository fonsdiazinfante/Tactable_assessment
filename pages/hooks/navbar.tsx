import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Tactable Assesment
        <img
              src="tactable.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Tactable logo"
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>
                <link href="/">
                    Home
                </link>
            </Nav>
            <NavDropdown title="Assessments" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <link href="/posts">
                    Front End
                </link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <link href="/backend">
                    Back End
                </link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <link href="/data">
                    Data
                </link>
            </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;