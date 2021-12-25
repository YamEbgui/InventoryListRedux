import React from "react";
//import components
import AddForm from "./AddForm";
import InventoryList from "./InventoryList";
import SubmitButton from "./SubmitButton";
import { Container } from "react-bootstrap";

export default function InventoryForm() {
  return (
    <Container className="d-flex flex-column">
      <InventoryList />
      <SubmitButton />
      <AddForm />
    </Container>
  );
}
