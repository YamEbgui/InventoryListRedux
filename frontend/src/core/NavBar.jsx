import { Container, Navbar } from "react-bootstrap";
import logoImage from "../images/InventoryIcon.jpg";

export default function NavBar() {
  return (
    <Navbar bg="warning" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="h1">
          <img
            src={logoImage}
            width="60"
            height="45"
            className="d-inline-block align-top"
            alt="Weather App logo"
          />
          {" Inventory List"}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
