import React from "react";
import { Card } from "react-bootstrap";
import WorkerForm from "./WorkerForm";

export default function FormCard() {
  return (
    <Card
      bg="Light"
      text="dark"
      style={{ width: "20rem", height: "20rem" }}
      className="mt-2 mx-auto"
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        <WorkerForm />
      </Card.Body>
    </Card>
  );
}
