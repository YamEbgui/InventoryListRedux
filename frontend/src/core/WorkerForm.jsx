import React from "react";
import { Button, Form } from "react-bootstrap";

export default function WorkerForm() {
  return (
    <Form className="d-flex flex-column justify-content-center">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicWorkplace">
        <Form.Label>Work place</Form.Label>
        <Form.Control type="text" placeholder="Enter work place" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="Date" placeholder="" />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  );
}
