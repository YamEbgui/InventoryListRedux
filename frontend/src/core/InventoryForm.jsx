import React from "react";
import { Container } from "react-bootstrap";
import AddForm from "./AddForm";
import InventoryList from "./InventoryList";
import SubmitButton from "./SubmitButton";

export default function InventoryForm() {
  return (
    <Container className="d-flex flex-column">
      <InventoryList />
      <SubmitButton />
      <AddForm />
    </Container>
  );
}
