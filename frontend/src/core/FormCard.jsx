import React from "react";
//import components
import WorkerForm from "./WorkerForm";
import { Card } from "react-bootstrap";

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
