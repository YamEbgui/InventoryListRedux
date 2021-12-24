import React from "react";
import { Container } from "react-bootstrap";
import AddForm from "./AddForm";
import InventoryList from "./InventoryList";

export default function InventoryForm() {
  return (
    <Container>
      <InventoryList />
      <AddForm />
    </Container>
  );
}
