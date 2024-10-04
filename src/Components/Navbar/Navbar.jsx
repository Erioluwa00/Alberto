import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top bg-body-tertiary ">
      <Container >
        <Navbar.Brand href="/" className='Nav-name'>Alberto</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
            <NavDropdown title="Explore" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/products">Products</NavDropdown.Item>
              <NavDropdown.Item href="/technology">
                Technology
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/galleries">
                Gallery
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/support">Support</Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;