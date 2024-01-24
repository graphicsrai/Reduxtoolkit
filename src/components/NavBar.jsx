import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { itemCount } = useSelector((state) => state.cart);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="/cart" as={Link}>
              Cart{" "}
              <sup style={{ color: "white", fontWeight: "500" }}>
                {itemCount}
              </sup>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
