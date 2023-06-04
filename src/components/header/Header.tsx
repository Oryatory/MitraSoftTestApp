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
          expand="all"
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
                <Nav fill className="flex-column">
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
                  <div
                    style={{ marginTop: "auto", flexDirection: "column" }}
                    className="d-flex align-items-end"
                  >
                    <div
                      className="rounded-circle overflow-hidden mb-3"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src="https://i.ibb.co/KDhk2y5/photo-2022-12-03-15-26-10-2.jpg"
                        alt="Avatar"
                        className="w-100 h-100 object-fit-cover"
                      />
                    </div>

                    <h3>Ilya Larin</h3>
                    <p>larin.ia28@gmail.com</p>
                  </div>
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
