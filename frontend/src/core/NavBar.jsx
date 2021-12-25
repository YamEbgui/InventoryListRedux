//import for redux state management
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions";
//import components
import { Button, Container, Navbar } from "react-bootstrap";
//import image
import logoImage from "../images/InventoryIcon.jpg";

export default function NavBar() {
  const info = useSelector((state) => state.information);

  const dispatch = useDispatch();
  return (
    <Navbar bg="warning" variant="light" expand="lg">
      <Container className="d-flex flex-row justify-content-lg-around">
        {info === null ? (
          ""
        ) : (
          <>
            <Button
              onClick={(e) => {
                dispatch(logout());
              }}
              variant="secondary"
              size="sm"
            >
              Logout
            </Button>
            <Navbar.Brand className="h3">
              {"COMPANY:" + info.workPlace.toUpperCase()}
            </Navbar.Brand>
            <Navbar.Brand className="h3">
              {"NAME: " + info.worker.toUpperCase()}
            </Navbar.Brand>
          </>
        )}
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
