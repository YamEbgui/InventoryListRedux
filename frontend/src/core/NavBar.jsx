import { Container, Navbar } from "react-bootstrap";
import logoImage from "../images/InventoryIcon.jpg";

export default function NavBar() {
  return (
    <Navbar bg="warning" variant="light" expand="lg">
      <Container className="d-flex flex-row justify-content-center">
        <Navbar.Brand href="#home" className="h1 text-center">
          <img
            src={logoImage}
            width="40"
            height="30"
            className="d-inline-block align-top"
            alt="Weather App logo"
          />
          {" Inventory List"}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
