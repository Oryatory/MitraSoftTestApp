import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { useState } from "react";

const navigation = [
  { id: 1, title: "Posts", path: "/" },
  { id: 2, title: "About Me", path: "/about" },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Container>
        <Navbar
          expand="xxl"
          className="justify-content-between align-items-center m-auto"
          style={{ maxWidth: "768px" }}
        >
          <Navbar.Brand>JSON Placeholder</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={handleShow}
            style={{ backgroundColor: "#fff" }}
          />
          <Navbar.Collapse id="navbar-nav">
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav fill className="flex-column" position="end">
                  {navigation.map(({ id, title, path }) => (
                    <NavLink
                      key={id}
                      to={path}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: "2rem",
                      }}
                    >
                      {title}
                    </NavLink>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
